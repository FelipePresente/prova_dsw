import database from "../mocks/database.json"
import type Food from "../types/Food";

export default function useFoods() {
    const typedFoods = database.foods as Food[]
    
    return typedFoods;
}