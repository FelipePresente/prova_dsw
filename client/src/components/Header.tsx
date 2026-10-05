import logo from '../assets/ifsp-cafeteria.png'

export default function Header() {
    return (
        <header className="flex justify-around">
            <div>
                <img src={logo} alt="IFSP Cafeteria logo" className='w-7' />
            </div>

            <nav>
                <h2>Home</h2>
                <h2>Menu</h2>
            </nav>
        </header>
    )
}