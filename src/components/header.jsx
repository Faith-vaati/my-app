import React from "react";
import Navbar from "../components/Navbar";



export default function Header(){
    return(
        <div className="header">
            <Navbar />
            <div className="top">
            <div className="search">
            <input type="textarea">
            </input>
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="profile">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            </div>
        </div>
    );
}