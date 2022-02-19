import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

// describe Property card

describe('PropertyCard', () => {
    const validProps = {
        title: 'test',
        type: 'test',
        bathrooms: 2,
        bedrooms: 3,
        price: 140000,
        city: 'Manchester',
        email: 'test@email.com',
    };
    it('renders correctly', () => {
        const { asFragment } = render(
            <PropertyCard
                title={validProps.title}
                type={validProps.type}
                bathrooms={validProps.bathrooms}
                bedrooms={validProps.bedrooms}
                price={validProps.price}
                city={validProps.city}
                email={validProps.email}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders correct values to the props', () => {
        const { getByText } = render(
            <PropertyCard
                title={validProps.title}
                type={validProps.type}
                bathrooms={validProps.bathrooms}
                bedrooms={validProps.bedrooms}
                price={validProps.price}
                city={validProps.city}
                email={validProps.email}
            />,
        );
        expect(getByText('test')).toHaveClass('property-title');
        expect(getByText('test')).toHaveClass('property-type');
        expect(getByText('bathrooms')).toHaveClass('property-bathrooms');
        expect(getByText('bedrooms')).toHaveClass('property-bedrooms');
        expect(getByText('price')).toHaveClass('property-price');
        expect(getByText('city')).toHaveClass('property-city');
        expect(getByText('email')).toHaveClass('property-email');
    });
});
