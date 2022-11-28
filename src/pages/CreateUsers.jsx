import React from "react";
import { useRef, useState } from "react";

export default function CreateUsers(){
    const [isErr, setIsErr] = useState();

    const rfFnames = useRef();
    const rfEmail = useRef();
    const rfPnumber = useRef();
    const rfPosition = useRef();
    const rfDepartment = useRef();
    const rfCountry = useRef();

    const [body, updateBody] = useState(
        {
            Fnames: null,
            Email: null,
            Pnumber: null,
            Position: null,
            Department: null,
            Country: null,

        }
    );
    const validateForm = () =>{
        console.log("sdsds")
    let result = true;
    let d = body;

    d.Fnames = rfFnames.current.value;
    d.Email = rfEmail.current.value;
    d.Pnumber = rfPnumber.current.value;
    d.Position = rfPosition.current.value;
    d.Department = rfDepartment.current.value;
    d.Country = rfCountry.current.value;

    updateBody(d);
    setIsErr("");
    console.log(body);

    if(!body.Fnames){
        result=false;
        setIsErr("Enter valid Names!");
        return result;
    }
    if(!validateEmail(body.Email)){
        result=false;
        setIsErr("Enter a valid Email Address!");
        return result;
    }
    if(!body.Pnumber){
        result=false;
        setIsErr("Enter a valid Phone Number!");
        return result;
    }
    if(!body.Position){
        result=false;
        setIsErr("Enter a valid Position!");
        return result;
    }
    if(!body.Department){
        result=false;
        setIsErr("Enter a valid Dpartment!");
        return result;
    }
    if(!body.Country){
        result=false;
        setIsErr("Enter a valid Country!");
        return result;
    }
};

    const validateEmail = (Email) =>{
        return String(Email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return(
<div className="AddUser">
    <div className="UserForm">
<form className="bg1">
<h1>Add user</h1>
<div className="row">
<input ref={rfFnames} type="text" placeholder="Full Names" />
<input ref={rfEmail} type="email" placeholder="Email Address" />
<input ref={rfPnumber} type="interger" placeholder="Phone Number" />
<input ref={rfPosition} type="text" placeholder="Position" />
<input ref={rfDepartment} type="text" placeholder="Department" />
<select ref={rfCountry}>
  <option value="select">Select</option>
  <option value="kenya">Kenya</option>
  <option value="uganda">Uganda</option>
  <option value="tz">Tanzania</option>
</select>
</div>
<button onClick={() => {validateForm()}}> Submit</button>
</form>
    </div>
</div>
    );
}