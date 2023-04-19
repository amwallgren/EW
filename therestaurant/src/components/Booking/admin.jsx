import React, { useState } from "react";

const Admin = ({ bookings, onEdit, onDelete }) => {
  // ...

  return (
    <div>
      <h2>Admin</h2>
      {/* Render booking list here */}
      {bookings && bookings.length > 0 && (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.name}, {booking.date}, {booking.numberOfGuests} guests
              <button onClick={() => onEdit(booking)}>Edit</button>
              <button onClick={() => onDelete(booking)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
