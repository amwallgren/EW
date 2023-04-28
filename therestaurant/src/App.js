import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { BookingSystem } from "./components/Booking/BookingSystem";
import Contact from "./components/contact/Contact";
import { Menu } from "./components/Menu/Menu";
import { CreateRestaurant } from "./components/CreateRestaurant";

function App() {
  return (
    <div className="App">
      <Contact />
      <h1>Restaurant Booking System</h1>
      <BookingSystem />
      <CreateRestaurant />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bookingsystem" element={<BookingSystem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}
export default App;

