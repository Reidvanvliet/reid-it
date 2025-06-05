import { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom"
import SearchBar from "../features/search/SearchBar";

const Navbar = () => {

    return (
    <>
        <div className="nav-bar">
            <div className="logo-container">
                <img src={require("./crawfish.png")} />
                <NavLink to="/" className="home-logo">Reid<span className="home-logo-span">It</span></NavLink>
            </div>
            <div className='search-container'>
                <SearchBar />
                <img src={require("./magnifyingGlass.png")}/>
            </div>
            <div className="login-container">
                Login
                {/*<Login />*/}
            </div>
        </div>
        <div className="main-body">
            <Outlet />
        </div>
        
    </>
    )
}

export default Navbar;