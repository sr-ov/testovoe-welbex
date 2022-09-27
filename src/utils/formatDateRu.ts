export const formatDateRu = (date: string) => {
	return new Date(date).toLocaleDateString('ru-Ru', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	})
}
