export const compareRu = (el: string | number, value: string) => {
	return String(el).localeCompare(value, 'ru')
}
