import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHome,
  faStore,
  faUser,
  faUserPlus,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="navbar">
      <h2 className="navHeroHeading">
        <FontAwesomeIcon icon={faStore} /> FAKE SHOP
      </h2>
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="hamburgerMenu"
      >
        Menu <FontAwesomeIcon icon={faBars} />
      </button>

      <div className={menuVisible ? "navItemsContainerM" : "navItemsContainer"}>
        <ul>
          <li>
            <Link to="/" className="link">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <div className="search">
            <li>
              <input
                placeholder="Search for the product"
                className="searchBar"
                type="text"
              />{" "}
              <FontAwesomeIcon className="searchBtn" icon={faMagnifyingGlass} />
            </li>
          </div>
          <li>
            <Link to="/signin" className="link">
              <FontAwesomeIcon icon={faUser} /> SignIn
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link">
              <FontAwesomeIcon icon={faUserPlus} /> SignUp
            </Link>
          </li>

          <li>
            <Link to="/cart" className="link">
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
