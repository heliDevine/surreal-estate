import axios from 'axios';
import { React, useState } from 'react';
import '../styles/AddProperty.css';
import Alert from './Alert';

const AddProperty = () => {
    const initialState = {
        fields: {
            title: '',
            city: 'Manchester',
            type: '',
            bedrooms: '',
            bathrooms: '',
            price: '',
            email: '',
        },
        alert: {
            message: '',
            isSuccess: false,
        },
    };
    const [fields, setFields] = useState(initialState.fields);
    const [alert, setAlert] = useState(initialState.alert);

    const handleAddProperty = event => {
        event.preventDefault();
        setAlert({ message: '', isSuccess: false });

        axios
            .post('http://localhost:4000/api/v1/PropertyListing', {
                fields,
            })
            .then(() =>
                setAlert({ message: 'Property Added', isSuccess: true }),
            )

            // (res => {
            //     console.log(res);
            //     console.log(res.fields);
            //     console.log(fields);
            // })
            .catch(() =>
                setAlert({
                    message: 'Server error, please try again later',
                    isSuccess: false,
                }),
            );
        // (err => {
        //     console.log(err);
        // });
    };
    const handleFieldChange = event => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    };

    return (
        <div className="properties">
            <Alert message={alert.message} success={alert.isSuccess} />
            Add Property Page
            <form className="properties-grid" onSubmit={handleAddProperty}>
                <label htmlFor="title">
                    Title
                    <input
                        id="title"
                        name="title"
                        placeholder="name of the property"
                        type="text"
                        value={fields.title}
                        onChange={handleFieldChange}
                    />
                </label>
                <label htmlFor="city">
                    City
                    <select
                        id="city"
                        name="city"
                        value={fields.city}
                        onChange={handleFieldChange}
                    >
                        <option value="Manchester">Manchester</option>
                        <option value="Leeds">Leeds</option>
                        <option value="Sheffield">Sheffield</option>
                        <option value="Liverpool">Liverpool</option>
                    </select>
                </label>
                <label htmlFor="bedrooms">
                    Bedrooms
                    <input
                        id="bedrooms"
                        name="bedrooms"
                        type="number"
                        value={fields.bedrooms}
                        onChange={handleFieldChange}
                    />
                </label>
                <label htmlFor="bathrooms">
                    Bathrooms
                    <input
                        id="bathrooms"
                        name="bathrooms"
                        placeholder="bathrooms"
                        type="number"
                        value={fields.bathrooms}
                        onChange={handleFieldChange}
                    />
                </label>
                <label htmlFor="price">
                    Price
                    <input
                        id="price"
                        name="price"
                        placeholder="price"
                        type="number"
                        value={fields.price}
                        onChange={handleFieldChange}
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        name="email"
                        placeholder="email"
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </label>
                <label htmlFor="type">
                    Type
                    <select
                        id="type"
                        name="type"
                        value={fields.type}
                        onChange={handleFieldChange}
                    >
                        <option value="Flat">Flat</option>
                        <option value="Detached">Detached</option>
                        <option value="Semi-Detached">Semi-Detached</option>
                        <option value="Terraced">Terraced</option>
                        <option value="End of Terrace">End of Terrace</option>
                        <option value="Cottage">Cottage</option>
                        <option value="Bungalow">Bungalow</option>
                    </select>
                </label>

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddProperty;
