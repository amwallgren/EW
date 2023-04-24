import React, { useState } from "react";
import { useWeb3 } from "../Services/web3Service";

export const CreateRestaurant = () => {
  const [name, setName] = useState("");
  const web3Context = useWeb3();
  const { web3, contract } = web3Context || {};

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (web3 && contract && name) {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.createRestaurant(name).send({ from: accounts[0] });
      setName("");
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
    </div>
  ) : null;
};
