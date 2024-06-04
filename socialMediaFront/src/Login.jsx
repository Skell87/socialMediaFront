import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import CreateUser from "./CreateUser"




function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    return (
        <div id="loginPage">
            <h1>Login</h1>
            <div>
                <div>Username:</div>
                <input 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </div>

            <div>
                <div>Password:</div>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <div>
                <button onClick={() => submit()}>Submit</button>
            </div>
            <div>
                <button className="button" onClick={() => navigate('/CreateUser')}>
                    dont have an account? click here!</button>
            </div>
        </div>
    )
}

export default Login