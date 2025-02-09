package validation

// DistinctValidator validates the field under validation must be an array having
// distinct values.
type DistinctValidator[T comparable] struct {
	BaseValidator
}

// Validate checks the field under validation satisfies this validator's criteria.
func (v *DistinctValidator[T]) Validate(ctx *Context) bool {
	if empty, ok := ctx.Value.([]any); ok && len(empty) == 0 {
		// The array will stay `[]any` even after recursive validation if it's empty.
		// We don't want to check distinct elements for empty arrays.
		return true
	}
	list, ok := ctx.Value.([]T)
	if !ok {
		return false
	}

	found := make(map[T]struct{}, len(list))
	for _, v := range list {
		if _, ok := found[v]; ok {
			return false
		}
		found[v] = struct{}{}
	}
	return true
}

// Name returns the string name of the validator.
func (v *DistinctValidator[T]) Name() string { return "distinct" }

// Distinct the field under validation must be an array having distinct values.
func Distinct[T comparable]() *DistinctValidator[T] {
	return &DistinctValidator[T]{}
}
