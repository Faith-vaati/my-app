import React from "react";
import Navbar from "../components/Navbar";



export default function Header(){
    return(
        <div className="header">
            <Navbar />
            <div className="search">
            <input type="textarea">
            </input>
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            {/* <div className="profile">
            <i className="fa-solid fa-user"></i>
            </div> */}
        </div>
    );
}