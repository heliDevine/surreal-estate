import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
	it('renders surreal estate title correctly', () => {
		render(<App />);
		const linkElement = screen.getByText(/surreal estate/i);
		expect(linkElement).toBeInTheDocument();
	});
});
