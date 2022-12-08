import React from "react";
import Navbar from "../components/Navbar";
import { useRef } from "react";



export default function Header(){
   const rfSearch = useRef();


    return(
        <div className="header">
            <Navbar />
            <div className="top">
            <div className="search">
            <input ref={rfSearch} type="textarea">
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