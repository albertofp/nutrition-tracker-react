import { Database } from "./supabase"

export type foodItem = {
	name: string
	calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number
	img?:string
}

export type foodItemDB = Database["public"]["Tables"]["Ingredient Macros"]["Row"]

export type ToastType = {
	type: string
	message: string
	id: number
}
