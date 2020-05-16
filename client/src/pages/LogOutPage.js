import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';

const LogOutPage = ({setLoggedIn}) => {

    useEffect(() => {
        localStorage.removeItem("myToken")
        localStorage.removeItem("myEmail")
        setLoggedIn(localStorage.getItem("myToken"))
    }, [setLoggedIn])

    return (
        <Redirect to="/" push={true}/>
    )
}

export default LogOutPage