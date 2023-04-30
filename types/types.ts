import { Database } from './supabase'

export type foodItemDB =
	Database['public']['Tables']['Ingredient Macros']['Row']
