import React, { useState } from "react";
import { BookingSystem } from "../Booking/BookingSystem";

export const Header = () => {
  const [restaurantId] = useState(null);

  return (
    <header>
      <h1>EW</h1>
      <BookingSystem restaurantId={restaurantId} />
      <h2>Contact</h2>
      <button>Contact us</button>
      <h3>Menu</h3>
      <button>Our Menu</button>
    </header>
  );
};
