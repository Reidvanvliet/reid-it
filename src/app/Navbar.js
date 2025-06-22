import { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import SearchBar from "../features/search/SearchBar";
import CommunitiesSidebar from "../features/communities/CommunitiesSidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/search";

  return (
    <>
      <div className="nav-bar">
        <div className="logo-container">
          <NavLink to="/">
          <img src={require("../media/crawfish.png")} />
            <span className="home-logo">Reid<span className="home-logo-span">It</span></span>
          </NavLink>
        </div>
        {isHomePage ? (
          <div className="search-container">
            <img src={require("../media/magnifyingGlass.png")} />
            <SearchBar />
          </div>
        ) : (
          <div></div>
        )}

        <div className="communities-button-container">
          <button
           className="mobile-communities"
            role="button"
            onClick={(e) => setShow(!show)}>
              <div></div>
              <div></div>
              <div></div>
          </button>
          <button
            className="button-4"
            role="button"
            onClick={(e) => setShow(!show)}
          >
            Communities
          </button>
        </div>
      </div>
      <div className="main-body">
        <Outlet />
      </div>
      {show && <CommunitiesSidebar />}
    </>
  );
};

export default Navbar;
