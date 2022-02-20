import { React, useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import '../styles/Properties.css';

const Properties = () => {
    const initialState = {
        alert: {
            message: '',
            isSuccess: false,
        },
    };
    const [properties, setProperties] = useState([]);
    const [alert, setAlert] = useState(initialState.alert);

    useEffect(() => {
        setAlert({ message: '', isSuccess: false });
        return axios
            .get('http://localhost:4000/api/v1/PropertyListing')
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
    }, []);
    return (
        <div>
            Properties Page
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
