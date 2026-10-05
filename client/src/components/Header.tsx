import { Link } from 'react-router-dom'
import logo from '../assets/ifsp-cafeteria.png'

export default function Header() {
    return (
        <header className="flex justify-around items-center bg-brown-spanish">
            <div>
                <Link to='/'>
                    <img src={logo} alt="IFSP Cafeteria logo" className='h-17' />
                </Link>
            </div>

            <nav className='flex flex-row gap-7'>
                <Link to='/home'>Home</Link>
                <Link to='/menu'>Menu</Link>
            </nav>
        </header>
    )
}