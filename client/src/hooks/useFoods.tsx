import database from "../mocks/database.json"
import type { FoodCategory } from "../types/Food";
import type Food from "../types/Food";

export function useFoods() {
    const typedFoods = database.foods as Food[]
    return typedFoods;
}

export default function useFoodsByCategory() {
    const foods = useFoods()

    const foodsByCategory = foods.reduce<Partial<Record<FoodCategory, Food[]>>>((acc, food) => {
        const { category } = food

        if (!acc[category]) {
            acc[category] = []
        }

        acc[category]!.push(food)

        return acc
    }, {})

    return foodsByCategory as Record<FoodCategory, Food[]>;
}
