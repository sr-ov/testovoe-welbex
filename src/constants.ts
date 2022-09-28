import type { FiltersOption } from '@/types'

export const INACTIVE_VALUE = -1
export const API_URL = 'http://localhost:4321/'
export const START_PAGE = 1
export const PAGE_ITEMS_COUNT = 5
export const FILTERS_OPTIONS: FiltersOption[] = [
	{ text: 'Равно', value: '=', disabled: true },
	{ text: 'Содержит', value: '<>', disabled: true },
	{ text: 'Больше', value: '>', disabled: true },
	{ text: 'Меньше', value: '<', disabled: true },
]
