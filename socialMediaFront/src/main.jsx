import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// need to import the pages so they dont return as undefined.
import "./App.css";
import CreateUser from "./CreateUser";
import ErrorPage from "./ErrorPage.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Login from "./Login";
import Profile from "./profile.jsx";
import UserHome from "./UserHome.jsx";
import { AuthContext } from "./context";
import { fetchUser } from "./api.js";

function Layout() {
  return (
    <>
      <Header />
      <div id="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

// router
// need to make sure when you set up a page that you set up a layout too,
// got an error that layout was undefined, so i set up a layout function
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);

  useEffect(() => {
    // set back to accessToken from auth.accessToken
    if (accessToken) {
      // set auth.access token back to accessToken
      localStorage.setItem("accessToken", accessToken);
      // start new code

      //  end new code
    }
  }, [accessToken]);

  // old use effect, set back if doesnt work
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  // new useeffect

  // comment back in if it doenst work
  const auth = {
    accessToken,
    setAccessToken,
  };

  return (
    <AuthContext.Provider value={{ auth: auth }}>
      {children}
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
