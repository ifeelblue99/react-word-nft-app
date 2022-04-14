import React from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../contract/contract.js";
import "./create-nft.css";
import { ethers } from "ethers";
import { signWithMetamask } from "../utils/provider";

function CreateNFT() {
  let contract;
  signWithMetamask().then((provider) => {
    const signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  });

  const [formData, setFormData] = React.useState({
    content: "",
    author: "",
    price: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (contract) {
      try {
        const { content, author, price } = formData;
        await contract.mintWordNFT(content, author, parseInt(price));
        alert("waiting for the testnet...");
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <div className="create-nft">
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={handleChange}
          name="author"
          value={formData.author}
          type="text"
          placeholder="Author"
        />
        <input
          required
          onChange={handleChange}
          name="content"
          value={formData.content}
          type="text"
          placeholder="Content"
        />
        <input
          required
          min={1}
          max={1000000000}
          onChange={handleChange}
          name="price"
          value={formData.price}
          type="number"
          placeholder="Price (Wei)"
        />
        <button>Mint</button>
      </form>
    </div>
  );
}
export default CreateNFT;
