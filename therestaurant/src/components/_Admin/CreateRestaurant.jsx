import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Services/web3Service";
import "../../Styles/CreateRestaurantBtn.css";

export const CreateRestaurant = ({ onRestaurantCreated }) => {
  const [eventInfo, setEventInfo] = useState(null);
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  useEffect(() => {
    if (contract) {
      contract.events.RestaurantCreated({}, async (error, event) => {
        if (error) {
          console.error("Error in event listener:", error);
          setEventInfo("An error occurred. Please try again.");
          return;
        }

        const restaurantId = event.returnValues.id;
        const restaurant = await contract.methods
          .restaurants(restaurantId)
          .call();
        const restaurantName = restaurant.name;

        setEventInfo(
          `Restaurant created with ID: ${restaurantId} and Name: ${restaurantName}`
        );
        onRestaurantCreated(restaurantId);
      });
    }
  }, [contract, onRestaurantCreated]);

  const createRestaurant = async () => {
    if (web3 && contract) {
      const accounts = await web3.eth.getAccounts();
      contract.methods
        .createRestaurant("EW")
        .send({ from: accounts[0] })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash:", hash);
          setEventInfo("Waiting for transaction confirmation...");
        })
        .on("receipt", (receipt) => {
          console.log("Transaction receipt:", receipt);
        })
        .on("error", (error, receipt) => {
          console.error("Error:", error);
          setEventInfo("An error occurred. Please try again.");
        });
    }
  };

  return web3 && contract && !eventInfo ? (
    <div className="create-restaurant-btn-container">
      <button
        type="button"
        onClick={createRestaurant}
        className="create-restaurant-btn-button"
      >
        Create Restaurant
      </button>
      {eventInfo && <div className="event-info">{eventInfo}</div>}
    </div>
  ) : null;
};
