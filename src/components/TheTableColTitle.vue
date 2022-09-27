<script setup lang="ts">
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'

interface Props {
	isActiveSort: boolean
	isAsc: boolean
}

defineProps<Props>()
</script>

<template>
	<button
		class="font-bold text-lg p-2 text-indigo-400 flex justify-center w-full"
	>
		<span class="flex items-center justify-center">
			<slot></slot>
			<span class="flex-shrink-0 basis-[21px] flex items-center justify-center">
				<ArrowDownIcon
					:class="['flex-shrink-0 origin-center', { rotate180: isAsc }]"
					v-if="isActiveSort"
				/>
			</span>
		</span>
	</button>
</template>

<style scoped>
.rotate180 {
	transform: rotate(180deg);
}
</style>
