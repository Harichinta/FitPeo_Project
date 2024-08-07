import React, { useContext } from 'react';
import Searchbar from './ComponentsModule/Searchbar/Searchbar';
import { Outlet } from 'react-router-dom';
import Sidenav from './ComponentsModule/Sidenav/Sidenav';
import './App.css'
import { DashboardContext, DcontextProvider } from './Contextapi/DashboardContext';
function Layout() {
    const { state } = useContext(DashboardContext);
    return (
        <div className="mainLayout">
            <div className="d-flex min-vh-100 childLayout mx-auto">
                {state ? (
                    <div className='sidnavcntr'><Sidenav /></div>
                ) : null}

                <div className='sidnavcntr2 d-none d-md-block'><Sidenav /></div>
                <div className="searchbarsec">
                    <div style={{ position: "sticky", top: "0", zIndex: "1000", color: "#ffffff" }}><Searchbar /></div>
                    <main className="flex-grow-1">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
