import "./side_menu_item.css";
import { Link } from "react-router-dom";

function SideMenuItem({ text, linkTo, isActive }) {
  return (
    <Link to={linkTo}>
      <p
        className={
          isActive ? "menu-item subtitle active" : "menu-item subtitle"
        }
      >
        {text}
      </p>
    </Link>
  );
}

export default SideMenuItem;
