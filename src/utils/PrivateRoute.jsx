import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoute = () => {

    let isAuth = false;
    if(localStorage.getItem('auth') != null) {
        const {username} = JSON.parse(localStorage.getItem('auth'));
        isAuth = (username!= null)?true:false;
    }
    

    console.log(isAuth);
    return isAuth?<Outlet />: <Navigate to="/login" />
}

export default PrivateRoute