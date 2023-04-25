import React, { useState } from "react";
import { CreateRestaurant } from "./CreateRestaurant";
import { GetBooking } from "./GetBooking";
import { EditBooking } from "./EditBooking";
import { RemoveBooking } from "./RemoveBooking";
import { BookingSearch } from "./BookingSearch";

export const Admin = () => {
  const [setRestaurantId] = useState(null);

  return (
    <div className="admin-container">
      <h1>Admin</h1>
      <CreateRestaurant onRestaurantCreated={setRestaurantId} />
      <GetBooking />
      <EditBooking />
      <RemoveBooking />
      <BookingSearch />
    </div>
  );
};
