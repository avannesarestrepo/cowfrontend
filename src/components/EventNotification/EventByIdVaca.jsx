import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

const EventByIdVaca = () => {
    const { id } = useParams(); 
    const [idNotification, setIdNotification] = useState('');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetch = async () => {
        axios.get(`http://localhost:8080/events/${id}`)
        .then((res) => {
            console.log(res.data);
            setEvents(res.data);
        })
        .catch((e) => {
            setError(e)
        })
        .finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        fetch();
    },[])

    const columns = [
        {
            name: "idNotification",
            selector: row => row.idNotification,
            sortable: true    
        },
        {
            name: "idVaca",
            selector: row => row.idVaca,
            sortable: true
        },
        {
            name: "nombreEvento",
            selector: row => row.nombreEvento,
            sortable: true
        },
        {
            name: "fechaEvento",
            selector: row => row.fechaEvento,
            sortable: true
        },
        {
            name: "estado",
            selector: row => row.estado ? <div className="text-success">OK</div>:<div className="text-danger">NOK</div>,
            sortable: true
        }
    ];

    const data = events;

    const tableData = {
        columns, 
        data
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
                            <li className="breadcrumb-item"><Link to={`/cowgestation/`+id}>Fechas gestación</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Eventos</li>
                        </ol>
                    </nav>

                    <div className="container-fluid">
                        <div className="table-responsive">
                            <div className="card-body">
                                <DataTableExtensions {...tableData}>
                                    <DataTable
                                    columns={columns}
                                    data={events}
                                    onRowClicked = { events => {
                                        setIdNotification(events.idNotification)
                                    }}
                                    noHeader
                                    defaultSortField="idNotification"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    />
                                </DataTableExtensions>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventByIdVaca;