import Header from '../../components/layout/Header'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
    return (
        <>
            <Header />
            <main className="mt-16">
                <Outlet />
            </main>
        </>
    )
}

export default RouteLayout