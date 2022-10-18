import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createBrowserHistory } from 'history';
import axios from "axios";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';
import { collapseClasses } from "@material-ui/core";

const CowEdit = () => {
    const initialUserState = {
        idVaca: null, 
        nombre: '',
        raza: '',
        fechaNacimiento: '',
        nombreMama: '',
        nombrePapa: '',
        fechaVacunaAftosa: '',
        fechaVacunaBrucelosis: ''
    }

    const [cow, setCow] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const broswerHistory = createBrowserHistory();

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

    const saveCow = async(e) => {
        e.preventDefault();
        setCow(initialUserState);
        
        var data = {
           idVaca: null,
           nombre: cow.nombre,
           raza: cow.raza,
           fechaNacimiento: cow.fechaNacimiento,
           nombreMama: cow.nombreMama,
           nombrePapa: cow.nombrePapa 
        }

        try {
            if(id !== null){
                data.idVaca = id;
                data.fechaVacunaAftosa = cow.fechaVacunaAftosa;
                data.fechaVacunaBrucelosis = cow.fechaVacunaBrucelosis;
            }  
            
            console.log(data);

            const datos = await axios.post(`http://localhost:8080/cow`, data);
            if(datos.data.status === 'failed'){
                alert(datos.data.object.code + ' - ' + datos.data.object.exceptio);
            }else {
                alert("Información Registrada Exitosamente");
                console.log(datos.data);
                broswerHistory.push(`/cowedit/`+ datos.data.object.idVaca);
                window.location.reload(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCow = async(e) => {
        try{
            let option = window.confirm("Desea eliminar el registro");
            if(option){
                await axios.delete(`http://localhost:8080/cow/`+id);
                alert("Registro eliminado correctamente");
                broswerHistory.push(`/cow/`);
                window.location.reload(true);
            }
        }catch (error){
            console.log(error);
        }
    }
    
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
        <div className="container-fluid">
            <div className="container my-3 p-5 bg-white">
                {
                    id != 0 ? 
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Información vaca</li>
                            <li className="breadcrumb-item"><Link to={`/cowgestation/`+id}>Fechas gestación</Link></li>
                        </ol>
                    </nav>
                    :
                    ''
                }

                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Nombre vaca</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombre" 
                            name="nombre"
                            onChange={handleInputChange}
                            defaultValue={cow.nombre} 
                            required />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Raza</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="raza" 
                            name="raza"
                            onChange={handleInputChange}
                            defaultValue={cow.raza} 
                            required />
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Fecha nacimiento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="fechaNacimiento" 
                            name="fechaNacimiento"
                            onChange={handleInputChange}
                            defaultValue={cow.fechaNacimiento} 
                            required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Mamá</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombreMama" 
                            name="nombreMama"
                            onChange={handleInputChange}
                            defaultValue={cow.nombreMama} 
                            required />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Papá</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombrePapa" 
                            name="nombrePapa"
                            onChange={handleInputChange}
                            defaultValue={cow.nombrePapa} 
                            required />
                    </div>
                </div>

                {
                    id == 0 ?
                    ''
                    :
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">Vacuna Aftosa</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="fechaVacunaAftosa" 
                                name="fechaVacunaAftosa"
                                onChange={handleInputChange}
                                defaultValue={cow.fechaVacunaAftosa} 
                                required />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">Vacuna Brucelosis</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="fechaVacunaBrucelosis" 
                                name="fechaVacunaBrucelosis"
                                onChange={handleInputChange}
                                defaultValue={cow.fechaVacunaBrucelosis} 
                                required />
                        </div>
                    </div>
                }
                
                <div className="row">
                    <div className="col-sm-5 mt-4 text-center"/>
                    <div className="col-sm-1 mt-4 text-center">
                        <button className="btn btn-info" onClick={e => saveCow(e)}>Guardar</button>
                    </div>
                    <div className="col-sm-1 mt-4 text-center">
                        <button className="btn btn-danger" onClick={e => deleteCow(e)}>Eliminar</button>
                    </div>
                    <div className="col-sm-5 mt-4 text-center"/>
                </div>
            </div>
        </div>
    )
}

export default CowEdit;