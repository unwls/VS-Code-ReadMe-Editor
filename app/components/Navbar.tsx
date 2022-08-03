import React from "react";
import useAppStore from "../stores/useAppStore";

const DownloadIcon: React.FC = () => {
    return (
        <span className="mx-2 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
        </span>
    );
};

const StackIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    );
};

const Navbar: React.FC = () => {
    const toggleComponentDrawerViewStatus = useAppStore((state) => state.toggleComponentDrawerViewStatus);
    
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid d-flex justify-content-between">
                <button type="button" className="btn btn-link" onClick={toggleComponentDrawerViewStatus} ><StackIcon /></button>
                <button type="button" className="btn btn-primary d-flex align-items-center "><DownloadIcon /> Download </button>
            </div>
        </nav>
    );
};

export default Navbar;
