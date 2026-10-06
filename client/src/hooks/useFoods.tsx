import database from "../mocks/database.json"
import type Food from "../types/Food";

export function useFoods() {
    const typedFoods = database.foods as Food[]
    
    return typedFoods;
}

export default function useFoodsByCategory() {
    const foods = useFoods()

    const foodsByCategory = foods.reduce((acc, food) => {
        const { category } = food

        if (!acc[category]) {
            acc[category] = []
        }

        acc[category].push(food)

        return acc
    }, {} as Record<string, Food[]>)

    return foodsByCategory
}