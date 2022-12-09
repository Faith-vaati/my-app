import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.scss"
import { useRef } from "react";
import { useState } from "react";


export default function Dashboard(){
    const [start, setStart] = useState(0);
    // const [stop, setStop] = useState();
    const stopref = useRef(null);

   function startTime(){
    setStart(Date());
   }
   function stopTime() {
   stopref(stopref.curruent);
   }

   let secondsPassed = 0;
   if (setStart != null) {
    secondsPassed = (setStart) / 1000;
  }
    return (
    <div className="dashboard">
        <Header />
        <p>I am a Dashboard</p>
        <div className="statetest">
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
       <button onClick={startTime}>Start</button>
       <button onClick={stopTime}>Stop</button>
        </div>
    </div>
    );
}