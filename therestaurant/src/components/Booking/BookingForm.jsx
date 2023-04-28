import React, { useState, useContext } from "react";
import "../../Styles/Form.css";
import { Web3Context } from "../../Services/web3Service";
import Spinner from "../Spinner";
import { Step5Confirmation } from "./Step5Confirmation";
import { BookingSteps } from "./BookingSteps";
import { Link } from "react-router-dom";

export const BookingForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [step, setStep] = useState(1);
  const [showSpinner, setShowspinner] = useState(false);
  const [availableTables, setAvailableTables] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const { web3, contract } = useContext(Web3Context);

  const handleGetBooking = async (newTime) => {
    const dateString = new Date(date).toISOString().split("T")[0];
    const timeValue = newTime === "18:00" ? "1800" : "2100";

    const totalTables = 15;

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

      const availableTables = totalTables - tempBookingsArray.length;
      setAvailableTables(availableTables);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowspinner(true);

    const dateString = new Date(date).toISOString().split("T")[0];
    const timeValue = time === "18:00" ? "1800" : "2100";
    const numberOfGuests = parseInt(guests, 10);
    const fullName = `${name} ${lastName}`;

    try {
      let restaurantId = 1;
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .createBooking(
          numberOfGuests,
          fullName,
          dateString,
          timeValue,
          restaurantId
        )
        .send({ from: accounts[0] });
      setStep(6);
      setShowspinner(false);
    } catch (error) {
      console.error("Error submitting booking:", error);
      setShowspinner(false);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    if (form.checkValidity()) {
      if (step < 4) {
        setStep(step + 1);
      }
    } else {
      form.reportValidity();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bookingForm">
      <h2>Book a table</h2>
      {step !== 6 && (
        <form onSubmit={handleSubmit}>
          <BookingSteps
            step={step}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            handleGetBooking={handleGetBooking}
            availableTables={availableTables}
            guests={guests}
            setGuests={setGuests}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
          <div className="stepButtons">
            {step > 1 && (
              <button className="prevButton" type="button" onClick={handlePrev}>
                Previous
              </button>
            )}
            {step < 4 && (
              <button
                className="nextButton"
                type="button"
                onClick={handleNext}
                disabled={step === 2 && availableTables <= 0}
              >
                Next
              </button>
            )}
            {step === 4 && (
              <>
                <button className="submitButton" type="submit">
                  Submit
                </button>
                <Link to={"/gdpr"} className="gdprFormLink">
                  Learn more about how we work with GDPR
                </Link>
              </>
            )}
          </div>
        </form>
      )}
      {step === 6 && (
        <Step5Confirmation
          name={name}
          lastName={lastName}
          email={email}
          date={date}
          time={time}
          guests={guests}
        />
      )}
      {showSpinner && <Spinner />}
    </div>
  );
};
