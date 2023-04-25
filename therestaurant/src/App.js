import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { BookingSystem } from "./components/Booking/BookingSystem";
import Contact from "./components/contact/Contact";
import { Menu } from "./components/Menu/Menu";
// import { CreateRestaurant } from "./components/CreateRestaurant";
import { Admin } from "./components/_Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingSystem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div> 
  )};
export default App;