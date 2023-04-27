import React from "react";

export const Step2Time = ({
  time,
  setTime,
  handleGetBooking,
  availableTables,
}) => {
  const handleTimeChange = async (e) => {
    setTime(e.target.value);
    await handleGetBooking();
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="time"
          value="18:00"
          checked={time === "18:00"}
          onChange={handleTimeChange}
        />
        18:00
      </label>
      <label>
        <input
          type="radio"
          name="time"
          value="21:00"
          checked={time === "21:00"}
          onChange={handleTimeChange}
        />
        21:00
      </label>
      {time && (
        <p>
          {availableTables} table{availableTables === 1 ? "" : "s"} available
        </p>
      )}
    </div>
  );
};
