import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeinLeft } from '../../framerVariants';
import './Location.css';

export default function Location() {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true
	});
	return (
		<div className="location" ref={ref} id="location">
			<motion.div
				variants={fadeinLeft}
				animate={inView ? fadeinLeft.active : fadeinLeft.inactive}
				className="container location-box"
			>
				<h2 className="location-title">Location</h2>

				<div>
					<h3 className="location-title">Find us</h3>
					<p className="location-content">
						No.1, City Hall Rd.,<br />Xinyi District, Taipei City 110204,<br />Taiwan
					</p>
				</div>

				<div>
					<h3 className="location-title">Transport links</h3>
					<p className="location-content">Taipei City Hall Station</p>
				</div>
			</motion.div>
		</div>
	);
}
