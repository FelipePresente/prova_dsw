import foods from '../mocks/foods.json'

import type Food from "../types/Food";

interface FoodCardProps {
    food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
    return (
        {foods.map((food) => (
            <h1 key={food.id}>{food.name}</h1>
        ))}
    )
}