import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

const CowGestation = () => {
    const [cowGestation, setCowGestation] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetch = async () => {
        console.log(id);
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
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">IdVaca</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="Id" 
                            value={cowGestation.idVaca} 
                            disable="true" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Fecha Celo</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="" 
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
                            id="validationCustom01" 
                            placeholder="" 
                            onChange={handleInputChange}
                            defaultValue={cowGestation.fechaInseminacion} 
                            required />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="validationCustom01">Fecha Secado</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="validationCustom01" 
                            placeholder="FullName" 
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
                            id="validationCustom01" 
                            placeholder="FullName" 
                            onChange={handleInputChange}
                            defaultValue={cowGestation.fechaParto} 
                            required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 mt-4 text-center">
                        <button className="btn btn-info">Save</button>
                        <Link to={"/cowedit/"+ cowGestation.idVaca} className="btn btn-info ml-2">Volver</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CowGestation;