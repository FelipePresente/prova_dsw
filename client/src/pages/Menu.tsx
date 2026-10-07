import FoodCard from "../components/FoodCard"
import { useFoods } from "../hooks/useFoods"
import type Food from "../types/Food"

export default function Menu() {
  const today = new Date()

  const formatedDate = today.toLocaleDateString('en', {
    weekday: 'long',

    year: 'numeric',

    month: 'long',

    day: '2-digit'
  })

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
    <section>
      <div className="my-7">
        <h1 className="text-7xl font-bold font-marhey text-red-mahogany">Menu</h1>
        <p>{formatedDate}</p>
      </div>

      <div className="my-7 flex flex-col gap-5">
        {Object.entries(foodsByCategory).map(([categoryName, categoryFoods]) => (
          <div key={categoryName}>
            <h2 className="capitalize font-marhey text-3xl text-red-mahogany font-semibold mt-2 mb-6 pb-4 border-b border-brown-stellar-light">{categoryName === 'breakfast' ? `${categoryName} — 9:30 AM` : categoryName === 'lunch' ? `${categoryName} — 12:15 PM` : categoryName === 'snack' ? `${categoryName} — 4 PM` : `${categoryName} — 6:45 PM`}
            </h2>

            <div className="grid grid-cols-2 gap-5 my-2">
              {categoryFoods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}