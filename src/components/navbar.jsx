import React from "react";
import "../styles/navbar.scss"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="menu">
            <div className="navgroup">
                <h4>Home</h4>
                <div className="navlink">
                    <a href="/">Dashboard</a>
                </div>
                <div className="navgroup">
                    <h4>User Details</h4>
                    <div className="navlink">
                        <a href="/profile">User Profile</a>
                        <a href="/create">Add User</a>
                        <a href="/users">Users</a>
                        <a href="/test">Test</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}