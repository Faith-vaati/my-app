import React from "react";
import "../styles/navbar.scss"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="menu">
            <div className="navgroup">
                <h4>Home</h4>
                <div className="navlink">
                    <a href="./pages/Dashboard">Dashboard</a>
                </div>
                <div className="navgroup">
                    <h4>User Details</h4>
                    <div className="navlink">
                        <a href="./pages/UserProfile">User Profile</a>
                        <a href="./pages/AddUser">Add User</a>
                        <a href="./pages/Users">Users</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}