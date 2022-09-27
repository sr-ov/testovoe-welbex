import axios from 'axios'

import type { Body } from '@/types'

export const getTable = async () => {
	const { data } = await axios.get<Body[]>('http://localhost:4321/table')

	return data
}
