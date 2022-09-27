import { ref, type UnwrapRef } from 'vue'

type Status = 'idle' | 'pending' | 'success' | 'error'
type AsyncFunction<T> = (...args: any[]) => Promise<T>
type Immediate = boolean

export const useAsync = <T, E = string>(
	asyncFunction: AsyncFunction<T>,
	immediate: Immediate = true
) => {
	const status = ref<Status>('idle')
	const data = ref<T | null>(null)
	const error = ref<E | null>(null)

	const execute = (...args: any[]) => {
		status.value = 'pending'
		data.value = null
		error.value = null

		return asyncFunction(...(args ? args : []))
			.then((response: T) => {
				data.value = response as UnwrapRef<T>
				status.value = 'success'
			})
			.catch((error: any) => {
				error.value = error
				status.value = 'error'
			})
	}

	if (immediate) {
		return (async () => {
			await execute()
			return { status, data, error }
		})()
	}

	return { execute, status, data, error }
}
