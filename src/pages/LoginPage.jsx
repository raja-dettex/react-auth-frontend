import React, {useState} from 'react'
import { base_uri } from './../constants/constants'
import { useAuth } from '../contexts/authContext'

// const login_uri = base_uri + "/api/token/"

const LoginPage = () => {


    const {contextData } = useAuth();
    const { loginUser} = contextData;
   
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = (e, fieldType) => {
        e.preventDefault();
        fieldType == 'username'?setUsername(e.target.value):setPassword(e.target.value)
    }
    

  return (
    <div>
        <form>
            <input type='text' placeholder='username' onChange={(e)=> handleChange(e,'username')} value={username}/>
            <input type='text' placeholder='password' onChange={(e)=> handleChange(e,'password')} value={password}/>
            <button type='submit' onClick={(e)=> loginUser(e, username, password)}>login</button>
        </form>
    </div>
  )
}

export default LoginPage
