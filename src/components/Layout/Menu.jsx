import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow , faChevronCircleRight, faTachometerAlt, faUsers, faSitemap, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faCow}/>
                    <span>Cow</span>
                </div>
            </div> 

            {/* Menu options Dashboard*/}
            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                    <FontAwesomeIcon icon={faTachometerAlt} className="fas fa-fw i"/>
                    <span>Tablero</span>
                </Link>
            </li>

            {/* Menu options Operation*/}
            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Operación
            </div>

            {/* Menu options Assignments */}
            <li className="nav-item">
                <Link to="/cow" className="nav-link">
                    <FontAwesomeIcon icon={faSitemap} className="fas fa-fw i" />
                    <FontAwesomeIcon icon={faCow} className="fas fa-fw i" />
                    <span>Vacas</span>
                </Link>
            </li>

            {/* Menu options Setting*/}
            <hr className="sidebar-divider"/>
 
            <div className="sidebar-heading">
                Parametros
            </div>

            <li className="nav-item">
                <Link to="/users" className="nav-link">
                    <FontAwesomeIcon icon={faUsers} className="fas fa-fw i" />
                    <span>Usuarios</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="fas fa-fw i" />
                    <span>Cerrar Sesión</span>
                </Link>
            </li>
            
            {/*Menu hidden*/}
            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle">
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </button>
            </div>
        </ul>
    )
}

export default Menu;