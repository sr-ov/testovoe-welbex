<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	text: string
	modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const value = computed({
	get: () => props.modelValue,
	set(value: string) {
		emit('update:modelValue', value)
	},
})
</script>

<template>
	<select class="p-2 bg-sky-400 text-light-200 rounded" v-model="value">
		<option value="" disabled>{{ text }}</option>
		<slot />
	</select>
</template>

<style scoped>
/*  */
</style>
