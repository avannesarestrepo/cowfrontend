import React, { useState, useEffect } from "react";
import axios from 'axios';

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';
import { Redirect } from "react-router-dom";

const CowList = () => {
    const [cows, setCows] = useState([]);
    const [id, setId] = useState('');
    const [redirState, setState ] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        axios.get('http://localhost:8080/cow/')
        .then((res) => {
            console.log(res.data)
            setId(res.data.idVaca);
            setCows(res.data);
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


    const columns = [
        {
            name: "Id",
            selector: "idVaca",
            sortable: true
        },
        {
            name: "Nombre",   
            selector: "nombre",
            sortable: true
        },
        {
            name: "Raza",   
            selector: "raza",
            sortable: true
        },
        {
            name: "Mamá",   
            selector: "nombreMama",
            sortable: true
        },
        {
            name: "Papá",   
            selector: "nombrePapa",
            sortable: true
        },
        {
            name: "Nacimiento",   
            selector: "fechaNacimiento",
            sortable: true
        },
        {
            name: "Partos",   
            selector: "numeroPartos",
            sortable: true
        }
        
    ];

    const data = cows;

    const tableData = {
        columns,
        data
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

    let redirecting = redirState ? (<Redirect push to={`/cowedit/${id}`}/>) : '';


    return(
        <div className="container-fluid">
            <div className="table-responsive">
                <div className="card-body">
                    <DataTableExtensions {...tableData}>
                        <DataTable
                        columns={columns}
                        data={cows}
                        onRowClicked = { cows => {
                            setState(true);
                            setId(cows.idVaca)
                        }}
                        noHeader
                        defaultSortField="idVaca"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                        />
                    </DataTableExtensions>
                    {redirecting}
                </div>
            </div>
        </div>
    )
}

export default CowList;