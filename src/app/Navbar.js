import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import SearchBar from "../features/search/SearchBar";
import CommunitiesSidebar from "../features/communities/CommunitiesSidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let sidebarStyle = { display: show ? "block" : "none" };

  return (
    <>
      <div className="nav-bar">
        <div className="logo-container">
          <img src={require("../media/crawfish.png")} />
          <NavLink to="/" className="home-logo">
            Reid<span className="home-logo-span">It</span>
          </NavLink>
        </div>
        <div className="search-container">
          <SearchBar />
          <img src={require("../media/magnifyingGlass.png")} />
        </div>
        <div className="communities-button-container">
          <button className="button-4" role="button" onClick={(e) => setShow(!show)}>Communities</button>
        </div>
      </div>
      <div className="main-body">
        <Outlet />
      </div>
      <CommunitiesSidebar sidebarStyle={sidebarStyle} />
    </>
  );
};

export default Navbar;
