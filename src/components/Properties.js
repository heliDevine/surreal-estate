import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import '../styles/Properties.css';
import SideBar from './SideBar';

const Properties = () => {
    const initialState = {
        alert: {
            message: '',
            isSuccess: false,
        },
    };
    const [properties, setProperties] = useState([]);
    const [alert, setAlert] = useState(initialState.alert);
    const { search } = useLocation();

    useEffect(() => {
        setAlert({ message: '', isSuccess: false });
        return axios
            .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
            .then(response => {
                setProperties(response.data);

                setAlert({ message: 'Properties found!', isSuccess: true });
            })
            .catch(err => {
                console.log(err);
                setAlert({
                    message: 'server error, try again soon',
                    isSuccess: false,
                });
            });
    }, [search]);
    return (
        <div>
            Properties Page
            <SideBar />
            <Alert message={alert.message} success={alert.isSuccess} />
            {properties.map(property => (
                <PropertyCard
                    key={property._id}
                    title={property.title}
                    type={property.type}
                    bathrooms={property.bathrooms}
                    bedrooms={property.bedrooms}
                    price={property.price}
                    city={property.city}
                    email={property.email}
                />
            ))}
        </div>
    );
};
export default Properties;
