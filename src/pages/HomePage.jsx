import React from 'react'
import { useAuth } from '../contexts/authContext'


const HomePage = () => {
    const {contextData } = useAuth();
    const { logOut} = contextData;
    const {username} = JSON.parse(localStorage.getItem('auth'));
   return (
    <div>
        <h3> wecome {username }</h3>
      Logged in to the Home
        <br></br>
        <button type="submit" onClick={(e)=> logOut(e)}>LogOut</button>
    </div>
  )
}

export default HomePage
