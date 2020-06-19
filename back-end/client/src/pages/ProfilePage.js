import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext'
import Loading from './components/Loading'
import pic10 from "../assets/pic10.png";

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
  }, [setUser, setLoggedIn])

  return (
    <>
    <div className="create-checklist-wrapper">
        <h1 className='text-lg-center text-white text-uppercase shadow-lg p-3 rounded'>My Profile</h1>
    </div>

    <div className="create-checklist-wrapper mt-5">
    <div className="auth-inner-profile">
    <div className="text-center">
        <img src={pic10} alt='solutions' />
    </div>
      {user ?
        (<>
            <p className='text-secondary text-uppercase'>First Name:</p>
              <h3 className='text-danger'>{user.username}</h3>
            <p className='text-secondary text-uppercase'>Email:</p>
              <h3 className='text-danger'>{user.email}</h3>
        </>)
        : <Loading />
      }
    </div>
    </div>
    </>
  )
}

export default ProfilePage
