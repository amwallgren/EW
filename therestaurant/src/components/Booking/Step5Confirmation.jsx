import React from "react";

export const Step5Confirmation = ({
  name,
  lastName,
  email,
  date,
  time,
  guests,
}) => {
  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>
        Name: {name} {lastName}
      </p>
      <p>Email: {email}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of Guests: {guests}</p>
    </div>
  );
};
