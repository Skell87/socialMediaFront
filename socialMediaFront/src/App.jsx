import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import UserHome from "./UserHome";
import Profile from "./profile";
import { AuthContext } from "./context";
import "./App.css";
import CreateUser from "./CreateUser";

function App() {
  return (
    <div>
      <Login />
      <CreateUser />
      <UserHome />
      <Profile />
    </div>
  );
}

export default App;
