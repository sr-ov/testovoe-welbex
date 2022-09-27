import type { Filters } from '.'

export interface Head {
	title: string
	value: keyof Body
	filters: Filters[]
	sortable?: boolean
}

export interface Body {
	createdAt: string
	name: string
	count: number
	distance: number
}
