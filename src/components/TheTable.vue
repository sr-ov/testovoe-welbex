<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'

import { TheTableCol, AppInput, AppSelect, AppPagination } from '@/components'
import { useSort } from '@/composables'
import { filters } from '@/utils'
import type { Head, Body, Filters } from '@/types'
import { INACTIVE_VALUE, FILTERS_OPTIONS } from '@/constants'

interface Props {
	head: Head[]
	body: Body[]
}

const props = defineProps<Props>()
const { body, head } = toRefs(props)

const { sortedArray, setSortKey, sortKey, order } = useSort({
	arrayToSort: body,
})

const colOptions = computed(() =>
	head.value.map(({ title, filters, ...keys }) => {
		return {
			text: title,
			filters: FILTERS_OPTIONS.map((el) => ({
				...el,
				disabled: !filters.includes(el.value),
			})),
			...keys,
		}
	})
)

const selectedColOption = ref('')
const selectedColOptionIndex = ref(INACTIVE_VALUE)
const filtersOptions = computed(() =>
	selectedColOptionIndex.value === INACTIVE_VALUE
		? FILTERS_OPTIONS
		: colOptions.value[selectedColOptionIndex.value].filters
)
const selectedFilterOption = ref('')
const filterValue = ref('')
const filteredBody = computed(() => {
	const isEmpty =
		filterValue.value === '' ||
		selectedColOption.value === '' ||
		selectedFilterOption.value === ''

	return isEmpty
		? sortedArray.value
		: sortedArray.value.filter((el) => {
				const filter = selectedFilterOption.value as Filters
				const key = selectedColOption.value as keyof Body
				return filters[filter](el[key], filterValue.value)
		  })
})

const onChangeSelectedColOptionIndex = (e: Event) => {
	const target = e.currentTarget as HTMLSelectElement
	selectedColOptionIndex.value = target.selectedIndex - 1
	selectedFilterOption.value = ''
}

const currentPage = ref(1)
const pageItemsCount = 5
const totalPageCount = computed(() => {
	const totalPagesCount = body.value.length

	return totalPagesCount < pageItemsCount
		? 1
		: Math.ceil(totalPagesCount / pageItemsCount)
})

const slice = computed((): { start: number; end: number } => {
	const start = (currentPage.value - 1) * pageItemsCount
	const end = Math.min(start + pageItemsCount, body.value.length)

	return { start, end }
})

const onChangePage = (curPage: number) => {
	currentPage.value = curPage
}
</script>

<template>
	<div class="flex gap-4 items-center mb-4">
		<AppSelect
			text="Выберите колонку"
			v-model="selectedColOption"
			@change="onChangeSelectedColOptionIndex"
		>
			<option v-for="{ value, text } in colOptions" :key="value" :value="value">
				{{ text }}
			</option>
		</AppSelect>
		<AppSelect text="Выберите условие" v-model="selectedFilterOption">
			<option
				v-for="{ value, text, disabled } in filtersOptions"
				:key="value"
				:value="value"
				:disabled="disabled"
			>
				{{ text }}
			</option>
		</AppSelect>
		<AppInput v-model="filterValue" placeholder="Введите запрос" />
	</div>
	<div class="grid grid-cols-4 gap-4 flex-grow">
		<TheTableCol
			v-for="headItem in head"
			:key="headItem.value"
			:head="headItem"
			:body="filteredBody.slice(slice.start, slice.end)"
			:sort-key="sortKey"
			:order="order"
			@set-sort-key="setSortKey"
		/>
	</div>

	<AppPagination
		class="mt-4"
		@on-change-page="onChangePage"
		:total-pages-count="totalPageCount"
	/>
</template>

<style scoped>
/*  */
</style>
