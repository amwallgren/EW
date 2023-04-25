import React from "react";
import { useWeb3 } from "../../Services/web3Service";
import { useState } from "react";
import "../_Admin/getBooking.css";
import { EditBooking } from "./EditBooking";
import { RemoveBooking } from "./RemoveBooking";

export const GetBooking = () => {
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const [bookingsArray, setBookingsArray] = useState([]);

  //modals
  const [BookingModal, setBookingsModal] = useState(false);
  // const showBookingModal = () => {
  //   setBookingsModal(true);
  // };

  //selected booking for edit
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleEditBooking = (booking) => {
    console.log(booking);
    setSelectedBooking(booking);
  };
  
  console.log(selectedBooking);

  const closeBookingModal = () => {
    setBookingsModal(false);
  }

  const handleGetBooking = async () => {
    setBookingsModal(true);

    if (web3 && contract) {
      var tempBookingsArray = [];
      try {
        
        let bookingIds = await contract.methods.bookingCount().call();
        // console.log(bookingIds);
        // const bookingArray = [];
        for (let i = 0; i <= bookingIds; i++) {
          console.log(i);
          // const bookingId = bookingIds[i];
          // let bookingId = bookingIds[i];
          let bookings = await contract.methods.bookings(i).call();
          // tempBookingsArray.push(bookings);
          // console.log(bookingArray);
          console.log(bookings);
          if(bookings.id > 0) {
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
  
  const bookingsListHtml = bookingsArray.map((booking) => {
    return (
      <ul className="booking-list-ul" key={booking.id}>
        <li className="booking-list-id">{booking.id}</li>
        <li className="booking-list-name">{booking.name}</li>
        <li className="booking-list-date">{booking.date}</li>
        <li className="booking-list-time">{booking.time}</li>
        {/* <EditBooking />
        <RemoveBooking /> */}
        <li>
          <button onClick={() => handleEditBooking(booking)}>Edit</button>
        </li>

      </ul>
    );
  });


  return (
    <div>
      <button onClick={handleGetBooking} className="admin-btn">
      Get Bookings
      </button>

      {BookingModal && (
        <div className="booking-list-modal">
          {bookingsListHtml}
          <button onClick={closeBookingModal}>Close</button>
        </div>

      )}

      {selectedBooking && (
        <EditBooking
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
      
    </div>
    
  );
};
