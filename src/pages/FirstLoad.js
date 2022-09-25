import Loading from "../components/loading/Loading";
import { useConnection } from "../utils/connection_service";
import ChooseProfilePage from "./choose_profile_page/ChooseProfilePage";
import HomePage from "./home_page/HomePage";
import LandingPage from "./landing_page/LandingPage";
import TestNewComponent from "./TestNewComponent";

export default function FirstLoad() {
  const { isLoggedIn, isLoading, accounts, currProfile } = useConnection();

  const isConnected = accounts.length > 0;

  if (isLoading && !isLoggedIn) {
    return (
      <Loading message="Logging in... You may need to sign the transaction" />
    );
  }
  if (isConnected && isLoggedIn) {
    if (!currProfile) {
      return <ChooseProfilePage />;
    } else {
      return <HomePage />;
    }
  }

  return <LandingPage />;
}
