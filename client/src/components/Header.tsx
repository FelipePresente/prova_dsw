import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/ifsp-cafeteria.png'

export default function Header() {
    return (
        <header className="bg-brown-spanish text-brown-stellar-light font-fira-code p-3">
            <div className='mx-auto max-w-7xl flex justify-around items-center p-2'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="IFSP Cafeteria logo" className='h-13' />
                    </Link>
                </div>

                <nav className='flex gap-7 justify-center items-center'>
                    <NavLink to='/' className={
                        ({ isActive }) => `p-3 rounded-2xl ${isActive
                            ? 'bg-red-mahogany text-gray-linen text-2xl font-semibold'

                            : 'bg-gray-linen text-red-mahogany text-lg group cursor-pointer'

                            }`
                    }>
                        {({ isActive }) => (
                            <span className={isActive ? '' : 'relative'}>
                                Home

                                {!isActive && (
                                    <span className=' absolute -bottom-1 right-0 w-0 h-2 rounded-full bg-red-mahogany transition-all duration-200 group-hover:w-full'></span>
                                )}
                            </span>
                        )}
                    </NavLink>

                    <NavLink to='/menu' className={
                        ({ isActive }) => `p-3 rounded-2xl ${isActive
                            ? 'bg-red-mahogany text-gray-linen text-2xl font-semibold'

                            : 'bg-gray-linen text-red-mahogany text-lg group cursor-pointer'

                            }`
                    }>
                        {({ isActive }) => (
                            <span className={isActive ? '' : 'relative'}>
                                Menu

                                {!isActive && (
                                    <span className=' absolute -bottom-1 left-0 w-0 h-2 rounded-full bg-red-mahogany transition-all duration-200 group-hover:w-full'></span>
                                )}
                            </span>
                        )}
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}