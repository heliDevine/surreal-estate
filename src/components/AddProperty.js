import { React, useState } from 'react';
import '../styles/AddProperty.css';

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
    };
    const [fields, setFields] = useState(initialState.fields);

    const handleAddProperty = event => {
        event.preventDefault();
        console.log(fields);
    };
    const handleFieldChange = event => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    };

    return (
        <div className="AddProperty">
            Add Property Page
            <form onSubmit={handleAddProperty}>
                <label htmlFor="title">
                    Title
                    <input
                        id="title"
                        name="title"
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
                        type="number"
                        value={fields.price}
                        onChange={handleFieldChange}
                    />
                </label>
                <label htmlFor="email">
                    Price
                    <input
                        id="email"
                        name="email"
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
