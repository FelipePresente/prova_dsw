import CurrentDate from "../components/CurrentDate"
import FoodCard from "../components/FoodCard"
import useFoods from "../hooks/useFoods"
import type Food from "../types/Food"

export default function Menu() {
  const foods = useFoods() as Food[]

  const foodsByCategory = foods.reduce<Record<string, Food[]>>((acc, food) => {
    const category = food.category

    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(food)
    return acc
  }, {})

  return (
    <>
      <div className="my-7">
        <h1 className="text-7xl font-bold font-marhey text-red-mahogany">Menu</h1>
        <CurrentDate />
      </div>

      {Object.entries(foodsByCategory).map(([categoryName, categoryFoods]) => (
        <div key={categoryName} className="mb-10">
          <h2 className="capitalize font-marhey text-3xl text-red-mahogany font-semibold">{categoryName}</h2>
          
          <div className="grid grid-cols-2 gap-x-7 gap-y-3 auto-rows-112">
            {categoryFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}