import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from '../contexts/UserContext'

const Login = () => {
    const { setLoggedIn } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const submit = event => {
        event.preventDefault()

        if(!email) {
          setMessage('Email field can not be empty !')
        } else {
          fetch(`/user/login`, {
              method: 'POST',
              body: JSON.stringify({ email, password }),
              headers: {
                  'Content-Type': 'application/json',
              }
          }).then(res => res.json())
          .then(data => {
              if(data.message) {
                  console.log(data.message)
                  setMessage(data.message)
              }
              if(data.token && data.email) {
                  localStorage.setItem("myToken", data.token) //Set Token
                  localStorage.setItem("myEmail", data.email) //Set Email
                  setLoggedIn(data.token)
                  console.log(localStorage.myToken) // Check Token if stored in localStorage
              }
          })
        }
    }

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={submit}>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Password" />
                </div>

                <div className="form-group">
                    <p className='text-danger'>{message}</p>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>


                <p className="forgot-password text-right">
                    {/* Forgot <a href="#">password?</a> */}
                    Forgot <Link to={"/"}>password?</Link>
                </p>
            </form>
        </div>
        </div>
    );
}

export default Login
