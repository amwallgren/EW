import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Services/web3Service";
import { editBooking } from "../../Services/web3Service";
import moment from "moment";

export const EditBooking = ({ booking, onClose, onBookingUpdated }) => {
  const [bookingId, setBookingId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const fetchBooking = async () => {
    if (web3 && contract && bookingId) {
      try {
        const booking = await contract.methods.bookings(bookingId).call();
        setName(booking.name);
        setDate(booking.date);
        setTime(booking.time);
        setNumberOfGuests(booking.numberOfGuests);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    }
  };

  useEffect(() => {
    fetchBooking();
  }, [bookingId]);

  const handleSave = async () => {
    if (web3 && contract) {
      const formattedTime = moment(time, "HH:mm").format("HHmm");
      const bookingData = {
        id: booking.id,
        numberOfGuests: numberOfGuests,
        name,
        date,
        time: formattedTime,
      };
      try {
        await editBooking(web3, contract, bookingData, (error) => {
          if (error) {
            console.error("Error editing booking:", error);
          } else {
            console.log(bookingData);
            console.log("Booking edited successfully!");
            onClose();
            // Call the onBookingUpdated prop after the update is successful
            onBookingUpdated();
          }
        });
      } catch (error) {
        console.error("Error editing booking:", error);
      }
    }
  };

  return (
    <div className="edit-booking-container">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          value={numberOfGuests}
          min={"1"}
          max={"6"}
          onChange={(event) => setNumberOfGuests(event.target.value)}
        />
      </label>
      <button onClick={handleSave} className="admin-btn">
        Save
      </button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};
