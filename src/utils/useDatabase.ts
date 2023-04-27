import { foodItem } from '../../types/types'
import { supabase } from '../config/supabaseClient'

export async function addItem(item: foodItem) {
	const { data, error } = await supabase.from('Ingredient Macros').insert([
		{
			name: item.name.toLowerCase(),
			calories: item.calories,
			protein: item.protein,
			carbs: item.carbs,
			fat: item.fat,
			fiber: item.fiber
		}
	])

	if (error) {
		console.error('Create row error: ', error)
		throw error
	} else {
		console.log('Added item to database: ', item)
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

	if (error) {
		console.error('Read row error: ', error)
		throw error
	}
	return Promise.resolve(item)
}

export async function readAll() {
	let { data: item, error } = await supabase
		.from('Ingredient Macros')
		.select('*')

	if (error) {
		console.error('Read row error: ', error)
		throw error
	}
	return Promise.resolve(item)
}

export async function updateItem(item: foodItem) {
	const { data, error } = await supabase
		.from('Ingredient Macros')
		.update({
			name: item.name,
			calories: item.calories,
			protein: item.protein,
			carbs: item.carbs,
			fat: item.fat,
			fiber: item.fiber
		})
		.eq('name', item.name)

	if (error) {
		console.error('Update row error: ', error)
		throw error
	}
}
