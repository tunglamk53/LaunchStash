import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext'

const LogOutPage = () => {
    const { setLoggedIn } = useContext(UserContext)

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
