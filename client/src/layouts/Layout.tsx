import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <main className='font-marhey bg-brown-coffee flex min-h-screen items-center justify-center p-7'>
            <Outlet />
        </main>
    )
}