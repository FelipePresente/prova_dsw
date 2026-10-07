import CardsByCategory from "../components/CardsByCategory"
import useFoodsByCategory from "../hooks/useFoods"
import type { FoodCategory } from "../types/Food"

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
                <h1 className="text-7xl font-bold font-marhey">Menu</h1>
                <p>{formatedDate}</p>
            </div>

            <div className="my-7 flex flex-col gap-5">
                {Object.entries(foods).map(([category, food]) => (
                    <CardsByCategory
                        key={category}
                        category={category as FoodCategory}
                        foods={food}
                    />
                ))}
            </div>
        </section>
    )
}
