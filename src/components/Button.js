import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children }) {
	return (
		<motion.button transition={{ duration: 0.1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
			{children}
		</motion.button>
	);
}
