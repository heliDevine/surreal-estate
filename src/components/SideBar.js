import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <Link
                    className="sidebar-links-item"
                    to={`/?query={"city": "Manchester"}`}
                >
                    Manchester
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={`/?query={"city": "Liverpool"}`}
                >
                    Liverpool
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={`/?query={"city": "Leeds"}`}
                >
                    Leeds
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={`/?query={"city": "Sheffield"}`}
                >
                    Sheffield
                </Link>
            </ul>
        </div>
    );
};

export default SideBar;
