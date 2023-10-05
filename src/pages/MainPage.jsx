import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { useDispatch } from 'react-redux';

const MainPage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    console.log(isAuth)

    return isAuth ? (
            <div>
                <h1>Welcome</h1>
                <button 
                    onClick={()=> dispatch(removeUser())}
                >LogOut from {email}</button>
            </div>
        ) : (
        <Navigate to="/login"/>
    );
};

export default MainPage;