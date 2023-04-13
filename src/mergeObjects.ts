import { foodVals } from "../types";

	export const mergeObjects = (object1: foodVals, object2: any) => {
		const data = [object1, object2]
		const result = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }

		result.calories = object1.calories + object2.calories
		result.protein = object1.protein + object2.protein
		result.carbs = object1.carbs + object2.carbs
		result.fat = object1.fat + object2.fat
		result.fiber = object1.fiber + object2.fiber

		return result
	}