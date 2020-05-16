import React from 'react'

const authens = {
    hasToken: Boolean,
    // logOut = () => { localStorage.removeItem("myToken")}
}

const hasToken = () => {
    if(localStorage.myToken) 
        return true
    return false
}

// const logOut = () => {
    
// }

export default authens