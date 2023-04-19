import React, { useState } from "react";
import { useWeb3 } from "../../Services/web3Service";

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, date, time, guests });
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="date">
          Date
        </label>
        <input
          className="form-input"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="time">
          Time
        </label>
        <input
          className="form-input"
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="form-input"
          type="number"
          id="guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">
          Book
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
