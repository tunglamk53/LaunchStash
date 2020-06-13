import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [ user, setUser ] = useState(null)

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
            <p>First Name:</p>
              <h3>{user.username}</h3>
            <p>Email:</p>
              <h3>{user.email}</h3>
        </>)
      : <p>LOADING.......</p>
      }
    </div>
    </div>
    </>
  )
}

export default ProfilePage
