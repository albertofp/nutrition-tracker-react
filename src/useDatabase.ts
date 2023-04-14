import { foodItem, foodVals } from '../types'
import { supabase } from './supabaseClient'

export async function addItem(item: foodItem) {
	const { data, error } = await supabase.from('Ingredient Macros').insert([
		{
			name: item.name,
			calories: item.vals.calories,
			protein: item.vals.protein,
			carbs: item.vals.carbs,
			fat: item.vals.fat,
			fiber: item.vals.fiber
		}
	])

	if (error) {
		console.error('Create row error: ', error)
		throw error
	} else {
		console.log(data)
	}
}

export async function delItem(name: string) {
	const { data, error } = await supabase
		.from('Ingredient Macros')
		.delete()
		.eq('name', name)

	if (error) {
		console.error('Delete row error: ', error)
		throw error
	}
}

export async function readItem(name: string) {
	let { data: item, error } = await supabase
		.from('Ingredient Macros')
		.select('*')
		.eq('name', name)

	console.log(item)

	if (error) {
		console.error('Read row error: ', error)
		throw error
	}

	return item
}

export async function updateItem(name: string, vals: foodVals) {
	const { data, error } = await supabase
		.from('Ingredient Macros')
		.update({
			name: name,
			calories: vals.calories,
			protein: vals.protein,
			carbs: vals.carbs,
			fat: vals.fat,
			fiber: vals.fiber
		})
		.eq(name, name)

	if (error) {
		console.error('Update row error: ', error)
		throw error
	}
}
