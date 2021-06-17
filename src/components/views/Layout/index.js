import React from 'react';
import Heading from './Heading';
import Form from './Form';
import Footer from './Footer';

export default function index({ children }) {
	return (
		<React.Fragment>
			<Heading />
			{children}
			<Form />
			<Footer />
		</React.Fragment>
	);
}
