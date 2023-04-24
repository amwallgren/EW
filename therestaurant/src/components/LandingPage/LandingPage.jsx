
import './lp.css';
import ew from '../../images/ew.png';
import Header from './Header';

 
 export const LandingPage = () => {
    return (
    <div className="wrapper"> 
        
         <Header />
            

        <main>
            <img className="ewHeader" src={ew}></img>
        </main>

        <footer>
            <h2>Learn more about how we work with GDPR</h2>
        </footer>
    </div>
    )
}