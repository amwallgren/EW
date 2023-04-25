import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Contact from './components/contact/Contact';
import { BookingSystem } from "./components/Booking/BookingSystem";

import { Menu } from './components/Menu/Menu';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/contact',
                element: <Contact />
            },  {
                path: '/booking',
                element: <BookingSystem />
            },  {
                path: '/menu',
                element: <Menu />
            }
        ]

    }
]);