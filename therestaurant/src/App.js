import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BookingSystem } from "./components/Booking/BookingSystem";
import Contact from "./components/contact/Contact";
import { Menu } from "./components/Menu/Menu";
// import { CreateRestaurant } from "./components/CreateRestaurant";
import { Admin } from "./components/_Admin/Admin";
import Header from "./components/LandingPage/Header";
import { Footer } from "./components/LandingPage/Footer";

function App() {
  return (
    <div className="App">
        <Header />
      <main>
      <Routes>
        <Route path="/booking" element={<BookingSystem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </main>
        <Footer />
      </div> 
    )
  };
export default App;