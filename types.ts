export type foodVals = {
	calories?: number | null
	protein?: number | null
	carbs?: number | null
	fat?: number | null
	fiber?: number | null
}

export type foodItem = {
	name: string
	vals: foodVals
}
