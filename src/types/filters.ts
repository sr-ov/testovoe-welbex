export type Filters = '=' | '<>' | '>' | '<'

export interface FiltersOption {
	text: string
	value: Filters
	disabled: boolean
}
