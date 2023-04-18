import './App.css';
import Booking from './components/Booking';
import Contact from './components/Contact';
import { LandingPage } from './components/landingPage';

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <Booking />
      <Contact />
    </div> 
      
  );
}

export default App;
