import type Food from "../types/Food";

interface FoodCardProps {
    food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
    return (
        <div className="rounded-3xl bg-brown-spanish overflow-hidden border-2 border-brown-stellar-light shadow-lg flex flex-col h-72 w-full transition-transform duration-200 hover:scale-[1.38]">
            <div className="h-54 w-full overflow-hidden border-b border-brown-stellar-light">
                <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-2 flex flex-col justify-evenly flex-1">
                <h3 className="font-extrabold">{food.name}</h3>
                <p className="leading-relaxed">{food.description}</p>
            </div>
        </div>
    )
}