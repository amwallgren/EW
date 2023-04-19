import { Outlet } from "react-router-dom";
 
 export const LandingPage = () => {
    return (
    <div className="wrapper"> 
        <header>
            <h1>EW - where disgust meets delight </h1>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <p>Footer</p>
        </footer>
    </div>
    )
}