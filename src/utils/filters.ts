import { isEq, isGt, isIncludes, isLt } from '.'

export const filters = {
	'=': isEq,
	'<>': isIncludes,
	'>': isGt,
	'<': isLt,
}
