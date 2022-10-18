import React from "react";
import { Link } from "react-router-dom";
import CowList from '../components/Cow/CowList';

const Cow = () => {
    return (
        <div className="container-fluid">
            <h1 className="text text-info text-center mt-3 "><strong>Control de vacas</strong></h1>
            <Link to="/cowedit/0" className="btn btn-info float-right mr-5">Nuevo</Link>
            <CowList />
        </div>
    )
}

export default Cow;