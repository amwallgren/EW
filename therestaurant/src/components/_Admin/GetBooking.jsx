import React from "react";
import { useWeb3 } from "../../Services/web3Service";
import { useState, useEffect } from "react";
import "../_Admin/getBooking.css";
import { EditBooking } from "./EditBooking";
import { RemoveBooking } from "./RemoveBooking";
import { BookingSystem } from "../Booking/BookingSystem";

export const GetBooking = () => {
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const [bookingsArray, setBookingsArray] = useState([]);

  //modals
  const [bookingListModal, setBookingListModal] = useState(false);
  const [bookingBtnModal, setBookingBtnModal] = useState(false);
  const [bookingFormModal, setBookingFormModal] = useState(false);
  // const showBookingModal = () => {
  //   setBookingsModal(true);
  // };

  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  //selected booking for edit
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

  //open booking form modal
  const handleBookingFormModal = () => {
    setBookingFormModal(true);
  };

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
        // console.log(bookingIds);
        // const bookingArray = [];
        for (let i = 0; i <= bookingIds; i++) {
          // console.log(i);
          // const bookingId = bookingIds[i];
          // let bookingId = bookingIds[i];
          let bookings = await contract.methods.bookings(i).call();
          // tempBookingsArray.push(bookings);
          // console.log(bookingArray);
          console.log(bookings);
          if (bookings.time === timeValue && bookings.date === dateString) {
            // console.log(bookings);
            tempBookingsArray.push(bookings);
          }
        }
        // setBookingsArray(tempBookingsArray);
        // console.log(bookingId);
      } catch (error) {
        console.error("Error getting bookings:", error);
      }

      // console.log(bookingsArray);
    }
    console.log(tempBookingsArray);
    setBookingsArray(tempBookingsArray);
    // console.log(bookingsArray);
  };

  useEffect(() => {
    if (bookingsArray.length < 15) {
      setBookingBtnModal(true);
      // setBookingBtnModal(true);
      // console.log("theres is " + (15 - bookingsArray.length) + " available bookings");
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
        {/* <EditBooking />
        <RemoveBooking /> */}
        <li>
          <button onClick={() => handleEditBooking(booking)}>Edit</button>
        </li>

        <RemoveBooking bookingID={booking.id} />
      </ul>
    );
  });

  return (
    <div>
      <div>
        <button onClick={handleBookingFormModal}>Get bookings</button>
      </div>

      {bookingFormModal && (
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
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

          <button onClick={handleGetBooking} className="admin-btn">
            Search bookings
          </button>
          <button onClick={closeBookingFormModal}>Close</button>
        </div>
      )}

      {bookingListModal && (
        <div className="booking-list-modal">
          {bookingsListHtml}
          {availableMessage}
          <button onClick={closeBookingListModal}>Close</button>

          {bookingBtnModal && <BookingSystem />}
        </div>
      )}

      {/* {bookingBtnModal && (
        <BookingSystem />
      )} */}

      {selectedBooking && (
        <EditBooking
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
};
