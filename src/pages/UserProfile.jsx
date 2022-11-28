import React, { useRef, useState } from "react";

import "../styles/users.scss";

export default function UserProfile() {
  const [isErr, setIsErr] = useState();
  // const [isLoading, setIsLoading] = useState(null);

  const rfCompany = useRef();
  const rfUsername = useRef();
  const rfEmail = useRef();
  const rfFirstname = useRef();
  const rfLastname = useRef();
  const rfAddress = useRef();
  const rfCity = useRef();
  const rfCountry = useRef();
  const rfPostalcode = useRef();
  const rfPassword = useRef();
  const rfConfirmpassword = useRef();

  const [body, updateBody] = useState({
    Company: null,
    Username: null,
    Email: null,
    Address: null,
    City: null,
    Country: null,
    Postalcode: null,
    Password: null,
    Confirmpassword: null,
  });

  const validateForm = () => {
    let result = true;
    let d = body;

    d.Company = rfCompany.current.value;
    d.Username = rfUsername.current.value;
    d.Email = rfEmail.current.value.toLowerCase().trim();
    d.Address = rfAddress.current.value;
    d.City = rfCity.current.value;
    d.Country = rfCountry.current.value;
    d.Postalcode = rfPostalcode.current.value;
    d.password = rfPassword.current.value;
    d.Confirmpassword = rfConfirmpassword.current.value;

    updateBody(d);
    setIsErr("");
    console.log(body);

    if (!body.Company) {
      result = false;
      setIsErr("Enter a valid company name!");
      return result;
    }

    if (!body.Username) {
      result = false;
      setIsErr("Enter a valid username!");
      return result;
    }

    if (!validateEmail(body.Email)) {
      result = false;
      setIsErr("Enter a valid email address!");
      return result;
    }

    if (!body.City) {
      result = false;
      setIsErr("Enter a valid city!");
      return result;
    }
    if (!body.Country) {
      result = false;
      setIsErr("Select a country!");
      return result;
    }

    if (!body.Postalcode) {
      result = false;
      setIsErr("Enter a valid Postal Code!");
      return result;
    }

    if (!body.Password) {
      result = false;
      setIsErr("Enter a valid password!");
      return result;
    }
    if (!body.Confirmpassword) {
      result = false;
      setIsErr("Enter a valid password confimation!");
      return result;
    }
    return result;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const Create = () => {};

  return (
    <div className="userprofile">      
    <form className="form">
      <div className="row">
        <div className="formcontent">
      <h1 className="formheading">Create User</h1>
        <div className="row">
          <div className="company">
            <label>
              Company
              <br />
              <input ref={rfCompany} type="text" name="company" required />
            </label>
          </div>

          <div className="username">
            <label>
              Username
              <br />
              <input ref={rfUsername} type="text" name="uname" required />
            </label>
          </div>

          <div className="email">
            <label>
              Email
              <br />
              <input ref={rfEmail} type="email" name="email" required />
            </label>
          </div>
        </div>

        <div className="row">
          <div className="firstname">
            <label>
              First Name
              <br />
              <input ref={rfFirstname} type="text" name="fname" required />
            </label>
          </div>

          <div className="lastname">
            <label>
              Last Name
              <br />
              <input ref={rfLastname} type="text" name="lname" required />
            </label>
          </div>
        </div>

        <div className="row">
          <div className="address">
            <label>
              Address
              <br />
              <textarea
                ref={rfAddress}
                input
                type="textarea"
                name="address"
                required
              ></textarea>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="city">
            <label>
              City
              <br />
              <input ref={rfCity} type="text" name="city" />
            </label>
          </div>

          <div className="country">
            <label>
              Country
              <br />
              <select ref={rfCountry} id="country" name="country" required>
                <option value="select">Select</option>
                <option value="kenya">Kenya</option>
                <option value="uganda">Uganda</option>
                <option value="tz">Tanzania</option>
              </select>
            </label>
          </div>

          <div className="postalcode">
            <label>
              Postal Code
              <br />
              <input ref={rfPostalcode} type="text" name="pcode" />
            </label>
          </div>
        </div>

        <div className="row">
          <div className="password">
            <label>
              Password
              <br />
              <input
                ref={rfPassword}
                type="password"
                name="password"
                required
              />
            </label>
          </div>

          <div className="confirmpassword">
            <label>
              Confirm Password
              <br />
              <input
                ref={rfConfirmpassword}
                type="password"
                name="cpassword"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Submit"></input>
        </div>
        <div className="profilebar">
        <div className="profile">
          <h1>Userprofile</h1>
        </div>
        </div>
        </div>
      </form>
      </div>
  );
}
