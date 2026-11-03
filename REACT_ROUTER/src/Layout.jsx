import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet is a component from React Router that acts as a placeholder where the matched child route component will be rendered. It is mainly used when we have nested routes and want to share a common layout between multiple pages.

function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;