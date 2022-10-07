import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons'

const BarraSuperior = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <button id="sidebarToggleTop" className="btn btn-info d-md-none rounded-circle mr-3">
                    <FontAwesomeIcon icon={faBars}/>
                </button>

                <ul className="navbar-nav ml-auto">  
                    {/* Info Alertas */}    
                    <li className="nav-item dropdown no-arrow mx-1">
                        <Link className="nav-link dropdown-toggle" to="" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="badge badge-danger badge-counter">3+</span>
                        </Link>
                    </li>

                    <div className="topbar-divider d-none d-sm-block"></div>

                    {/* Info Usuario */}
                    <li className="nav-item dropdown no-arrow">
                        <Link to="/profile" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                            <img className="img-profile rounded-circle" src="https://randomuser.me/api/portraits/women/1.jpg" alt="icon"/>
                        </Link>
                    </li>
                </ul>
            </nav>
	    </React.Fragment>
    )
}

export default BarraSuperior;