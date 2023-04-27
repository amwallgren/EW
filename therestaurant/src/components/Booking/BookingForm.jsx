import React, { useState, useContext } from "react";
import "../../Styles/Form.css";
import { Web3Context } from "../../Services/web3Service";
import Spinner from "../Spinner";
import { Step1Date } from "./Step1Date";
import { Step2Time } from "./Step2Time";
import { Step3Guests } from "./Step3Guests";
import { Step4NameAndEmail } from "./Step4NameAndEmail";
import { Step5Confirmation } from "./Step5Confirmation";

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

  const { web3, contract } = useContext(Web3Context);

  const handleGetBooking = async () => {
    const dateString = new Date(date).toISOString().split("T")[0];
    const timeValue = time === "18:00" ? "1800" : "2100";

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

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Date date={date} setDate={setDate} />;
      case 2:
        return (
          <Step2Time
            time={time}
            setTime={setTime}
            handleGetBooking={handleGetBooking}
            availableTables={availableTables}
          />
        );
      case 3:
        return <Step3Guests guests={guests} setGuests={setGuests} />;
      case 4:
        return (
          <Step4NameAndEmail
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
          />
        );
      case 6:
        return (
          <Step5Confirmation
            name={name}
            lastName={lastName}
            email={email}
            date={date}
            time={time}
            guests={guests}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
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
          {renderStep()}
          <div className="stepButtons">
            {step > 1 && (
              <button className="prevButton" type="button" onClick={handlePrev}>
                Previous
              </button>
            )}
            {step < 4 && (
              <button className="nextButton" type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {step === 4 && (
              <button className="submitButton" type="submit">
                Submit
              </button>
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
