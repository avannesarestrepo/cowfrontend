import React from "react";
import '../assets/css/Login.css';
import ImageLogin from '../assets/img/imagen-login.svg';
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
    return (
        <>
            <div className="container-login">
                <LoginForm />
                
                <div className="image-login">
                    <img src={ImageLogin} alt="ImageLogin" className="image-login"/>
                </div>
            </div>
        </>
    )
} 

export default Login;