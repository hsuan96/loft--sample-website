import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeinLeft } from '../../framerVariants';
import './Membership.css';

export default function Membership() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});
	return (
		<div className="membership" id="membership">
			<div className="container" ref={ref}>
				<motion.h2 variants={fadeinLeft} animate={inView ? fadeinLeft.active : fadeinLeft.inactive}>
					Our Memberships
				</motion.h2>
				<div className="scroll-container">
					<Card
						icon="fas fa-campground"
						title="Remote Worker"
						content="Set up camp with us to avoid the tube and escape the distractions of home."
						price="2,900"
					/>
					<Card
						icon="fas fa-pencil-ruler"
						title="Resident"
						content="A fixed desk within our open plan area - yours to leave your mug and family photo on."
						price="5,900"
					/>
					<Card
						icon="fas fa-laptop-house"
						title="Private Studio"
						content="Your own closed workspace to focus and collaborate which is ideal for small and growing team."
						price="8,900"
					/>
				</div>
			</div>
		</div>
	);
}
