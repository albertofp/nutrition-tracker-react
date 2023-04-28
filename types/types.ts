import { Database } from './supabase'

export type foodItem = {
	name: string
	calories: number
	protein: number
	carbs: number
	fat: number
	fiber: number
	img?: string
	imgAuthor?: string
}

export type foodItemDB =
	Database['public']['Tables']['Ingredient Macros']['Row']
