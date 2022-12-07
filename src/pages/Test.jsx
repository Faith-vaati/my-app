import React from "react";
import {useState} from 'react';

export default function Test(){
    const {name,setName} = useState("Vaati");

    function AgentName(e){
        setName(e.target.value);
    }
    return(
        <div>
            <h1>Your agent is:</h1>
            <h2>{name}</h2>
            <input value={name} onChange={AgentName}></input>
            <button>Change</button>
        </div>
    );
}