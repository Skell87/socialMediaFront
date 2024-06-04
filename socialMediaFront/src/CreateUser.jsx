import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const navigate = useNavigate()
    return (
        <div id="createUserPage">
            <div>
                <h1>Create an Account.</h1>
                <div>Username:</div>
                <input onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
                <div>Password:</div>
                <input onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div>
                <div>First Name:</div>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div>
                <div>Last Name:</div>
                <input onChange={(e) => {
                    console.log('HERE', lastName) 
                    setLastName(e.target.value) }} value={lastName} />
            </div>
            <button onClick={() => submit()}>Submit</button>
        </div>
        
    )
}

export default CreateUser