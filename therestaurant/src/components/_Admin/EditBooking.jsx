import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Services/web3Service";
import { editBooking } from "../../Services/web3Service";
import moment from "moment";

export const EditBooking = ({ booking, onClose, onBookingUpdated, id, editName, editDate, editTime, editNumOfGuest, onEditBooking }) => {
  const [bookingId, setBookingId] = useState("");
  const [name, setName] = useState(editName);
  const [date, setDate] = useState(editDate);
  const [time, setTime] = useState(editTime);
  const [numberOfGuests, setNumberOfGuests] = useState(editNumOfGuest);
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const [EditModal, setEditModal] = useState(false);

  const showEditModal = () => {
    setEditModal(true);
  }

  const CloseEditModal = () => {
    setEditModal(false);
  }

  const fetchBooking = async () => {
    if (web3 && contract && id) {
      try {
        const booking = await contract.methods.bookings(id).call();
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
        id: id,
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

    onEditBooking();
  };

  return (
    <div className="edit-booking-container">

      <div>
        <button onClick={showEditModal}>Edit</button>
      </div>

      
      {EditModal && (
        <div className="edit-bookings-modal">
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
            <select
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
          <button onClick={CloseEditModal}>Cancel</button>
        </div>
      )}
      
      
      
    </div>
  );
};
