import type { SortOrder } from '@/types'
import { sortNumbers, sortStrings } from '.'

export function sortBy<T>(arr: T[], key: keyof T, order: SortOrder = 'asc') {
	const sortedArray = [...arr].sort((a, b) => {
		const isNumber = typeof a[key] === 'number' && typeof b[key] === 'number'
		const isString = typeof a[key] === 'string' && typeof b[key] === 'string'

		return isNumber
			? sortNumbers(a[key] as number, b[key] as number)
			: isString
			? sortStrings(a[key] as string, b[key] as string)
			: 0
	})

	return order === 'asc' ? sortedArray : sortedArray.reverse()
}
