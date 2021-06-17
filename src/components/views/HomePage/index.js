import React from 'react';
import About from './About';
import Membership from './Membership';
import Feature from './Feature';
import Location from './Location';

export default function index() {
	return (
		<React.Fragment>
			<About />
			<Membership />
			<Feature />
			<Location />
		</React.Fragment>
	);
}
