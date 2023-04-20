
import React from "react";
import "./App.css";
import BookingSystem from "./components/Booking/BookingSystem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Booking System</h1>
      </header>
      <main>
        <BookingSystem />
      </main>
    </div>
  );
}

export default App;
