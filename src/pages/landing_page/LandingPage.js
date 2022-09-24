import FilledButton from "../../components/filled_button/FilledButton";
import Box from "../../components/utils/Box";

import "./landing_page.css";

function LandingPage() {
  return (
    <>
      <main className="flex justify-between items-center container landingContainer">
        <div className="content">
          <h1 className="heading">Rise High, Soar Free</h1>
          <Box height={10} />
          <p className="subtitle-text">
            Falcon, a social media app built specifically for tranparency and
            creator incentives
          </p>
          <Box height={10} />
          <p className="subtitle-text">To get started,</p>
          <Box height={15} />
          <FilledButton
            classes="landing-btn"
            text="Connect Wallet"
            onclick={() => {}}
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
