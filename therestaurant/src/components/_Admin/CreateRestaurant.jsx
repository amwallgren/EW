import React, { useState, useEffect } from "react";
import { useWeb3 } from "../../Services/web3Service";
import "../../Styles/CreateRestaurantBtn.css";

export const CreateRestaurant = ({ onRestaurantCreated }) => {
  const [name, setName] = useState("");
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
      });
    }
  }, [contract]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (web3 && contract && name) {
      const accounts = await web3.eth.getAccounts();
      contract.methods
        .createRestaurant(name)
        .send({ from: accounts[0] })
        .on("transactionHash", (hash) => {
          console.log("Transaction hash:", hash);
          setEventInfo("Waiting for transaction confirmation...");
        })
        .on("receipt", (receipt) => {
          console.log("Transaction receipt:", receipt);
          setName("");
          const restaurantId = receipt.events.RestaurantCreated.returnValues.id;
          onRestaurantCreated(restaurantId); // Pass the restaurantId back to the Header
        })
        .on("error", (error, receipt) => {
          console.error("Error:", error);
          setEventInfo("An error occurred. Please try again.");
          setName("");
        });
    }
  };

  return web3 && contract ? (
    <div className="create-restaurant-btn-container">
      <form onSubmit={handleSubmit}>
        <h2>Create a New Restaurant</h2>
        <input
          type="text"
          className="create-restaurant-btn-input"
          placeholder="Restaurant Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <button type="submit" className="create-restaurant-btn-button">
          Create
        </button>
      </form>
      {eventInfo && <div className="event-info">{eventInfo}</div>}
    </div>
  ) : null;
};
