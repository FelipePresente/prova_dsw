import database from "../mocks/database.json"
import type { FoodCategory } from "../types/Food";
import type Food from "../types/Food";

export function useFoods() {
    const typedFoods = database.foods as Food[]
    return typedFoods;
}

export default function useFoodsByCategory() {
    const foods = useFoods()

    // Indicamos que o acumulador começa como um Record parcial das categorias
    const foodsByCategory = foods.reduce<Partial<Record<FoodCategory, Food[]>>>((acc, food) => {
        const { category } = food

        if (!acc[category]) {
            acc[category] = []
        }

        // Usamos o "!" para garantir ao TS que a lista com certeza existe após o if acima
        acc[category]!.push(food)

        return acc
    }, {})

    // Retornamos convertendo estritamente para o tipo final esperado pela página
    return foodsByCategory as Record<FoodCategory, Food[]>;
}
