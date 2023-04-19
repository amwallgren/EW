import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import  Contact  from './components/Contact';
import  Booking  from './components/Booking';
import { LandingPage } from "./components/LandingPage";
import  Admin  from './components/Admin';

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
            }, {
                path: '/booking',
                element: <Booking />
            }, {
                path: '/admin',
                element: <Admin />
            }
        ]

    }
]);