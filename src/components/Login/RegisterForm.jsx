import React, { useState } from "react";
import Logo from '../../assets/img/Logo.png';
import iconEye from '../../assets/img/icons/Eye.png';
import Axios from 'axios';

const RegisterForm = () => {
    const initialUserState = {
        id: null, 
        tipoDocumento: '',
        numeroDocumento: '',
        nombreCompleto: '',
        correoElectronico: '',
        contrasena: '',
        estado: false
    }

    const [shown, setShown] = useState(false);
    const [user, setUser] = useState(initialUserState);

    const switchShown = () => setShown(!shown);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = async(e) => {
        e.preventDefault();
        var data = {
            tipoDocumento: user.tipoDocumento,
            numeroDocumento: user.numeroDocumento,
            nombreCompleto: user.nombreCompleto,
            correoElectronico: user.correoElectronico,
            contrasena: user.contrasena,
            estado: user.estado
        }

        try {
            const datos = await Axios.post(`http://localhost:8080/users`, data);
            if(datos.data.status === 'Failed'){
                alert(datos.data.object.code + ' - ' + datos.data.object.exception)
            }else {
                setUser(initialUserState);
                alert("Información Registrada Exitosamente");
            }

            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form>
                <img src={Logo} alt="Logo" className="image-logo-register"/>
                
                <div className="form-class">
                    <label>Número Documento</label><br/>
                    <select name="tipoDocumento" id="tipoDocumento" onChange={handleInputChange} value={user.tipoDocumento} required>
                        <option></option>
                        <option value="CC">CC</option>
                        <option value="CE">CE</option>
                        <option value="NIT">NIT</option>
                        <option value="PS">PS</option>
                    </select>
                    <input 
                        type="number" 
                        id="numeroDocumento" 
                        name="numeroDocumento" 
                        className="numberDocument" 
                        onChange={handleInputChange} 
                        value= {user.numeroDocumento}
                        required
                    /><br/>

                    <label>Nombre Completo</label><br/>
                    <input 
                        type="text" 
                        id="nombreCompleto" 
                        name="nombreCompleto" 
                        onChange={handleInputChange} 
                        value= {user.nombreCompleto}
                        required
                    /><br/>
                    
                    <label>Correo Electrónico</label><br/>
                    <input 
                        type="text" 
                        id="correoElectronico" 
                        name="correoElectronico" 
                        onChange={handleInputChange} 
                        value = {user.correoElectronico}
                        required
                    /><br/>
                    
                    <label>Contraseña</label><br/>
                    <input 
                        type={shown ? 'text' : 'password'} 
                        id="contrasena" 
                        name="contrasena" 
                        onChange={handleInputChange} 
                        value = {user.contrasena}
                        required
                    /><br/>

                    <img src={iconEye} className="icon-password-register" alt="iconPassword" onClick={switchShown}/>
                </div>

                <button className="button-register" onClick={e => saveUser(e)}>Registrarse</button>

            </form>
        </>
    )
}

export default RegisterForm;
