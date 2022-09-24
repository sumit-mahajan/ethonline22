import { useEffect, useState } from "react";
import { useConnection } from "../../utils/connection_service";
import { displayAddress, getENSDomain } from "../../utils/ethers_service";
import Box from "../utils/Box";
import "./navbar.css";

function Navbar() {
  const { accounts } = useConnection();

  const [profile, setProfile] = useState("");

  let showItems = true;

  if (!accounts.length) {
    showItems = false;
  }

  useEffect(() => {
    const fetchAsync = async () => {
      const ensName = await getENSDomain(accounts[0]);
      ensName && setProfile(ensName);
    };
    if (accounts[0]) {
      setProfile(displayAddress(accounts[0]));
      fetchAsync();
    }
  }, [accounts]);

  return (
    <>
      <nav className="navbar flex justify-between items-center">
        <a href="/">
          <div className="flex justify-between items-center">
            <div className="v-circle"></div>
            <Box width="10" />
            <h2 className="title">FALCON</h2>
          </div>
        </a>
        {showItems && (
          <div className="nav-items flex justify-between items-center">
            <div className="v-circle"></div>

            <Box width="30" />

            <div className="flex justify-between items-center">
              <div className="v-circle"></div>
              <Box width="10" />
              <h2 className="subtitle-text">{profile}</h2>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
