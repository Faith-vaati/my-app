import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.scss"
import { useRef } from "react";


export default function Dashboard(){
    let timeref = useRef(0);

    function afterClicking() {
        timeref.current = timeref.current + 1;
        alert('You clicked me ' + timeref.current +' times');
    }
    return (
    <div className="dashboard">
        <Header />
        <p>I am a Dashboard</p>
        <div className="statetest">
       <button onClick={afterClicking}>Click Me</button>
        </div>
    </div>
    );
}