import React from "react";

export const Step2Time = ({ time, setTime }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="time"
          value="18:00"
          checked={time === "18:00"}
          onChange={(e) => setTime(e.target.value)}
        />
        18:00
      </label>
      <label>
        <input
          type="radio"
          name="time"
          value="21:00"
          checked={time === "21:00"}
          onChange={(e) => setTime(e.target.value)}
        />
        21:00
      </label>
    </div>
  );
};
