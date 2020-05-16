import React, { useState } from "react";


const SignUp = ({ setLoggedIn }) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')

    const submit = event => {
        event.preventDefault()
        fetch(`/user/signup`, {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }   
        }).then(res => res.json())
        .then(data => {
            if(data.message) {
                console.log(data.message)
                setMessage(data.message)
            }
            if(data.token && data.email) {
                localStorage.setItem("myToken", data.token) //Set Token
                localStorage.setItem("myEmail", data.email)
                setLoggedIn(data.token)
            }
            // console.log(localStorage.myToken) // Check Token if stored in localStorage
        })
        
        setUserName('')
        setEmail('')
        setPassword('')
        
    }

    return (
        <form onSubmit={submit}>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>User Name</label>
            <input 
                type="text" 
                name="username"
                value={username} 
                onChange={e => setUserName(e.target.value)}
                className="form-control" 
                placeholder="User Name" />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input 
                type="email" 
                name="email"
                value={email} 
                onChange={e => setEmail(e.target.value)}
                className="form-control" 
                placeholder="Email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input 
                type="password" 
                name="password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
                className="form-control" 
                placeholder="Password" />
        </div>

        <div className="form-group">
                <p>{message}</p>
        </div>
        
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        
            
        <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
        </p>
        </form>
    )
}

export default SignUp