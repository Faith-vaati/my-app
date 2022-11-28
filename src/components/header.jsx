import React from "react";



export default function Header(){
    return(
        <div className="header">
            <div className="search">
            <input type="textarea">
            </input>
                <label>Search</label>
            </div>
            {/* <div className="profile">
            <i className="fa-solid fa-user"></i>
            </div> */}
        </div>
    );
}