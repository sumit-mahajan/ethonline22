import { useConnection } from "../utils/connection_service";
import HomePage from "./home_page/HomePage";
import LandingPage from "./landing_page/LandingPage";
import TestNewComponent from "./TestNewComponent";

export default function FirstLoad() {
  const { accounts, connectWallet } = useConnection();

  const isConnected = accounts.length > 0;

  if (isConnected) return <TestNewComponent />;
  return <LandingPage />;
}
