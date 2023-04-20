import { Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/LandingPage';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Booking />
      <Contact />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

    </div> 
      
  );
}

export default App;
