import React, { useState } from "react";
import { CreateRestaurant } from "./CreateRestaurant";
import { GetBooking } from "./GetBooking";
import { BookingSystem } from "../Booking/BookingSystem";

export const Admin = () => {
  const [restaurantId, setRestaurantId] = useState(null);

  const handleRestaurantCreated = (id) => {
    setRestaurantId(id);
  };

  return (
    <div className="admin-container">
      <h1>Admin</h1>
      {!restaurantId && (
        <CreateRestaurant onRestaurantCreated={handleRestaurantCreated} />
      )}
      {restaurantId && <GetBooking restaurantId={restaurantId} />}
    </div>
  );
};
