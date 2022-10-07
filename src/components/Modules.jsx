import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const Modulos = () => {
    const [modulos, setModulos] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        axios.get('http://localhost:8080/modules/')
        .then((res) => {
            console.log(res.data)
            setModulos(res.data);
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
            name: "Modulo",
            selector: "nombreModulo",
            sortable: true
        },
        {
            name: "acciones",   
            sortable: true,
            selector: null,
            right: true,
            cell: (d) => [
                <i 
                    key={d.title}>
                        <FontAwesomeIcon icon={faPen} className="fas fa-fw i"/>
                </i>
            ]
        }
    ];

    const data = modulos;

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
                <Alert severity="error">Error</Alert>
            </Stack>
        </div>

        /*<div className="container-fluid">
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <div className="text-center">
                    <strong>Error</strong>
                </div>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>*/
    )

    return(
        <div className="container-fluid">
            <div className="table-responsive">
                <div className="card-body">
                    <DataTableExtensions {...tableData}>
                        <DataTable
                        columns={columns}
                        data={modulos}
                        noHeader
                        defaultSortField="id"
                        defaultSortAsc={false}
                        pagination
                        highlightOnHover
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </div>
        )
}

export default Modulos;