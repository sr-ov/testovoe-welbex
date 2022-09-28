import axios from 'axios'

import type { Body } from '@/types'
import { API_URL } from '@/constants'

const api = axios.create({
	baseURL: API_URL,
})

export const getTable = async () => {
	const { data } = await api.get<Body[]>('table')

	return data
}
