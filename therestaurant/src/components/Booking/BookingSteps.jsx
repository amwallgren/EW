import React from "react";
import { Step1Date } from "./Step1Date";
import { Step2Time } from "./Step2Time";
import { Step3Guests } from "./Step3Guests";
import { Step4NameAndEmail } from "./Step4NameAndEmail";
import { Step5Confirmation } from "./Step5Confirmation";

export const BookingSteps = ({
  step,
  date,
  setDate,
  time,
  setTime,
  handleGetBooking,
  availableTables,
  guests,
  setGuests,
  name,
  setName,
  lastName,
  setLastName,
  email,
  setEmail,
}) => {
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
    case 5:
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
