import { Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
    return (
        <>
            <Header />

            <main className='font-fira-code text-brown-stellar-light bg-brown-coffee min-h-screen'>
                <div className='flex justify-center items-center flex-col p-3 mx-auto max-w-7xl'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}