import React from "react";

export const Step3Guests = ({ guests, setGuests }) => {
  return (
    <div>
      <p>Number of guests:</p>
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="6"
        required
      />
    </div>
  );
};
