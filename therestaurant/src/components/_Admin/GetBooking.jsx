import React from "react";
import { useWeb3 } from "../../Services/web3Service";

export const GetBooking = () => {
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const handleGetBooking = async () => {
    if (web3 && contract) {
      try {
        const bookingIds = await contract.methods.getBookings(1).call();
        const bookingArray = [];
        for (let i = 0; i < bookingIds.length; i++) {
          const bookingId = bookingIds[i];
          const booking = await contract.methods.bookings(bookingId).call();
          bookingArray.push(booking);
          console.log(booking);
        }

        console.log(bookingIds);
      } catch (error) {
        console.error("Error getting bookings:", error);
      }
    }
  };

  return (
    <button onClick={handleGetBooking} className="admin-btn">
      Get Bookings
    </button>
  );
};
