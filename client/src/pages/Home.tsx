import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="text-7xl font-extrabold font-marhey text-red-mahogany">Cafeteria's Menu</h1>
        <p className="text-3xl">Check out what will be served for each meal of the day.</p>
        <Link to='/menu'>
          <button className="bg-brown-spanish rounded-3xl text-red-mahogany text-3xl p-7 shadow-lg cursor-pointer hover:bg-red-mahogany hover:text-brown-spanish hover:scale-[2] transition-transform duration-700">see menu</button>
        </Link>
      </div>
    </section>
  )
}
