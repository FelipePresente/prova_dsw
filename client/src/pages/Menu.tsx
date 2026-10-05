import FoodCard from "../components/FoodCard";

import foods from '../mocks/foods.json'

export default function Menu() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800">Menu</h1>

      {foods.map((food) => (
        <FoodCard key={food.id} food={food}/>
      ))}
    </main>
  )
}