import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const menu = useRef(false);

  const expandMenu = () => {
    document.getElementById("menu-list").style.animation = "none";
    document.getElementById("list").animation = "none";
    if (menu.current) {
      document.getElementById("menu-list").style.animation =
        "squeeze 0.7s ease";
    } else {
      document.getElementById("menu-list").style.animation = "expand 0.7s ease";
    }
    menu.current = !menu.current;

    document.getElementById("menu-list").className = menu.current
      ? "menu-open"
      : "menu-closed";
    document.getElementById("list").className = menu.current
      ? "list-shown"
      : "list-hidden";
  };
  return (
    <div id="navbar">
      <button onClick={expandMenu}>&#x2630;</button>
      <div id="menu-list" className="menu-closed" onClick={expandMenu}>
        <ul id="list" className="list-none">
          <Link className="link" to="*">
            <li>What is it</li>
          </Link>
          <Link className="link" to="*">
            <li>Perks</li>
          </Link>
          <Link className="link" to="/pricing">
            <li>Pricing</li>
          </Link>
        </ul>
      </div>
      <Link className="link home-link" to="/">
        exp|con
      </Link>
    </div>
  );
}

export default Navbar;
