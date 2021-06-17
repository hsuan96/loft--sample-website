import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import './Heading.css';

export default function Heading() {
	const [ isClick, setIsClick ] = useState(false);
	const hoverEffect = { scale: 1.2, x: 10 };
	const sectionIds = [ 'about', 'membership', 'features', 'location' ];

	return (
		<div>
			<div className="heading">
				<div className="logo">The Loft</div>
				<div className="icon">
					<i className={isClick ? 'fas fa-times' : 'fas fa-bars'} onClick={() => setIsClick(!isClick)} />
				</div>
			</div>
			<motion.div className="nav" layout data-isclick={isClick} transition={{ duration: 0.3, type: 'spring' }}>
				{sectionIds.map((id) => (
					<HashLink smooth to={`/#${id}`}>
						<motion.div className="nav-item" whileHover={hoverEffect} onClick={() => setIsClick(false)}>
							{id}
						</motion.div>
					</HashLink>
				))}
				{/* <motion.div className="nav-item" whileHover={hoverEffect}>
					about
				</motion.div>
				<motion.div className="nav-item" whileHover={hoverEffect}>
					membership
				</motion.div>
				<motion.div className="nav-item" whileHover={hoverEffect}>
					features
				</motion.div>
				<motion.div className="nav-item" whileHover={hoverEffect}>
					gallery
				</motion.div>
				<motion.div className="nav-item" whileHover={hoverEffect}>
					lacation
				</motion.div> */}
			</motion.div>
		</div>
	);
}
