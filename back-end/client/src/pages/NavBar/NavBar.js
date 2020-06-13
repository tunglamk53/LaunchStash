import React, { useContext } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import UserContext from '../../contexts/UserContext'

const NavBar = () => {
    const { loggedIn } = useContext(UserContext)
    // const tkn = localStorage.getItem("myToken")
    
    if (loggedIn === null || loggedIn === "undefined") {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                <Link className="navbar-brand" to={"/"}>HOME - CSIS 4495</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>HOME - CSIS 4495</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/my-checklist"}>My Checklist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/profile"}>{localStorage.getItem('myEmail')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/logout"}>Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar
