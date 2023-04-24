import React, { useState } from "react";
import "../../Styles/Form.css";
import { createBooking } from "../../Services/web3Service";

export const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(1);

  const handleStepChange = (newStep) => {
    if (newStep >= 1 && newStep <= 4) {
      setStep(newStep);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { name, email, date, time, guests };
    try {
      await createBooking(bookingData, (error, message) => {
        if (error) {
          console.error("Error:", error);
        } else {
          console.log("Message:", message);
        }
      });
      setStep(1);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3>Select a time</h3>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="19:00">19:00</option>
              <option value="21:00">21:00</option>
            </select>
            <button onClick={() => handleStepChange(step + 1)}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Number of guests</h3>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
            />
            <button onClick={() => handleStepChange(step - 1)}>Previous</button>
            <button onClick={() => handleStepChange(step + 1)}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Select a date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <button onClick={() => handleStepChange(step - 1)}>Previous</button>
            <button onClick={() => handleStepChange(step + 1)}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Enter your information</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <button onClick={() => handleStepChange(step - 1)}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="booking-form-multistep">{renderStepContent()}</div>;
};
