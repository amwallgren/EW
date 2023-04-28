import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Services/web3Service";
import { EditBooking } from "./EditBooking";
import { RemoveBooking } from "./RemoveBooking";
import { BookingSystem } from "../Booking/BookingSystem";
import "../../Styles/Form.css";
export const GetBooking = () => {
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const [bookingsArray, setBookingsArray] = useState([]);
  const [bookingListModal, setBookingListModal] = useState(false);
  const [bookingBtnModal, setBookingBtnModal] = useState(false);
  const [bookingFormModal, setBookingFormModal] = useState(false);
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [availableMessage, setAvailableMessage] = useState("");

  const handleEditBooking = (booking) => {
    console.log(booking);
    setSelectedBooking(booking);
  };

  console.log(selectedBooking);

  const closeBookingListModal = () => {
    setBookingListModal(false);
  };

  // const handleBookingFormModal = () => {
  //   setBookingFormModal(true);
  // };

  const closeBookingFormModal = () => {
    setBookingFormModal(false);
  };

  const handleGetBooking = async () => {
    setBookingListModal(true);

    const dateString = new Date(date).toISOString().split("T")[0];
    const timeValue = time === "18:00" ? "1800" : "2100";

    if (web3 && contract) {
      var tempBookingsArray = [];
      try {
        let bookingIds = await contract.methods.bookingCount().call();
        for (let i = 0; i <= bookingIds; i++) {
          let bookings = await contract.methods.bookings(i).call();
          if (bookings.time === timeValue && bookings.date === dateString) {
            tempBookingsArray.push(bookings);
          }
        }
      } catch (error) {
        console.error("Error getting bookings:", error);
      }
      setBookingsArray(tempBookingsArray);
    }
  };

  useEffect(() => {
    if (bookingsArray.length < 15) {
      setBookingBtnModal(true);
      let messageBookingsAvailable =
        "Theres are " +
        (15 - bookingsArray.length) +
        " available tables left. ";
      setAvailableMessage(messageBookingsAvailable);
    } else {
      setBookingBtnModal(false);
      let messageBookingsFull =
        "There are no more tables available at this time. Please choose another time or date.";
      setAvailableMessage(messageBookingsFull);
    }
  }, [bookingsArray]);

  const bookingsListHtml = bookingsArray.map((booking) => {
    return (
      <ul className="booking-list-ul" key={booking.id}>
        <li className="booking-list-id">{booking.id}</li>
        <li className="booking-list-name">{booking.name}</li>
        <li className="booking-list-date">{booking.date}</li>
        <li className="booking-list-time">{booking.time}</li>
        <li className="booking-list-numOfGuests">{booking.numberOfGuests}</li>
        {/* <li>
          <button onClick={() => handleEditBooking(booking)}>Edit</button>
        </li> */}
        <EditBooking
        booking= {booking}
        id = {booking.id}
        editName = {booking.name}
        editDate = {booking.date}
        editTime = {booking.time}
        editNumOfGuest = {booking.numberOfGuests}
        onEditBooking={handleGetBooking} />

        <RemoveBooking
          bookingID={booking.id}
          onBookingRemoved={handleGetBooking}
        />
      </ul>
    );
  });
  return (
    <div className="getBookingContainer">
      <h2 className="get-booking-title">Find a booking:</h2>
      <form>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /> <br /> <br />
        <label htmlFor="time">Time:</label>
        <select className="selectTime"
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">--Select Time--</option>
          <option value="18:00">18:00</option>
          <option value="21:00">21:00</option>
        </select>
        <br /> <br />
        <button className="searchBookingButton" type="button" onClick={handleGetBooking}>
          Search
        </button> 
      </form> <br />
      {bookingListModal && (
        <div className="booking-list-modal">
          <div className="booking-list-modal-content">
            <h3>Booking List:</h3>
            {bookingsListHtml}
            <button onClick={closeBookingListModal}>Close</button>
          </div>
        </div>
      )}
      {bookingBtnModal && (
        <div>
 {/*          <p>{availableMessage}</p> */}
        </div>
      )}
      {bookingFormModal && (
        <BookingSystem
          onClose={closeBookingFormModal}
          bookingDate={date}
          bookingTime={time}
        />
      )}
      {selectedBooking && (
        <EditBooking
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onBookingUpdated={handleGetBooking}
        />
      )}
    </div>
  );
};
