import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import Authens from '../../authens/authens'


const NavBar = (props) => {

    // const tkn = localStorage.getItem("myToken")

    if (props.isAuth === null || props.isAuth === "undefined") {
    // if(!tkn || tkn === "") {
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
                                <Link className="nav-link" to={"/profile"}>{props.email}</Link>
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