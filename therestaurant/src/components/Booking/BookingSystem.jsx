import React, { useState } from "react";
import Modal from "react-modal";
import { BookingForm } from "./BookingForm";

Modal.setAppElement("#root");

export const BookingSystem = (restaurantId) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBookingSubmit = (booking) => {
    setBookings([...bookings, booking]);
    closeModal();
  };

  const handleBookTableClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={handleBookTableClick}>Book a table</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Book a Table</h2>
        {isModalOpen && <BookingForm onSubmit={handleBookingSubmit} />}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};
