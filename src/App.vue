<script setup lang="ts">
import { TheMain, AppSpinner } from '@/components'
</script>

<template>
	<Suspense>
		<TheMain />
		<template #fallback>
			<AppSpinner />
		</template>
	</Suspense>
</template>

<style scoped></style>
