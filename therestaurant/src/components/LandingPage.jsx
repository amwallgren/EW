import { Outlet } from "react-router-dom";
// figure out how to import images into component 
import ew from '../images/ew.png';
 
 export const LandingPage = () => {
    return (
    <div className="wrapper"> 
        <header>
            <h1>EW - where disgust meets delight </h1>
            <img className="ewHeader" src={ew}></img>
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