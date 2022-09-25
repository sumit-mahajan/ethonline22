import { login } from "../../api/login";
import FilledButton from "../../components/filled_button/FilledButton";
import Box from "../../components/utils/Box";
import { useConnection } from "../../utils/connection_service";

import "./landing_page.css";

function LandingPage() {
  const { accounts, connectWallet } = useConnection();
  return (
    <>
      <main className="flex justify-between items-center container landingContainer">
        <div className="content">
          <h1 className="heading">Rise High, Soar Free</h1>
          <Box height={10} />
          <p className="subtitle-text">
            Falcon is a free to use, censorship resistant social media
            application with inherent tranparency and simplified creator
            incentives
          </p>
          {/* <Box height={10} />
          <p className="subtitle-text">Built on top of Lens Protocol</p> */}
          <Box height={10} />
          <p className="subtitle-text">To get started,</p>
          <Box height={15} />
          <FilledButton
            classes="landing-btn"
            text="Login with Polygon"
            onclick={connectWallet}
          />
        </div>
        <div className="imageBox">
          <img src="/images/login.svg" alt="Social Freedom" />
        </div>
      </main>
    </>
  );
}

export default LandingPage;
