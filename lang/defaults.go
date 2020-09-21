package lang

var enUS language = language{
	lines: map[string]string{
		"disallow-non-validated-fields": "Non-validated fields are forbidden.",
		"malformed-request":             "Malformed request",
		"malformed-json":                "Malformed JSON",
		"auth.invalid-credentials":      "These credentials don't match our records.",
		"auth.no-credentials-provided":  "Invalid or missing authentication header.",
		"auth.jwt-invalid":              "Your authentication token is invalid.",
		"auth.jwt-not-valid-yet":        "Your authentication token is not valid yet.",
		"auth.jwt-expired":              "Your authentication token is expired.",
	},
	validation: validationLines{
		rules: map[string]string{
			"required":                         "The :field is required.",
			"required.array":                   "The :field values are required.",
			"numeric":                          "The :field must be numeric.",
			"numeric.array":                    "The :field values must be numeric.",
			"integer":                          "The :field must be an integer.",
			"integer.array":                    "The :field values must be integers.",
			"string":                           "The :field must be a string.",
			"string.array":                     "The :field values must be strings.",
			"array":                            "The :field must be an array.", // TODO add type of values in array if provided
			"array.array":                      "The :field values must be arrays.",
			"min.string":                       "The :field must be at least :min characters.",
			"min.numeric":                      "The :field must be at least :min.",
			"min.array":                        "The :field must have at least :min items.",
			"min.file":                         "The :field must be at least :min KiB.",
			"min.string.array":                 "The :field values must be at least :min characters.",
			"min.numeric.array":                "The :field values must be at least :min.",
			"min.array.array":                  "The :field values must have at least :min items.",
			"max.string":                       "The :field may not have more than :max characters.",
			"max.numeric":                      "The :field may not be greater than :max.",
			"max.array":                        "The :field may not have more than :max items.",
			"max.string.array":                 "The :field values may not have more than :max characters.",
			"max.numeric.array":                "The :field values may not be greater than :max.",
			"max.array.array":                  "The :field values may not have more than :max items.",
			"max.file":                         "The :field may not be greater than :max KiB.",
			"between.string":                   "The :field must be between :min and :max characters.",
			"between.numeric":                  "The :field must be between :min and :max.",
			"between.array":                    "The :field must have between :min and :max items.",
			"between.string.array":             "The :field values must be between :min and :max characters.",
			"between.numeric.array":            "The :field values must be between :min and :max.",
			"between.array.array":              "The :field values must have between :min and :max items.",
			"between.file":                     "The :field must be between :min and :max KiB.",
			"greater_than.string":              "The :field must be longer than the :other.",
			"greater_than.numeric":             "The :field must be greater than the :other.",
			"greater_than.array":               "The :field must have more items than the :other.",
			"greater_than.string.array":        "The :field values must be longer than the :other.",
			"greater_than.numeric.array":       "The :field values must be greater than the :other.",
			"greater_than.array.array":         "The :field values must have more items than the :other.",
			"greater_than.file":                "The :field must be larger than the :other.",
			"greater_than_equal.string":        "The :field must be longer or have the same length as the :other.",
			"greater_than_equal.numeric":       "The :field must be greater or equal to the :other.",
			"greater_than_equal.array":         "The :field must have more or the same amount of items as the :other.",
			"greater_than_equal.string.array":  "The :field values must be longer or have the same length as the :other.",
			"greater_than_equal.numeric.array": "The :field values must be greater or equal to the :other.",
			"greater_than_equal.array.array":   "The :field values must have more or the same amount of items as the :other.",
			"greater_than_equal.file":          "The :field must be the same size or larger than the :other.",
			"lower_than.string":                "The :field must be shorter than the :other.",
			"lower_than.numeric":               "The :field must be lower than the :other.",
			"lower_than.array":                 "The :field must have less items than the :other.",
			"lower_than.string.array":          "The :field values must be shorter than the :other.",
			"lower_than.numeric.array":         "The :field values must be lower than the :other.",
			"lower_than.array.array":           "The :field values must have less items than the :other.",
			"lower_than.file":                  "The :field must be smaller than the :other.",
			"lower_than_equal.string":          "The :field must be shorter or have the same length as the :other.",
			"lower_than_equal.numeric":         "The :field must be lower or equal to the :other.",
			"lower_than_equal.array":           "The :field must have less or the same amount of items as the :other.",
			"lower_than_equal.string.array":    "The :field values must be shorter or have the same length as the :other.",
			"lower_than_equal.numeric.array":   "The :field values must be lower or equal to the :other.",
			"lower_than_equal.array.array":     "The :field values must have less or the same amount of items as the :other.",
			"lower_than_equal.file":            "The :field must be the same size or smaller than the :other.",
			"distinct":                         "The :field must have only distinct values.",
			"distinct.array":                   "The :field values must have only distinct values.",
			"digits":                           "The :field must be digits only.",
			"digits.array":                     "The :field values must be digits only.",
			"regex":                            "The :field format is invalid.",
			"regex.array":                      "The :field values format is invalid.",
			"email":                            "The :field must be a valid email address.",
			"email.array":                      "The :field values must be valid email addresses.",
			"size.string":                      "The :field must be exactly :value characters-long.",
			"size.numeric":                     "The :field must be exactly :value.",
			"size.array":                       "The :field must contain exactly :value items.",
			"size.string.array":                "The :field values must be exactly :value characters-long.",
			"size.numeric.array":               "The :field values must be exactly :value.",
			"size.array.array":                 "The :field values must contain exactly :value items.",
			"size.file":                        "The :field must be exactly :value KiB.",
			"alpha":                            "The :field may only contain letters.",
			"alpha.array":                      "The :field values may only contain letters.",
			"alpha_dash":                       "The :field may only contain letters, numbers, dashes and underscores.",
			"alpha_dash.array":                 "The :field values may only contain letters, numbers, dashes and underscores.",
			"alpha_num":                        "The :field may only contain letters and numbers.",
			"alpha_num.array":                  "The :field values may only contain letters and numbers.",
			"starts_with":                      "The :field must start with one of the following values: :values.",
			"starts_with.array":                "The :field values must start with one of the following values: :values.",
			"ends_with":                        "The :field must end with one of the following values: :values.",
			"ends_with.array":                  "The :field values must end with one of the following values: :values.",
			"in":                               "The :field must have one of the following values: :values.",
			"in.values":                        "The :field values must have one of the following values: :values.",
			"not_in":                           "The :field must not have one of the following values: :values.",
			"not_in.array":                     "The :field values must not have one of the following values: :values.",
			"in_array":                         "The :field doesn't exist in the :other.",
			"in_array.array":                   "The :field values don't exist in the :other.",
			"not_in_array":                     "The :field exists in the :other.",
			"not_in_array.array":               "The :field values exist in the :other.",
			"timezone":                         "The :field must be a valid time zone.",
			"timezone.array":                   "The :field values must be valid time zones.",
			"ip":                               "The :field must be a valid IP address.",
			"ip.array":                         "The :field values must be valid IP addresses.",
			"ipv4":                             "The :field must be a valid IPv4 address.",
			"ipv4.array":                       "The :field values must be valid IPv4 addresses.",
			"ipv6":                             "The :field must be a valid IPv6 address.",
			"ipv6.array":                       "The :field values must be valid IPv6 addresses.",
			"json":                             "The :field must be a valid JSON string.",
			"json.array":                       "The :field values must be valid JSON strings.",
			"url":                              "The :field must be a valid URL.",
			"url.array":                        "The :field values must be valid URLs.",
			"uuid":                             "The :field must be a valid UUID:version.",
			"uuid.array":                       "The :field values must be valid UUID:version.",
			"bool":                             "The :field must be a boolean.",
			"bool.array":                       "The :field values must be booleans.",
			"same":                             "The :field and the :other must match.",
			"same.array":                       "The :field values and the :other must match.",
			"different":                        "The :field and the :other must be different.",
			"different.array":                  "The :field values and the :other must be different.",
			"confirmed":                        "The :field confirmation doesn't match.",
			"file":                             "The :field must be a file.",
			"mime":                             "The :field must be a file of type: :values.",
			"image":                            "The :field must be an image.",
			"extension":                        "The :field must be a file with one of the following extensions: :values.",
			"count":                            "The :field must have exactly :value file(s).",
			"count_min":                        "The :field must have at least :value file(s).",
			"count_max":                        "The :field may not have more than :value file(s).",
			"count_between":                    "The :field must have between :min and :max files.",
			"date":                             "The :field is not a valid date.",
			"date.array":                       "The :field values are not valid dates.",
			"before":                           "The :field must be a date before :date.",
			"before.array":                     "The :field values must be dates before :date.",
			"before_equal":                     "The :field must be a date before or equal to :date.",
			"before_equal.array":               "The :field must be dates before or equal to :date.",
			"after":                            "The :field must be a date after :date.",
			"after.array":                      "The :field values must be dates after :date.",
			"after_equal":                      "The :field must be a date after or equal to :date.",
			"after_equal.array":                "The :field values must be dates after or equal to :date.",
			"date_equals":                      "The :field must be a date equal to :date.",
			"date_equals.array":                "The :field values must be dates equal to :date.",
			"date_between":                     "The :field must be a date between :date and :max_date.",
			"date_between.array":               "The :field must be dates between :date and :max_date.",
			"object":                           "The :field must be an object.",
			"object.array":                     "The :field values must be objects.",
		},
		fields: map[string]attribute{
			"email": {
				Name: "email address",
			},
		},
	},
}
