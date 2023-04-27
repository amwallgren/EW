import React from "react";

export const Step1Date = ({ date, setDate }) => {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
    />
  );
};
