<script setup lang="ts">
import { computed } from 'vue'

import { TheTableColTitle, TheTableColItem } from '@/components'
import type { Body, Head, SortOrder } from '@/types'

interface Props {
	head: Head
	body: Body[]
	sortKey: keyof Body | ''
	order: SortOrder
}
interface Emits {
	(e: 'setSortKey', newSortKey: keyof Body): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const bodyItems = computed(() => props.body.map((el) => el[props.head.value]))

const onSetSortKey = () => {
	props.head.sortable && emit('setSortKey', props.head.value)
}
</script>

<template>
	<div class="col ring">
		<TheTableColTitle
			@click="onSetSortKey"
			:is-active-sort="sortKey === head.value"
			:is-asc="order === 'asc'"
		>
			{{ head.title }}
		</TheTableColTitle>
		<TheTableColItem v-for="(el, i) in bodyItems" :key="i">
			{{ el }}
		</TheTableColItem>
	</div>
</template>

<style scoped>
/*  */
</style>
