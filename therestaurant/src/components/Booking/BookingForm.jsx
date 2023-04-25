import React, { useState, useContext } from "react";
import "../../Styles/Form.css";
import { Web3Context } from "../../Services/web3Service";

export const BookingForm = ({ restaurantId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const { web3, contract } = useContext(Web3Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateString = new Date(date).toISOString().split("T")[0];
    const timeValue = time === "19:00" ? "1900" : "2100";
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
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="booking-form">
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
              value="19"
              checked={time === "19"}
              onChange={(e) => setTime(e.target.value)}
            />
            19:00
          </label>
          <label>
            <input
              type="radio"
              name="time"
              value="21"
              checked={time === "21"}
              onChange={(e) => setTime(e.target.value)}
            />
            21:00
          </label>
        </div>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
