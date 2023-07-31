import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { base_uri } from './../constants/constants'
import jwtDecode from 'jwt-decode';


const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const loginUser =async (e, username, password) => {
        const loginUri = base_uri + "/api/token/"
        e.preventDefault();
        try{
            const response = await axios.post(loginUri, {username: username, password: password})
        // console.log(response.data.access, response.data.refresh);
            console.log(response.status);
            if(response.status == 200) {
                navigate("/home")
                setAuthToken(response.data.access);
                setRefreshToken(response.data.refresh);
                decode(response.data.access);
                
            } else {
                alert("something went wrong")
            }
        } catch(e) {
            console.log(e);
        }
    }
    const decode = (token) => {
        console.log(token);
        const { username } = jwtDecode(token);
        setUser(username);
        
    }

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("auth");
        navigate("/login");
    }
    useEffect(()=> {
        const authItem = (localStorage.getItem("auth") != null)?JSON.parse(localStorage.getItem('auth')):null;
        localStorage.setItem('auth', JSON.stringify({username: user, refresh: refreshToken}))
   
    }, [authToken, user, refreshToken])
    const contextData = {
        loginUser: loginUser,
        logOut: logOut
    }

    return (
        <AuthContext.Provider value={{contextData}}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)


export { useAuth, AuthProvider}


// , ()=> {
//     const {access, refresh } = JSON.parse(localStorage.getItem('tokens'));
//     return (access!= "")?{isAuth: true, access, refresh}:{isAuth:false, ...initialValue};
// }