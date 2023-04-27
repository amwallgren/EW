import React from "react";

export const Step2Time = ({
  time,
  setTime,
  handleGetBooking,
  availableTables,
}) => {
  const handleTimeChange = async (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    await handleGetBooking(newTime);
  };

  return (
    <div>
      <label style={{ display: "block" }}>
        <input
          type="Radio"
          name="time"
          value="18:00"
          checked={time === "18:00"}
          onChange={handleTimeChange}
          required
        />
        Lunch
      </label>
      <label style={{ display: "block" }}>
        <input
          type="Radio"
          name="time"
          value="21:00"
          checked={time === "21:00"}
          onChange={handleTimeChange}
          required
        />
        Dinner
      </label>
      {time && (
        <p>
          {availableTables > 0
            ? `${availableTables} table${
                availableTables === 1 ? "" : "s"
              } available`
            : "There are no tables available for this date"}
        </p>
      )}
    </div>
  );
};
