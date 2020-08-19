(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{390:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#writing-middleware"}},[t._v("Writing middleware")])]),e("li",[e("a",{attrs:{href:"#applying-middleware"}},[t._v("Applying Middleware")])]),e("li",[e("a",{attrs:{href:"#built-in-middleware"}},[t._v("Built-in middleware")]),e("ul",[e("li",[e("a",{attrs:{href:"#disallownonvalidatedfields"}},[t._v("DisallowNonValidatedFields")])]),e("li",[e("a",{attrs:{href:"#trim"}},[t._v("Trim")])]),e("li",[e("a",{attrs:{href:"#gzip"}},[t._v("Gzip")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Middleware are handlers executed before the controller handler. They are a convenient way to filter, intercept or alter HTTP requests entering your application. For example, middleware can be used to authenticate users. If the user is not authenticated, a message is sent to the user even before the controller handler is reached. However, if the user is authenticated, the middleware will pass to the next handler. Middleware can also be used to sanitize user inputs, by trimming strings for example, to log all requests into a log file, to automatically add headers to all your responses, etc.")]),t._v(" "),e("p",[t._v("Writing middleware is as easy as writing standard handlers. In fact, middleware are handlers, but they have an additional responsibility: when they are done, the may or may not pass to the next handler, which is either another middleware or a controller handler.")]),t._v(" "),e("h2",{attrs:{id:"writing-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-middleware"}},[t._v("#")]),t._v(" Writing middleware")]),t._v(" "),e("p",[t._v("Each middleware is written in its own file inside the "),e("code",[t._v("http/middleware")]),t._v(" directory. A "),e("code",[t._v("Middleware")]),t._v(" is a function returning a "),e("code",[t._v("Handler")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("goyave.Middleware")]),t._v(" is an alias for "),e("code",[t._v("func(goyave.Handler) goyave.Handler")])])]),t._v(" "),e("p",[e("strong",[t._v("Example:")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyCustomMiddleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Handler "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pass to the next handler")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When implementing middleware, keep in mind that the request "),e("strong",[t._v("has not been validated yet")]),t._v("! Manipulating unvalidated data can be dangerous, especially in form-data where the data types are not converted by the validator yet. In middleware, you should always check if the request has been parsed correctly before trying to access its data:")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parsing OK")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("If you want your middleware to stop the request and respond immediately before reaching the controller handler, simply don't call the "),e("code",[t._v("next")]),t._v(" handler. In the following example, consider that you developed a custom authentication system:")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CustomAuthentication")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Handler "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("auth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Check")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusUnauthorized"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When a middleware stops a request, following middleware are "),e("strong",[t._v("not")]),t._v(" executed neither.")])]),t._v(" "),e("h2",{attrs:{id:"applying-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applying-middleware"}},[t._v("#")]),t._v(" Applying Middleware")]),t._v(" "),e("p",[t._v("When your middleware is ready, you will need to apply it to a router or a specific route. When applying a middleware to a router, all routes and subrouters will execute this middleware when matched.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MyCustomMiddleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/products"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" product"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MyCustomMiddleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"built-in-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-middleware"}},[t._v("#")]),t._v(" Built-in middleware")]),t._v(" "),e("p",[t._v("Built-in middleware is located in the "),e("code",[t._v("middleware")]),t._v(" package.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/System-Glitch/goyave/v2/middleware"')]),t._v("\n")])])]),e("h3",{attrs:{id:"disallownonvalidatedfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disallownonvalidatedfields"}},[t._v("#")]),t._v(" DisallowNonValidatedFields")]),t._v(" "),e("p",[t._v('DisallowNonValidatedFields validates that all fields in the request are validated by the RuleSet. The middleware stops the request and sends "422 Unprocessable Entity" and an error message if the user has sent non-validated field(s). Fields ending with '),e("code",[t._v("_confirmation")]),t._v(" are ignored.")]),t._v(" "),e("p",[t._v("If the body parsing failed, this middleware immediately passes to the next handler. "),e("strong",[t._v("This middleware shall only be used with requests having a rule set defined.")])]),t._v(" "),e("p",[t._v("The returned error message can be customized using the entry "),e("code",[t._v("disallow-non-validated-fields")]),t._v(" in the "),e("code",[t._v("locale.json")]),t._v(" language file.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DisallowNonValidatedFields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"trim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trim"}},[t._v("#")]),t._v(" Trim")]),t._v(" "),e("p",[e("Badge",{attrs:{text:"Since v2.0.0"}})],1),t._v(" "),e("p",[t._v("Trim removes all leading and trailing white space from string fields.")]),t._v(" "),e("p",[t._v("For example, "),e("code",[t._v('" \\t trimmed\\n \\t"')]),t._v(" will be transformed to "),e("code",[t._v('"trimmed"')]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" Gzip")]),t._v(" "),e("p",[e("Badge",{attrs:{text:"Since v2.7.0"}})],1),t._v(" "),e("p",[t._v("Gzip compresses HTTP responses with default compression level for clients that support it via the "),e("code",[t._v("Accept-Encoding")]),t._v(" header.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Gzip")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The compression level can be specified using "),e("code",[t._v("GzipLevel(level)")]),t._v(". The compression level should be "),e("code",[t._v("gzip.DefaultCompression")]),t._v(", "),e("code",[t._v("gzip.NoCompression")]),t._v(", or any integer value between "),e("code",[t._v("gzip.BestSpeed")]),t._v(" and "),e("code",[t._v("gzip.BestCompression")]),t._v(" inclusive. "),e("code",[t._v("gzip.HuffmanOnly")]),t._v(" is also available.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GzipLevel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gzip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BestCompression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);