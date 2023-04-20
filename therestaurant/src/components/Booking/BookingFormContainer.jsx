import React from "react";
import BookingForm from "./BookingForm";
import { createBooking } from "../../Services/web3Service";

const BookingFormContainer = () => {
  const handleSubmit = async (bookingData) => {
    createBooking(bookingData, (error, message) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Message:", message);
      }
    });
  };

  return <BookingForm onSubmit={handleSubmit} />;
};

export default BookingFormContainer;
