<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import { AppButton } from '@/components'

interface Props {
	totalPagesCount: number
}
interface Emits {
	(e: 'onChangePage', currentPage: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const START_PAGE = 1

const currentPage = ref(START_PAGE)
const isFirstPage = computed(() => currentPage.value === START_PAGE)
const isLastPage = computed(() => currentPage.value === props.totalPagesCount)

const onPrevPage = () => {
	currentPage.value -= 1
}

const onNextPage = () => {
	currentPage.value += 1
}

watch(currentPage, (newCurrenPage) => {
	emit('onChangePage', newCurrenPage)
})
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
