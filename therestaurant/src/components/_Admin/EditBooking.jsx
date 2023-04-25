import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Services/web3Service";
import { editBooking } from "../../Services/web3Service";

export const EditBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(0);
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const fetchBooking = async () => {
    if (web3 && contract && bookingId) {
      try {
        const booking = await contract.methods.bookings(bookingId).call();
        setName(booking.name);
        setDate(booking.date);
        setTime(booking.time);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    }
  };

  useEffect(() => {
    fetchBooking();
  }, [bookingId]);

  const handleEditBooking = async () => {
    if (web3 && contract && bookingId) {
      const bookingData = {
        id: bookingId,
        numberOfGuests: 3,
        name,
        date,
        time,
      };
      try {
        await editBooking(web3, contract, bookingData, (error) => {
          if (error) {
            console.error("Error editing booking:", error);
          } else {
            console.log(bookingData);
            console.log("Booking edited successfully!");
          }
        });
      } catch (error) {
        console.error("Error editing booking:", error);
      }
    }
  };

  return (
    <div className="edit-booking-container">
      <input
        type="text"
        className="edit-booking-input"
        placeholder="Booking ID"
        value={bookingId}
        onChange={(event) => setBookingId(event.target.value)}
      />
      <button onClick={handleEditBooking} className="admin-btn">
        Edit Booking
      </button>
    </div>
  );
};
