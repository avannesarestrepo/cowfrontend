import React from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Logo from '../assets/img/Logo.png';
import iconUser from '../assets/img/icons/User.png';
import iconEye from '../assets/img/icons/Eye.png';
import { useState } from "react";
import Axios from "axios";

function LoginForm () {
    const [shown, setShown] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const broswerHistory = createBrowserHistory();

    const switchShown = () => setShown(!shown);

    const login = async(e) => {
        e.preventDefault();

        try {
            await Axios.get(`http://localhost:8080/users/`, {
                params: {
                    user: user, 
                    password: password
                }
            }).then(
                response => {

                    if(response.data.status === 'Failed'){
                        alert(response.data.object.code + ' - ' + response.data.object.exception);
                        setUser('');
                        setPassword('');
                    }else {
                        broswerHistory.push("/dashboard");
                        window.location.reload(true);
                    }
                }
            ).catch(e => console.log(e));

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form>
                <img src={Logo} alt="Logo" className="image-logo"/>

                <label className="label-usuario">Usuario</label>
                <input 
                    type="number" 
                    name="user" 
                    id="user" 
                    className="input-usuario" 
                    onChange={e => setUser(e.target.value)}
                    value = {user}
                />
                <img src={iconUser} className="icon-usuario" alt="iconUsuario"/>
                <label className="label-password">Contraseña</label>
                <input 
                    type={shown ? 'text' : 'password'} 
                    name="password" 
                    id="password" 
                    className="input-password" 
                    onChange={e => setPassword(e.target.value)}
                    value = {password}
                    autoComplete="on"
                />
                <img src={iconEye} className="icon-password" alt="iconPassword" onClick={switchShown}/>
                
                <button className="button-iniciar" onClick={e => login(e)}>Iniciar</button>
            </form>

            <Link className="hipervinculo crearCuenta" to="/register">Crear una cuenta</Link>
        </>
    )
}

export default LoginForm;