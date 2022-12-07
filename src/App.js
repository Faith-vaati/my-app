import React from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import "./App.scss";

//Importing Pages
import CreateUsers from "./pages/CreateUsers";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
import Test from "./pages/Test";





function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/create" element={<CreateUsers />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
