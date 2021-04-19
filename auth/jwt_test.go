package auth

import (
	"fmt"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go"
	"goyave.dev/goyave/v3"
	"goyave.dev/goyave/v3/config"
	"goyave.dev/goyave/v3/database"
)

type JWTAuthenticatorTestSuite struct {
	user *TestUser
	goyave.TestSuite
}

func (suite *JWTAuthenticatorTestSuite) SetupSuite() {
	config.Set("database.connection", "mysql")
	database.ClearRegisteredModels()
	database.RegisterModel(&TestUser{})

	database.Migrate()
}

func (suite *JWTAuthenticatorTestSuite) SetupTest() {
	suite.user = &TestUser{
		Name:  "Admin",
		Email: "johndoe@example.org",
	}

	database.GetConnection().Create(suite.user)
}

func (suite *JWTAuthenticatorTestSuite) createRequest(token string) *goyave.Request {
	request := suite.CreateTestRequest(httptest.NewRequest("GET", "/", nil))
	request.Header().Set("Authorization", "Bearer "+token)
	return request
}

func (suite *JWTAuthenticatorTestSuite) createWrongToken(method jwt.SigningMethod, userid string, nbf time.Time, exp time.Time) (string, error) {
	token := jwt.NewWithClaims(method, jwt.MapClaims{
		"userid": userid,
		"nbf":    nbf.Unix(), // Not Before
		"exp":    exp.Unix(), // Expiry
	})

	return token.SignedString([]byte(config.GetString("auth.jwt.secret")))
}

func (suite *JWTAuthenticatorTestSuite) TestAuthenticate() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	token, err := GenerateToken(suite.user.Email)
	suite.Nil(err)
	suite.Nil(tokenAuthenticator.Authenticate(suite.createRequest(token), authenticatedUser))
	suite.Equal("Admin", authenticatedUser.Name)
}

func (suite *JWTAuthenticatorTestSuite) TestTokenHasClaims() {
	token, err := GenerateToken(suite.user.Email)
	suite.Nil(err)
	claims := jwt.MapClaims{}
	parsedToken, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(config.GetString("auth.jwt.secret")), nil
	})
	suite.Nil(err)

	userID, ok := claims["userid"]
	suite.True(ok)
	suite.Equal(suite.user.Email, userID)
	suite.Equal(jwt.SigningMethodHS256, parsedToken.Method)
}

func (suite *JWTAuthenticatorTestSuite) TestTokenWithClaimsHasClaims() {
	token, err := GenerateTokenWithClaims(jwt.MapClaims{
		"sub":    suite.user.ID,
		"userid": suite.user.Email,
	}, jwt.SigningMethodHS256)
	suite.Nil(err)
	claims := jwt.MapClaims{}
	parsedToken, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(config.GetString("auth.jwt.secret")), nil
	})
	suite.Nil(err)

	userID, okID := claims["userid"]
	suite.True(okID)
	suite.Equal(suite.user.Email, userID)
	sub, okSub := claims["sub"]
	suite.True(okSub)
	suite.Equal(suite.user.ID, uint(sub.(float64)))
	suite.Equal(jwt.SigningMethodHS256, parsedToken.Method)
}

func (suite *JWTAuthenticatorTestSuite) TestTokenAsymmetricSigningMethod() {
	token, err := GenerateTokenWithClaims(jwt.MapClaims{
		"sub":    suite.user.ID,
		"userid": suite.user.Email,
	}, jwt.SigningMethodRS256)
	suite.Nil(err)
	claims := jwt.MapClaims{}
	parsedToken, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(config.GetString("auth.jwt.secret")), nil
	})
	suite.Nil(err)

	userID, okID := claims["userid"]
	suite.True(okID)
	suite.Equal(suite.user.Email, userID)
	sub, okSub := claims["sub"]
	suite.True(okSub)
	suite.Equal(suite.user.ID, uint(sub.(float64)))
	suite.Equal(jwt.SigningMethodHS256, parsedToken.Method)
}

func (suite *JWTAuthenticatorTestSuite) TestAuthenticateWithClaims() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	originalClaims := jwt.MapClaims{
		"sub":    suite.user.ID,
		"userid": suite.user.Email,
	}
	token, err := GenerateTokenWithClaims(originalClaims, jwt.SigningMethodHS256)
	suite.Nil(err)

	request := suite.createRequest(token)
	suite.Nil(tokenAuthenticator.Authenticate(request, authenticatedUser))
	suite.Equal("Admin", authenticatedUser.Name)
	claims := request.Extra["jwt_claims"].(jwt.MapClaims)
	suite.NotNil(claims)
	suite.Equal(float64(suite.user.ID), claims["sub"])
	suite.Equal(suite.user.Email, claims["userid"])
}

func (suite *JWTAuthenticatorTestSuite) TestGenerateTokenInvalidCredentials() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	token, err := GenerateToken("wrongemail@example.org")
	suite.Nil(err)
	suite.Equal("These credentials don't match our records.", tokenAuthenticator.Authenticate(suite.createRequest(token), authenticatedUser).Error())
}
func (suite *JWTAuthenticatorTestSuite) TestGenerateTokenWithClaimsInvalidCredentials() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	token, err := GenerateTokenWithClaims(jwt.MapClaims{
		"sub":    suite.user.ID,
		"userid": "wrongemail@example.org",
	}, jwt.SigningMethodHS256)
	suite.Nil(err)
	suite.Equal("These credentials don't match our records.", tokenAuthenticator.Authenticate(suite.createRequest(token), authenticatedUser).Error())
}

func (suite *JWTAuthenticatorTestSuite) TestAuthenticateInvalidToken() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	request := suite.CreateTestRequest(nil)
	request.Header().Set("Authorization", "Basic userauthtoken")
	suite.Equal("Invalid or missing authentication header.", tokenAuthenticator.Authenticate(request, authenticatedUser).Error())

	userNoTable := &TestUserPromoted{}
	suite.Equal("Your authentication token is invalid.", tokenAuthenticator.Authenticate(suite.createRequest("userauthtoken"), userNoTable).Error())

	suite.Panics(func() {
		userNoTable := &TestUserPromoted{}
		token, err := GenerateToken("wrongemail@example.org")
		suite.Nil(err)
		if err := tokenAuthenticator.Authenticate(suite.createRequest(token), userNoTable); err != nil {
			suite.Fail(err.Error())
		}
	})
}

func (suite *JWTAuthenticatorTestSuite) TestAuthenticateTokenInFuture() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	nbf := time.Now().Add(5 * time.Minute)
	token, err := suite.createWrongToken(jwt.SigningMethodHS256, suite.user.Email, nbf, nbf)
	suite.Nil(err)
	suite.Equal("Your authentication token is not valid yet.", tokenAuthenticator.Authenticate(suite.createRequest(token), authenticatedUser).Error())
}

func (suite *JWTAuthenticatorTestSuite) TestAuthenticateTokenExpired() {
	tokenAuthenticator := &JWTAuthenticator{}
	authenticatedUser := &TestUser{}
	nbf := time.Now()
	exp := nbf.Add(-5 * time.Minute)
	token, err := suite.createWrongToken(jwt.SigningMethodHS256, suite.user.Email, nbf, exp)
	suite.Nil(err)
	suite.Equal("Your authentication token is expired.", tokenAuthenticator.Authenticate(suite.createRequest(token), authenticatedUser).Error())
}

func (suite *JWTAuthenticatorTestSuite) TestOptional() {
	tokenAuthenticator := &JWTAuthenticator{Optional: true}
	suite.Nil(tokenAuthenticator.Authenticate(suite.CreateTestRequest(httptest.NewRequest("GET", "/", nil)), nil))
}

func (suite *JWTAuthenticatorTestSuite) TestClaimName() {
	tokenAuthenticator := &JWTAuthenticator{ClaimName: "sub"}

	authenticatedUser := &TestUser{}
	token, err := GenerateTokenWithClaims(jwt.MapClaims{
		"sub": suite.user.Email,
	}, jwt.SigningMethodHS256)
	suite.Nil(err)
	suite.Nil(tokenAuthenticator.Authenticate(suite.createRequest(token), authenticatedUser))
	suite.Equal("Admin", authenticatedUser.Name)
}

func (suite *JWTAuthenticatorTestSuite) TearDownTest() {
	suite.ClearDatabase()
}

func (suite *JWTAuthenticatorTestSuite) TearDownSuite() {
	database.Conn().Migrator().DropTable(&TestUser{})
	database.ClearRegisteredModels()
}

func TestJWTAuthenticatorSuite(t *testing.T) {
	goyave.RunTest(t, new(JWTAuthenticatorTestSuite))
}
