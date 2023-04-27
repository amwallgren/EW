import React, { useState } from "react";
import Modal from "react-modal";
import { BookingForm } from "./BookingForm";
import "../../Styles/Form.css";

Modal.setAppElement("#root");

export const BookingSystem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
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
      <button className="bookingButton" onClick={handleBookTableClick}>Book a table</button>
      <Modal className='modalForm' isOpen={isModalOpen} onRequestClose={closeModal}
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0, 0.558)'} }}>


        {isModalOpen && <BookingForm onSubmit={handleBookingSubmit} />}
        <button className="closeButton" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};
