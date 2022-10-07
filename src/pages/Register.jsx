import React from "react";
import '../assets/css/Register.css';
import ImageRegister from '../assets/img/imagen-register.svg';
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const Register = () =>{
    return(
        <>
            <div className="container-register">
                <RegisterForm />

                <div className="image-register">
                    <img src={ImageRegister} alt="ImageLogin" className="image-register"/>
                </div>

                <Link to="/" className="hipervinculo-inicio">Iniciar Sesión</Link>
            </div>
        </>
    )
} 

export default Register;