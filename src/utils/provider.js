import { ethers } from "ethers";

export const provider = new ethers.getDefaultProvider();

export async function signWithMetamask() {
  if (window.ethereum) {
    try {
      const metamaskProvider = new ethers.providers.Web3Provider(
        window.ethereum
      );
      await metamaskProvider.send("eth_requestAccounts", []);
      return metamaskProvider;
    } catch (error) {
      alert("You need to connect metamask");
    }
  } else {
    alert("You need metamask...");
  }
}
