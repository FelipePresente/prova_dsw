import FoodCard from "../components/FoodCard"
import useFoods from "../hooks/useFoods"

export default function Menu() {
  const foods = useFoods()
  
  return (
    <>
      <h1 className="text-3xl font-bold">Menu</h1>

      <div className="">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}/>
        ))}
      </div>
    </>
  )
}