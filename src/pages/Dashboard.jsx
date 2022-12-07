import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.scss"

export default function Dashboard(){
    return (
    <div className="dashboard">
        <Header />
        <p>I am a Dashboard</p>
    </div>
    );
}