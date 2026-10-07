import type { FoodCategory, default as Food } from "../types/Food"
import FoodCard from "./FoodCard";

interface CardsByCategoryProps {
    category: FoodCategory;
    foods: Food[]
}

export default function CardsByCategory({ category, foods }: CardsByCategoryProps) {
    const filteredFoods = foods.filter(food => food.category === category)

    return (
        <div>
            <h2 className="capitalize font-marhey text-3xl font-semibold mt-2 mb-6 pb-4 border-b border-brown-stellar-light">{category === 'breakfast' ? `${category} — 9:30 AM` : category === 'lunch' ? `${category} — 12:15 PM` : category === 'snack' ? `${category} — 4 PM` : `${category} — 6:45 PM`}
            </h2>

            <div className="grid grid-cols-2 gap-5 my-2">
                {filteredFoods.map((food) => (
                    <FoodCard key={food.id} food={food}/>
                ))}
            </div>
        </div>
    )
}