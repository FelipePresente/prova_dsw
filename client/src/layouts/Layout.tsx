import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
    return (
        <>
            <Header />
            
            <main className='font-marhey bg-brown-coffee flex min-h-screen items-center justify-center p-7'>
                <Outlet />
            </main>
        </>
    )
}