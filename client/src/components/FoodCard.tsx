import type Food from "../types/Food";

interface FoodCardProps {
    food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
    return (
        <div className="overflow-hidden rounded-3xl bg-brown-spanish">
            <img src={food.image} alt={food.name} className="w-full h-3/4 object-cover" />
            <div className="p-2">
                <h1 className="font-extrabold">{food.name}</h1>
                <p>{food.description}</p>
            </div>
        </div>
    )
}