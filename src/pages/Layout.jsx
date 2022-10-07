import React from 'react';
import TopBar from '../components/Layout/TopBar';
import Menu from '../components/Layout/Menu';


const Layout = (props) => {
    return(
        <>
            <Menu/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Layout;