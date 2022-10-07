import React from 'react';
import '../../assets/css/EventNotification.css';

const EventNotification = () => {
    //const [event, setEvent] = useState([]);

    
    return (
        <>
        <div className='container-fluid mt-5'>
            <div className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <h3>Vaca 1</h3>
                        <h1>VACUNA AFTOSA</h1>
                    </div>
                    <div className='flip-card-back'>
                        <button className='btn btn-danger mt-5'>Finalizado</button>
                    </div>
                </div>
            </div>
        </div>

        
        </>
    )
}

export default EventNotification;