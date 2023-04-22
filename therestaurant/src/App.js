
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import BookingSystem from "./components/Booking/BookingSystem";
import Contact from './components/contact/Contact';
import { Admin } from './components/Admin/Admin';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/booking' element={<BookingSystem />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div> 
  )};
export default App;
