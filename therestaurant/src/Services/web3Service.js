import React, { createContext, useState, useEffect, useContext } from "react";
import Web3 from "web3";
import { contractABI, contractAddress } from "../config";

const useWeb3 = () => {
  return useContext(Web3Context);
};

const Web3Context = createContext(null);

const Web3Provider = ({ children }) => {
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
        setWeb3(web3Instance);
        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        setContract(contractInstance);
      }
    };

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3, contract }}>
      {children}
    </Web3Context.Provider>
  );
};

const createBooking = async (web3, contract, bookingData, callback) => {
  const { numberOfGuests, name, date, time, restaurantId } = bookingData;

  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .createBooking(numberOfGuests, name, date, time, restaurantId)
      .send({ from: accounts[0] });

    callback(null, "Booking created successfully!");
  } catch (error) {
    console.error("Error creating booking:", error);
    callback("Error creating booking. Please try again.", null);
  }
};

export default {
  Web3Context,
  Web3Provider,
  createBooking,
  contractABI,
  useWeb3,
};
