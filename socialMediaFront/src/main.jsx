import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// need to import the pages so they dont return as undefined.
import './App.css'
import CreateUser from './CreateUser'
import ErrorPage from './ErrorPage.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Login from './Login'
import UserHome from './UserHome.jsx'




function Layout() {
  return (
    <>
      <Header />
        <div id='page-content'>
          <Outlet />
        </div>
      <Footer />
    </>
  )
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
      path: '/',
      element: <App />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/createUser',
        element: <CreateUser />
      },
      {
        path: 'userHome',
        element: <UserHome />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
