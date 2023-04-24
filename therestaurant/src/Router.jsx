import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Contact from './components/contact/Contact';
// import { Booking } from './components/Booking';
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Menu } from './components/Menu/Menu';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/contact',
                element: <Contact />
            }, /* {
                path: '/booking',
                element: <Booking />
            }, */ {
                path: '/menu',
                element: <Menu />
            }
        ]

    }
]);