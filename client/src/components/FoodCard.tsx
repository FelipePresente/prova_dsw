import type Food from "../types/Food";

interface FoodCardProps {
    food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
    return (
        <div>
            <h1>{food.name}</h1>
        </div>
    )
}