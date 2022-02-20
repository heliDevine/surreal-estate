import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import '../styles/SideBar.css';
import qs from 'qs';

const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
        ...currentQueryParams,
        [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
        addQueryPrefix: true,
        encode: false,
    });
};

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <Link
                    className="sidebar-links-item"
                    to={buildQueryString('query', { city: 'Manchester' })}
                >
                    Manchester
                </Link>

                <Link
                    className="sidebar-links-item"
                    to={buildQueryString('query', { city: 'Liverpool' })}
                >
                    Liverpool
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={buildQueryString('query', { city: 'Leeds' })}
                >
                    Leeds
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={buildQueryString('query', { city: 'Sheffield' })}
                >
                    Sheffield
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={buildQueryString('sort', { price: 1 })}
                >
                    Price ascending
                </Link>
                <Link
                    className="sidebar-links-item"
                    to={buildQueryString('sort', { price: -1 })}
                >
                    Price Descending
                </Link>
            </ul>
        </div>
    );
};

export default SideBar;
