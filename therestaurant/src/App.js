import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { BookingSystem } from "./components/Booking/BookingSystem";
import Contact from "./components/contact/Contact";
import { Menu } from "./components/Menu/Menu";
import { Admin } from "./components/_Admin/Admin";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Contact />
      <h1>Restaurant Booking System</h1>
      <BookingSystem />
      <CreateRestaurant /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingSystem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
export default App;
