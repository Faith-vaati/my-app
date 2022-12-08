import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.scss"
import { useState} from "react";

export default function Dashboard(){
const [test, setTest] = useState('Click Me');

function afterClicking(){
    setTest('I am a Button');
}

    return (
    <div className="dashboard">
        <Header />
        <p>I am a Dashboard</p>
        <div className="statetest">
            <button onClick={afterClicking}>{test}</button>
        </div>
    </div>
    );
}