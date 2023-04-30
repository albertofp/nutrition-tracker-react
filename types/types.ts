import { Database } from './supabase'

export type foodItem = Database['public']['Tables']['Ingredient Macros']['Row']
