import type Food from "../types/Food";

interface FoodCardProps {
    food: Food;
}

export default function FoodCard({ food }:FoodCardProps) {
    return (
        <h1>{food.name}</h1>
    )
}