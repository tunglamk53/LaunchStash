import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from '../contexts/UserContext'

const SignUp = () => {
    const { setLoggedIn } = useContext(UserContext)

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const submit = event => {
        event.preventDefault()

        if(!username || !email || !password) {
          setMessage('Fields can not be empty !')
        } else {
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
          })
        }
    }

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={submit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    className="form-control"
                    placeholder="First Name" />
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
                    <p className='text-danger'>{message}</p>
            </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>


            <p className="forgot-password text-right">
                Already registered <Link to={"/login"} >sign in?</Link>
            </p>
            </form>
        </div>
        </div>
    )
}

export default SignUp
