// this component will show properties list
import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = props => {
    const { title, type, bathrooms, bedrooms, price, city, email } = props;
    return (
        <div className="property-details">
            Property details
            <div className="property-title">title: {title}</div>
            <div className="property-type">type: {type}</div>
            <div className="property-bathrooms">bathrooms: {bathrooms}</div>
            <div className="property-bedrooms">bedrooms: {bedrooms}</div>
            <div className="property-price">price: {price}</div>
            <div className="property-city">city: {city}</div>
            <div className="property-email">city: {email}</div>
        </div>
    );
};

PropertyCard.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bathrooms: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default PropertyCard;
