import { useHistory, useLocation } from "react-router-dom";
import Box from "../utils/Box";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  let showItems = true;

  if (location.pathname === "/") {
    showItems = false;
  }

  return (
    <>
      <nav className="navbar flex justify-between items-center">
        <a href="/home">
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
              <h2 className="subtitle-text">sumit07.eth</h2>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
