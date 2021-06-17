import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './Feature.css';

export default function Feature() {
	return (
		<div className="container feature" id="features">
			<InView threshold={0.3} triggerOnce={true}>
				{({ ref, inView }) => (
					<div>
						<motion.h2 ref={ref} animate={inView ? { x: 0, opacity: 1 } : { x: 150, opacity: 0 }}>
							Space Features
						</motion.h2>
						<motion.p
							animate={inView ? { x: 0, opacity: 1 } : { x: 150, opacity: 0 }}
							transition={{ delay: 0.3 }}
						>
							The space has everything you need for a productive day’s work. Here’s what everyone gets.
						</motion.p>
					</div>
				)}
			</InView>

			<InView threshold={0.2} triggerOnce={true}>
				{({ ref, inView }) => (
					<motion.div
						ref={ref}
						className="feature-logo-group"
						animate={inView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
					>
						<div className="feature-logo-item">
							<i className="fas fa-shapes feature-logo" />
							<div>THE ESSENTIALS</div>
						</div>
						<div className="feature-logo-item">
							<i className="fas fa-fire feature-logo" />
							<div>HANDY EXTRAS</div>
						</div>
						<div className="feature-logo-item">
							<i className="fab fa-ello feature-logo" />
							<div>FEELGOOD FACTORS</div>
						</div>
					</motion.div>
				)}
			</InView>

			<div className="feature-box">
				<ul className="feature-box-container">
					<li>Kitchen</li>
					<li>Breakout space</li>
					<li>Meeting room</li>
					<li>Speedy broadband</li>
					<li>Secure access</li>
				</ul>
			</div>
		</div>
	);
}
