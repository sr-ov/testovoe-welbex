<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import { AppButton } from '@/components'
import { START_PAGE } from '@/constants'

interface Props {
	totalPagesCount: number
	modelValue: number
}
interface Emits {
	(e: 'update:modelValue', currentPage: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const currentPage = computed({
	get: () => props.modelValue,
	set(currentPage: number) {
		emit('update:modelValue', currentPage)
	},
})
const isFirstPage = computed(() => currentPage.value === START_PAGE)
const isLastPage = computed(() => currentPage.value === props.totalPagesCount)

const onPrevPage = () => {
	currentPage.value = props.modelValue - 1
}

const onNextPage = () => {
	currentPage.value = props.modelValue + 1
}
</script>

<template>
	<div class="space-x-6">
		<AppButton :disabled="isFirstPage" @click="onPrevPage">
			&lt; назад
		</AppButton>
		<AppButton :disabled="isLastPage" @click="onNextPage"> далее > </AppButton>
	</div>
</template>

<style scoped>
/*  */
</style>
