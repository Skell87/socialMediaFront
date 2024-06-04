import { useState } from 'react'
import Login from './Login'
import UserHome from './UserHome'

import './App.css'
import CreateUser from './CreateUser'

function App() {
  

  return (
    <div>
      <Login />
      <CreateUser />
      <UserHome />
    </div>
  )
}

export default App
