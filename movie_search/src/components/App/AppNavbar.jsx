import React from "react";
import movieSvg from "../../assets/images/movie.svg"
import AppNavbarTabs from "./AppNavbarTabs";
import "./style.css"

const AppNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <img src={movieSvg} alt="movie" />
                <div className="navbar-tabs">
                    <AppNavbarTabs />
                </div>
            </div>
        </div>
    )
}

export default AppNavbar