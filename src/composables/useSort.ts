import { computed, ref } from 'vue'
import type { UnwrapRef, Ref } from 'vue'

import type { SortOrder } from '@/types'
import { sortBy } from '@/utils'

type KeysOrEmptyStr<T> = keyof T | ''

interface IParams<T> {
	initialSortKey?: KeysOrEmptyStr<T>
	arrayToSort: Ref<T[]>
}

export const useSort = <T>({
	arrayToSort,
	initialSortKey = '',
}: IParams<T>) => {
	const sortKey = ref<KeysOrEmptyStr<T>>(initialSortKey)
	const order = ref<SortOrder>('asc')

	const toggleOrder = () => {
		order.value = order.value === 'asc' ? 'desc' : 'asc'
	}

	const setSortKey = (newSortKey: KeysOrEmptyStr<T>) => {
		const prevSortKey = sortKey.value
		const isSameKeys = prevSortKey === newSortKey
		if (!isSameKeys) {
			sortKey.value = newSortKey as UnwrapRef<keyof T>
		} else {
			toggleOrder()
		}
	}

	const sortedArray = computed(() => {
		return !sortKey.value
			? arrayToSort.value
			: sortBy(arrayToSort.value, sortKey.value as keyof T, order.value)
	})

	return {
		sortedArray,
		setSortKey,
		sortKey,
		order,
	}
}
