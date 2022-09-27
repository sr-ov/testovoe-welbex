<script setup lang="ts">
import { ref, computed } from 'vue'

import { TheTable } from '@/components'
import type { Body, Head } from '@/types'
import { getTable } from '@/api'
import { useAsync } from '@/composables'
import { formatDateRu } from '@/utils'

const { data: _body, error } = await useAsync<Body[]>(getTable)

const head = ref<Head[]>([
	{
		title: 'Дата',
		value: 'createdAt',
		filters: ['<>', '='],
	},
	{
		title: 'Название',
		value: 'name',
		sortable: true,
		filters: ['<>', '='],
	},
	{
		title: 'Количество',
		value: 'count',
		sortable: true,
		filters: ['<', '>', '='],
	},
	{
		title: 'Расстояние',
		value: 'distance',
		sortable: true,
		filters: ['<', '>', '='],
	},
])

const body = computed(() => {
	return _body.value?.map((el) => ({
		...el,
		createdAt: formatDateRu(el.createdAt),
	}))
})
</script>

<template>
	<div class="" v-if="error">Произошла ошибка!!!</div>
	<main class="h-screen py-4 flex flex-col" v-else>
		<TheTable :head="head" :body="body!" />
	</main>
</template>

<style scoped>
/*  */
</style>
