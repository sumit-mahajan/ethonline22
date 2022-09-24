import { configureChains, createClient, defaultChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, provider } = configureChains(chains.mumbai, [
  alchemyProvider({ apiKey: "XUGuXoV0s43N-WfjpE79Jbc7AMiInF2M" }),
  publicProvider(),
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
});
