import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
    return (
        <>
            <Header />
            
            <main className='font-fira-code text-brown-stellar-light bg-brown-coffee min-h-screen flex justify-center items-center flex-col p-3'>
                <Outlet />
            </main>
        </>
    )
}