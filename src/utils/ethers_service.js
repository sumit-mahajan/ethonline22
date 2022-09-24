import { ethers } from "ethers";

// This code will assume you are using MetaMask.
// It will also assume that you have already done all the connecting to metamask
// this is purely here to show you how the public API hooks together
export const ethersProvider = new ethers.providers.Web3Provider(
  window.ethereum
);

export const ensProvider = new ethers.providers.JsonRpcProvider(
  "https://rpc.ankr.com/eth"
);

export const signText = (text) => {
  return ethersProvider.getSigner().signMessage(text);
};

export const getENSDomain = async (address) => {
  return await ensProvider.lookupAddress(address);
};

export const getAddressFromENS = async (ensName) => {
  const address = await ensProvider.resolveName(ensName);
  console.log(address);
  return address;
};

export const displayAddress = (address) =>
  address.substring(0, 5) +
  "..." +
  address.substring(address.length - 3, address.length);
