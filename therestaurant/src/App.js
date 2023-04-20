
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/LandingPage';
import BookingSystem from "./components/Booking/BookingSystem";
// lägg in Martins komponent Contact här 

function App() {
  return (
    <div className='App'>
      <Contact />
       <h1>Restaurant Booking System</h1>
      <BookingSystem />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/bookingsystem' element={<BookingSystem />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div> 

export default App;
