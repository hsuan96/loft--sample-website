import React from 'react';
import Button from '../../Button';
import './Card.css';
import { motion } from 'framer-motion';

export default function Card({ icon, title, content, price }) {
	return (
		<motion.div whileHover={{ y: -10 }} className="card">
			<i className={`${icon} card-icon`} />
			<h3>{title}</h3>
			<p className="card-describe">{content}</p>
			<div className="card-from">from</div>
			<div className="card-price">{price}</div>
			<div className="card-unit">per desk/month</div>
			<Button className="card-btn">sign up now</Button>
		</motion.div>
	);
}
