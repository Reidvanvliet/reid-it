import { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom"

const Navbar = () => {

    const getPosts = async () => {
    try {
        const response = await fetch('https://www.reddit.com/best.json')
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
    }

    const getComments = async () => {
    try {
        const response = await fetch('https://www.reddit.com/r/meirl/comments/1kyf0v4.json')
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
    }

    useEffect(() => {
        //getPosts();
        //getComments();
    })

    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img src={require("./crawfish.png")} />
                <NavLink to="/" className="home-logo">Reid <span className="home-logo-span">It</span></NavLink>
            </div>
            <div>
                {/*<Search />*/}
                <img src={require("./magnifyingGlass.png")}/>
            </div>
            <div>
                {/*<Login />*/}
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;