import { foodItem } from '../../types/types'

// Updates 1 food item with new values
export const mergeObjects = (object1: foodItem, object2: foodItem) => {
	return {
		name: object1.name,
		calories: object1.calories + object2.calories,
		protein: object1.protein + object2.protein,
		carbs: object1.carbs + object2.carbs,
		fat: object1.fat + object2.fat,
		fiber: object1.fiber + object2.fiber
	}
}

if (import.meta.vitest) {
	describe('mergeObjects', () => {
		it('Merges 2 objects together', () => {
			const object1 = {
				name: 'foo',
				calories: 1,
				protein: 1,
				carbs: 1,
				fat: 1,
				fiber: 1
			}
			const object2 = {
				name: '',
				calories: 1,
				protein: 1,
				carbs: 1,
				fat: 1,
				fiber: 1
			}

			expect(mergeObjects(object1, object2)).toStrictEqual({
				name: 'foo',
				calories: 2,
				protein: 2,
				carbs: 2,
				fat: 2,
				fiber: 2
			})
		})
	})
}
