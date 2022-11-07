import { useState, useEffect } from "react";
import userImg from "../../assets/imgs/neutral.png";
import UserAccount from "../userManagement/userAccount";
import EditUserDetails from "../userManagement/editUserDetails";
import ChangePassword from "../userManagement/changePassword";

export default function Header2(props) {
  var jwt = require("jsonwebtoken");

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [showSettings, setShowSettings] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleEditDetails, setToggleEditDetails] = useState(false);
  const [toggleChangePass, setToggleChangePass] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("nimda_ksa");
    if (token) {
      try {
        var decoded = jwt.decode(token);
        setCurrentUser(decoded);

        if (Date.now() >= decoded.exp * 1000) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const logout = () => {
    fetch("/api/auth/logout", {
      method: "get",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.clear();
        setIsAuthenticated(false);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ zIndex: 1000 }}>
      {toggleAccount && (
        <UserAccount
          setToggleAccount={setToggleAccount}
          currentUser={currentUser}
        />
      )}
      {toggleEditDetails && (
        <EditUserDetails
          setToggleEditDetails={setToggleEditDetails}
          setToggleChangePass={setToggleChangePass}
          setIsAuthenticated={setIsAuthenticated}
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
        />
      )}
      {toggleChangePass && (
        <ChangePassword
          setToggleChangePass={setToggleChangePass}
          setIsAuthenticated={setIsAuthenticated}
          isAuthenticated={isAuthenticated}
          currentUser={currentUser}
        />
      )}

      <div className="main">
        <h4>{props.active}</h4>
        <div
          onMouseOver={() => setShowSettings(true)}
          onMouseOut={() => setShowSettings(false)}
        >
          <div className="user">
            <div className="dropdown">
              <h5>
                {currentUser?.Name && currentUser.Name}{" "}
                <span>
                  <i className="fa fa-angle-down"></i>
                </span>
              </h5>
            </div>
            <img src={userImg} alt="" />
          </div>
          {showSettings ? (
            <div className="userOptions showSettings">
              <h5
                onClick={() => {
                  setToggleAccount(true);
                }}
              >
                Account
              </h5>
              <h5
                onClick={() => {
                  setToggleEditDetails(true);
                  console.log(toggleEditDetails);
                }}
              >
                Edit Details
              </h5>
              <h5
                onClick={() => {
                  setToggleChangePass(true);
                }}
              >
                Change Password
              </h5>
              <h5
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </h5>
            </div>
          ) : (
            <div className="userOptions">
              <h5
                onClick={() => {
                  {
                    setToggleAccount(true);
                  }
                }}
              >
                Account
              </h5>
              <h5
                onClick={() => {
                  setToggleEditDetails(true);
                }}
              >
                Edit Details
              </h5>
              <h5
                onClick={() => {
                  setToggleChangePass(true);
                }}
              >
                Change Password
              </h5>
              <h5>Logout</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
