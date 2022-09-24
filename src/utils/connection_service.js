import React, { useContext, useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

import { fetchContracts } from "./contracts_service";

const defaultChainId = 80001;

const supportedNetworks = {
  80001: {
    chainIdHex: "0x13881",
    name: "Mumbai",
    tokenSymbol: "MATIC",
    rpcURL: "https://rpc-mumbai.maticvigil.com",
    address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  },
};

const ConnectionContext = React.createContext();

export function ConnectionProvider(props) {
  const [state, setState] = useState({
    ethers: ethers,
    chainId: defaultChainId,
    accounts: [],
    error: "",
  });

  const connectWallet = useCallback(async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const signer = provider.getSigner();

      const { chainId } = await provider.getNetwork();

      if (!supportedNetworks[chainId]) {
        try {
          // Send metamask pop up to change network
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: supportedNetworks[defaultChainId].chainIdHex }],
          });
        } catch (err) {
          // Network doesn't exist in metamask
          // Send metamask pop up to add network
          if (err.code === 4902) {
            window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: supportedNetworks[defaultChainId].chainIdHex,
                  rpcUrls: [supportedNetworks[defaultChainId].rpcURL],
                  chainName: "Mumbai Testnet",
                  nativeCurrency: {
                    name: "MATIC",
                    symbol: "MATIC",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                },
              ],
            });
          }
        }

        throw new Error("Switch to Mumbai testnet from your browser wallet");
      }

      setState({
        ...state,
        accounts,
        chainId,
        provider,
      });

      //   const contracts = await fetchContracts(signer, chainId);

      //   setState({
      //     ...state,
      //     accounts,
      //     chainId,
      //     ...contracts,
      //     provider,
      //   });
    } catch (e) {
      if (e.message !== "Switch to Mumbai testnet from your browser wallet") {
        setState({
          ...state,
          error:
            "Switch to Mumbai testnet from your browser wallet. Detailed Error: " +
            e.message,
        });
      } else {
        setState({ ...state, error: e.message });
      }
      console.log("useConnection : connectWallet failed -> " + e.message);
    }
  }, []);

  const initialize = useCallback(async () => {
    try {
      let provider;

      if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
      } else {
        provider = new ethers.providers.JsonRpcProvider(
          supportedNetworks[defaultChainId].rpcURL
        );
      }

      const isMetamaskConnected = (await provider.listAccounts()).length > 0;

      if (isMetamaskConnected) {
        await connectWallet();
      } else {
        setState({
          ...state,
          provider,
        });

        // const contracts = await fetchContracts(provider, defaultChainId);

        // setState({ ...state, ...contracts, provider });
      }
    } catch (error) {
      console.log("Error ConnectionProvider -> ", error);

      setState({ ...state, error });
    }
  }, [connectWallet, state]);

  useEffect(() => {
    // initialize();

    if (window.ethereum) {
      // Detect metamask account change
      window.ethereum.on("accountsChanged", async function (accounts) {
        connectWallet();
      });

      // Detect metamask network change
      window.ethereum.on("chainChanged", function (networkId) {
        connectWallet();
      });
    }
  }, []);

  return (
    <>
      <ConnectionContext.Provider
        value={{
          ...state,
          connectWallet,
        }}
      >
        {props.children}
      </ConnectionContext.Provider>
    </>
  );
}

export function useConnection() {
  return useContext(ConnectionContext);
}

export { ConnectionContext };
