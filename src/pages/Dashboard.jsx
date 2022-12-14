import React from 'react';
import EventNotification from '../components/EventNotification/EventNotification';

const Inicio = () => {
    const fecha = new Date().toLocaleDateString();

    return(
        <div className="container-fluid">
            <h6 className='text text-info text-right mt-3'><strong>Fecha: {fecha}</strong></h6>
            <h1 className="text text-info text-center mt-3 "><strong>Notificaciones</strong></h1>

            <EventNotification />
        </div>
    )
}

export default Inicio;