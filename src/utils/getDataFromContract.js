import { ethers } from "ethers";
import { signWithMetamask } from "./provider.js";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../contract/contract.js";

export default async function getContract() {
  const provider = await signWithMetamask();
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    provider
  );
  try {
    let data = await contract.getNFTs();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
