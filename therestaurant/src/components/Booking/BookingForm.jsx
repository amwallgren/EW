import React, { useState, useContext } from "react";
import "../../Styles/Form.css";
import { Web3Context } from "../../Services/web3Service";
import Spinner from "../Spinner";

export const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [showSpinner, setShowspinner] = useState(false);

  const { web3, contract } = useContext(Web3Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowspinner(true);

    const dateString = new Date(date).toISOString().split("T")[0];
    const timeValue = time === "18:00" ? "1800" : "2100";
    const numberOfGuests = parseInt(guests, 10);

    try {
      let restaurantId = 1;
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .createBooking(
          numberOfGuests,
          name,
          dateString,
          timeValue,
          restaurantId
        )
        .send({ from: accounts[0] });
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      setGuests(1);
      setShowspinner(false);
    } catch (error) {
      console.error("Error submitting booking:", error);
      setShowspinner(false);
    }
  };

  return (
    <div className="bookingForm">
      <h2>Book a table</h2>
      <form onSubmit={handleSubmit}>
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
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
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
        <p>Number of guests:</p>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="6"
          required
        />
        <button className="submitButton" type="submit">Submit</button>
      </form>
      {showSpinner && <Spinner />}
    </div>
  );
};
