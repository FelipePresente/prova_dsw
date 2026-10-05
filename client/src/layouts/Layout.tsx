import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
    return (
        <>
            <Header />
            
            <main className='text-brown-stellar-light bg-brown-coffee min-h-screen flex justify-center items-center gap-3'>
                <Outlet />
            </main>
        </>
    )
}