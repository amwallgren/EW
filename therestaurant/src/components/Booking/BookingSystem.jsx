import React, { useState } from "react";
import Modal from "react-modal";
import { BookingForm } from "./BookingForm";
import { BookingSearch } from "./BookingSearch";

Modal.setAppElement("#root");

export const BookingSystem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearchSubmit = (formData) => {
    const filteredBookings = bookings.filter((booking) => {
      return (
        booking.name.toLowerCase().includes(formData.name.toLowerCase()) &&
        booking.bookingDate === formData.bookingDate &&
        booking.numberOfGuests >= formData.numberOfGuests
      );
    });
    setSearchResults(filteredBookings);
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

      <BookingSearch
        onSearch={handleSearchSubmit}
        searchResults={searchResults}
      />
    </div>
  );
};
