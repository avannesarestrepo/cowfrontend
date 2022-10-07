import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faChevronCircleRight, faTachometerAlt, faUsers, faSitemap, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faDesktop}/>
                </div>
                <div className="sidebar-brand-text mx-3">Cow</div>
            </div> 

            {/* Menu options Dashboard*/}
            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                    <FontAwesomeIcon icon={faTachometerAlt} className="fas fa-fw i"/>
                    <span>Dashboard</span>
                </Link>
            </li>

            {/* Menu options Operation*/}
            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Operation
            </div>

            {/* Menu options Assignments */}
            <li className="nav-item">
                <Link to="/cow" className="nav-link">
                    <FontAwesomeIcon icon={faSitemap} className="fas fa-fw i" />
                    <span>Cow</span>
                </Link>
            </li>

            {/* Menu options Setting*/}
            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Parameters
            </div>

            <li className="nav-item">
                <Link to="/users" className="nav-link">
                    <FontAwesomeIcon icon={faUsers} className="fas fa-fw i" />
                    <span>Users</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="fas fa-fw i" />
                    <span>Log out</span>
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