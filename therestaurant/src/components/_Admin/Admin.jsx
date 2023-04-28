import React, { useState } from "react";
import { CreateRestaurant } from "./CreateRestaurant";
import { GetBooking } from "./GetBooking";

export const Admin = () => {
  const [restaurantId, setRestaurantId] = useState(null);
  const [isRestaurantCreated, setIsRestaurantCreated] = useState(false);

  const handleRestaurantCreated = (id) => {
    setRestaurantId(id);
    setIsRestaurantCreated(true);
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      {!isRestaurantCreated && (
        <CreateRestaurant onRestaurantCreated={handleRestaurantCreated} />
      )}
      <GetBooking restaurantId={restaurantId} />
    </div>
  );
};
