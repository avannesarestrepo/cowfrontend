import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

const CowEdit = () => {
    const [cow, setCow] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetch = async () => {
        axios.get(`http://localhost:8080/cow/${id}`)
        .then((res) => {
            setCow(res.data.object);
        })
        .catch((e) => {
            setError(e);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    useEffect(() =>{
        fetch();
    },[])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCow({ ...cow, [name]: value });
    };
    
    if (loading) return(
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) 
    if (error)  return (
        <div className="container-fluid">
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="error">Error 500: «Hubo un error en el servidor y la solicitud no pudo ser completada» </Alert>
            </Stack>
        </div>
    )

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 ">
                        <label htmlFor="validationCustom01">Id</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="Id" 
                            value={cow.idVaca} 
                            disable="true" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Nombre Vaca</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.nombre} 
                            required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Raza</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.raza} 
                            required />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Fecha Nacimiento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.fechaNacimiento} 
                            required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Nombre Mamá</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.nombreMama} 
                            required />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Nombre Papá</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.nombrePapa} 
                            required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Fecha Vacuna Aftosa</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.fechaVacunaAftosa} 
                            required />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Fecha Vacuna Brucelosis</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cow.fechaVacunaBrucelosis} 
                            required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mt-5 text-center">
                        <button className="btn btn-info ">Guardar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CowEdit;