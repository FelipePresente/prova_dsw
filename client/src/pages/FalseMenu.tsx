import FoodCard from "../components/FoodCard"
import useFoodsByCategory from "../hooks/useFoods"

export default function Menu() {
    const today = new Date()

    const formatedDate = today.toLocaleDateString('en', {
        weekday: 'long',

        year: 'numeric',

        month: 'long',

        day: '2-digit'
    })

    const foods = useFoodsByCategory()

    return (
        <section>
            <div className="my-7">
                <h1 className="text-7xl font-bold font-marhey text-red-mahogany">Menu</h1>
                <p>{formatedDate}</p>
            </div>



            <div className="grid grid-cols-2 gap-5 my-2">
                {foods.breakfast.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>

        </section>
    )
}