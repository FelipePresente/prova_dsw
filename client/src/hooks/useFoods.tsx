import FoodCard from "../components/FoodCard";
import foods from "../mocks/foods.json"
import type Food from "../types/Food";

export default function useFoods() {
    const foodCards = foods.map((food:Food) => {
        return (
            <FoodCard key={food.id} food={food} />
        )
    })

    return foodCards;
}