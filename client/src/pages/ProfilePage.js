import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext'
import { Redirect } from 'react-router-dom';

const ProfilePage = () => {
  const [ user, setUser ] = useState(null)
    const { setLoggedIn } = useContext(UserContext)

  useEffect(() => {
    const fetchUser = async() => {
        const result = await fetch(
            `/user/profile/${localStorage.getItem('myEmail')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token-backend': localStorage.getItem('myToken'),
                    'email-backend': localStorage.getItem('myEmail')
                }
            });
        const body = await result.json()
        setUser(body)

        if(body.message === "Invalid Token") {
            localStorage.removeItem("myToken")
            setLoggedIn(localStorage.getItem("myToken"))
        }
        console.log(body);
    }
    fetchUser();
  }, [setUser])

  return (
    <>
    <div className="auth-wrapper">
    <div className="auth-inner">
      {user ?
        (<>
            <p className='text-secondary text-uppercase'>First Name:</p>
              <h3 className='text-danger'>{user.username}</h3>
            <p className='text-secondary text-uppercase'>Email:</p>
              <h3 className='text-danger'>{user.email}</h3>
        </>)
      : <p className='text-secondary text-uppercase text-center'>LOADING.......</p>
      }
    </div>
    </div>
    </>
  )
}

export default ProfilePage
