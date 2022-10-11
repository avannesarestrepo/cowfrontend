import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/css/EventNotification.css';
import Alert from '@material-ui/core/Alert';
import Stack from '@material-ui/core/Stack';

const EventNotification = () => {
    const [event, setEvent] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetch = async () => {
        axios.get('http://localhost:8080/events/')
        .then((res) => {
            setEvent(res.data);
        })
        .catch((e) => {
            setError(e);
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    const updateEvent = (e) => {
        axios.post('http://localhost:8080/events/', {
            idNotification: e.idNotification,
            idVaca: e.idVaca,
            nombreEvento: e.nombreEvento,
            fechaEvento: e.fechaEvento,
            estado: true
        })
        .then(response => {
            window.location.reload()
        }).catch(e => {
            setError(e);
        })
    }

    useEffect(() =>{
        fetch();
    },[]);

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


    return (
        <div className='container-fluid mt-5'>
            <div className="row">
                {
                    event.map(event => 
                        event.estado === false ?
                            <div className='col-sm-2 mt-5'>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <h3>{event.idVaca}</h3>
                                            <h3>{event.nombreEvento}</h3>
                                            <h3>{event.fechaEvento}</h3>
                                        </div>
                                        <div className='flip-card-back'>
                                            <button onClick={e => updateEvent(event)} className='btn btn-warning mt-5'>Finalizar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        : 
                            <div className='col-sm-2 mt-5'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front-true'>
                                        <h3><strong>{event.idVaca}</strong></h3>
                                        <h3><strong>{event.nombreEvento}</strong></h3>
                                        <h3><strong>{event.fechaEvento}</strong></h3>
                                    </div>
                                </div>
                            </div>    
                    )
                }
            </div>
        </div>
    )
}

export default EventNotification;