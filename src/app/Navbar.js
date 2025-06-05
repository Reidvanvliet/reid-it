import { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import SearchBar from "../features/search/SearchBar";
import CommunitiesSidebar from "../features/communities/CommunitiesSidebar";

const Navbar = () => {
  const [show, setShow] = useState(true);

  let sidebarStyle = { display: show ? "block" : "none" };

  return (
    <>
      <div className="nav-bar">
        <div className="logo-container">
          <img src={require("./crawfish.png")} />
          <NavLink to="/" className="home-logo">
            Reid<span className="home-logo-span">It</span>
          </NavLink>
        </div>
        <div className="search-container">
          <SearchBar />
          <img src={require("./magnifyingGlass.png")} />
        </div>
        <div className="communities-button-container">
          <button onClick={(e) => setShow(!show)}>open</button>
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
