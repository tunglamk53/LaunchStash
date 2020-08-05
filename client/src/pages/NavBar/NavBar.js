import React, { useContext } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import UserContext from '../../contexts/UserContext'
import Logo from '../../assets/logo.png'
import {
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    NavLink
} from "reactstrap";

import Headroom from "headroom.js"

const NavBar = () => {
    const { loggedIn } = useContext(UserContext)
    // const tkn = localStorage.getItem("myToken")

    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
        headroom.init();
    }, [])

    if (loggedIn === null || loggedIn === "undefined") {
        return (
            <header className="header-global">
            <Navbar
                className="navbar-main navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main"
            >
                <Container>
                    <NavbarBrand className="" to="/" tag={Link}>
                        <img
                            src={Logo}
                            width="150px"
                            height=""
                            className=""
                            alt="CSIS 4495"
                        />
                    </NavbarBrand>
                    <Nav className="align-items-lg-center ml-auto" navbar>
                        <NavItem>
                            <Link className="text-white nav-link font-weight-bolder" to={"/login"}>
                                <i className="fa fa-sign-in mr-2" />
                                Log In
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="text-white nav-link font-weight-bolder" to={"/signup"}>
                                <i className="fa fa-user-circle mr-2" />
                                Sign Up
                            </Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            </header>
        )
    } else {
        return (
            <header className="header-global">
            <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
            >
                <Container>
                    <NavbarBrand className="" to="/" tag={Link}>
                        <img
                            src={Logo}
                            width="150px"
                            height=""
                            className=""
                            alt="CSIS 4495"
                        />
                    </NavbarBrand>
                    <Nav className="align-items-lg-center ml-lg-auto" navbar>
                        <NavItem>
                            {/* <NavLink className="nav-link text-white font-weight-bolder" href="/my-checklist"> */}
                            <Link className="nav-link text-white font-weight-bolder" to={"/my-checklist"}>
                                <i className="fa fa-book mr-2" /> 
                                My Checklist
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="text-white nav-link font-weight-bolder" to={"/profile"}>
                                <i className="fa fa-user-circle mr-2" />
                                {localStorage.getItem('myEmail')}
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link text-white font-weight-bolder" to={"/logout"}>
                                <i className="fa fa-sign-out mr-2" />
                                Log Out    
                            </Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
            </header>
        )
    }
}

export default NavBar
