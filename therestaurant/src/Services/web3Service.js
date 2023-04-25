import React, { createContext, useState, useEffect, useContext } from "react";
import Web3 from "web3";
import { contractABI, contractAddress } from "../config";

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    const initWeb3 = async () => {
      let web3Instance;
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          web3Instance = new Web3(window.ethereum);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        web3Instance = new Web3(window.web3.currentProvider);
      } else {
        console.error("No web3 instance detected");
      }

      if (web3Instance) {
        console.log("web3Instance created", web3Instance);
        setWeb3(web3Instance);
        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        console.log("contractInstance created", contractInstance);
        setContract(contractInstance);
      }
    };

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={web3 && contract ? { web3, contract } : null}>
      {children}
    </Web3Context.Provider>
  );
};

// export const timeToUnixTimestamp = (dateString, timeString) => {
//   const [hour, minute] = timeString
//     .split(":")
//     .map((value) => parseInt(value, 10));
//   const date = new Date(dateString);
//   date.setHours(hour, minute, 0, 0);
//   return Math.floor(date.getTime() / 1000);
// };

export const callContract = async (
  web3,
  contract,
  method,
  args = [],
  send = false
) => {
  const accounts = await web3.eth.getAccounts();
  const contractMethod = contract.methods[method](...args);
  return send
    ? contractMethod.send({ from: accounts[0] })
    : contractMethod.call();
};

export const createRestaurant = async (web3, contract, name, callback) => {
  try {
    await callContract(web3, contract, "createRestaurant", [name], true);
    callback(null, "Restaurant created successfully!");
  } catch (error) {
    console.error("Error creating restaurant:", error);
    callback("Error creating restaurant. Please try again.", null);
  }
};

export const createBooking = async (
  web3,
  contract,
  numberOfGuests,
  name,
  date,
  time,
  restaurantId
) => {
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];

  return contract.methods
    .createBooking(numberOfGuests, name, date, time, restaurantId)
    .send({ from });
};

export const editBooking = async (web3, contract, bookingData, callback) => {
  try {
    const { id, numberOfGuests, name, date, time } = bookingData;
    await callContract(
      web3,
      contract,
      "editBooking",
      [id, numberOfGuests, name, date, time],
      true
    );
    callback(null, "Booking updated successfully!");
  } catch (error) {
    console.error("Error updating booking:", error);
    callback("Error updating booking. Please try again.", null);
  }
};

export const removeBooking = async (web3, contract, id, callback) => {
  try {
    await callContract(web3, contract, "removeBooking", [id], true);
    callback(null, "Booking removed successfully!");
  } catch (error) {
    console.error("Error removing booking:", error);
    callback("Error removing booking. Please try again.", null);
  }
};

export const getBookings = async (web3, contract, id, callback) => {
  try {
    const bookingIds = await callContract(web3, contract, "getBookings", [id]);
    callback(null, bookingIds);
  } catch (error) {
    console.error("Error getting bookings:", error);
    callback("Error getting bookings. Please try again.", null);
  }
};
