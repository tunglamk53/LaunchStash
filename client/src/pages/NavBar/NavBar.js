import React, { useContext } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import UserContext from '../../contexts/UserContext'
import Logo from '../../assets/logo.png'

const NavBar = () => {
    const { loggedIn } = useContext(UserContext)
    // const tkn = localStorage.getItem("myToken")

    if (loggedIn === null || loggedIn === "undefined") {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-danger font-weight-bold" to={"/"}>
                        <img
                            src={Logo}
                            width="50"
                            height="50"
                            className="d-inline-block mr-3"
                            alt="React Bootstrap logo"
                        />
                        LAUNCH STASH - CSIS 4495
                    </Link>
                <div className="nav-pills" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link btn-outline-warning" to={"/login"}>Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-outline-warning" to={"/signup"}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-danger font-weight-bold" to={"/"}>
                        <img
                            src={Logo}
                            width="50"
                            height="50"
                            className="d-inline-block mr-3"
                            alt="React Bootstrap logo"
                        />
                        LAUNCH STASH - CSIS 4495
                    </Link>
                    <div className="nav-pills" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-danger btn-outline-warning font-weight-bold" to={"/my-checklist"}>My Checklist</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-warning" to={"/profile"}>{localStorage.getItem('myEmail')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-warning" to={"/logout"}>Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar
