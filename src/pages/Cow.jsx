import React from "react";
import CowList from '../components/Cow/CowList';

const Cow = () => {
    return (
        <div className="container-fluid">
            <h1 className="text text-info text-center mt-3 "><strong>Control Cow</strong></h1>
            <CowList />
        </div>
    )
}

export default Cow;