import App from "../App";
import Contact from './Contact';
import Booking from './Booking';
import LandingPage from "./LandingPage";
import NotFound from './NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />, // Mirelles page
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/contact',
                element: <Contact /> // Martins page
            }, {
                path: '/booking',
                element: <Booking /> // Max page
            }, {
                path: '/admin',
                element: <Admin />
            }
        ]

    }
])