<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	modelValue: string
}
interface Emits {
	(e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const value = computed({
	get: () => props.modelValue,
	set(value: string) {
		emit('update:modelValue', value)
	},
})
</script>

<template>
	<input
		class="p-2 bg-indigo-400 text-light-200 placeholder-light-100 rounded"
		v-model="value"
		type="text"
	/>
</template>

<style scoped>
/*  */
</style>
