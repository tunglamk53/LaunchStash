import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import FaceBookShareButton from "../components/FacebookShareButton";

const NavBar = () => {

    return (
        <nav className="navbar-expand-sm navbar-dark fixed-bottom">
            <div className="nav-pills" id="">
                <ul className="navbar-nav mr-3 float-right">
                    <li><FaceBookShareButton /></li>
                    <li className="nav-item">
                        <Link className="nav-link badge-warning text-white rounded-pill mr-2" to={"/feedback"}>Feedback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link badge-warning text-white rounded-pill" to={"/about-us"}>About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
