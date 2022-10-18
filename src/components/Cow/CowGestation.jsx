import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createBrowserHistory } from 'history';
import axios from "axios";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

const CowGestation = () => {
    const [cowGestation, setCowGestation] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const broswerHistory = createBrowserHistory();

    const fetch = async () => {
        axios.get(`http://localhost:8080/cowgestation/${id}`)
        .then((res) => {
            setCowGestation(res.data.object);
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
        setCowGestation({ ...cowGestation, [name]: value });
    };

    const save = async(e) => {
        e.preventDefault();
        
        var data = {
            idProcesoGestacionVaca: cowGestation.idProcesoGestacionVaca,
            idVaca: cowGestation.idVaca, 
            fechaCelo: cowGestation.fechaCelo,
            fechaInseminacion: cowGestation.fechaInseminacion,
            fechaParto: cowGestation.fechaParto,
            fechaSecado: cowGestation.fechaSecado
         }

         try{
            const datos = await axios.post(`http://localhost:8080/cowgestation`, data);
            console.log(datos);
            alert("Información actualizada exitosamente");
            broswerHistory.push(`/cowgestation/`+ id);
            window.location.reload(true);
         }catch(error){
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
        <>
            <div className="container-fluid">
                <div className="container my-3 p-5 bg-white">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`/cowedit/`+id}>Información vaca</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Fechas gestación</li>
                            <li className="breadcrumb-item"><Link to={`/event/`+id}>Eventos</Link></li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">IdVaca</label>
                            <input 
                                type="text" 
                                className="form-control disabled"  
                                placeholder="" 
                                name="idVaca"
                                onChange={handleInputChange}
                                defaultValue={cowGestation.idVaca} 
                                disable="true"/>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">Fecha Celo</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                placeholder="" 
                                name="fechaCelo"
                                onChange={handleInputChange}
                                defaultValue={cowGestation.fechaCelo} 
                                required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">Fecha Inseminación</label>
                            <input 
                                type="date" 
                                className="form-control"
                                placeholder="" 
                                name="fechaInseminacion"
                                onChange={handleInputChange}
                                defaultValue={cowGestation.fechaInseminacion} 
                                required />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">Fecha Secado</label>
                            <input 
                                type="date" 
                                className="form-control"
                                placeholder="" 
                                name="fechaSecado"
                                onChange={handleInputChange}
                                defaultValue={cowGestation.fechaSecado} 
                                required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="validationCustom01">Fecha Parto</label>
                            <input 
                                type="date" 
                                className="form-control"
                                placeholder=""
                                name="fechaParto" 
                                onChange={handleInputChange}
                                defaultValue={cowGestation.fechaParto} 
                                required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mt-4 text-center">
                            <button className="btn btn-info" onClick={e => save(e)}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CowGestation;