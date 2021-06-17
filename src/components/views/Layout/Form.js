import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Form.css';

export default function Form() {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ policyCheck, setPolicyCheck ] = useState(false);
	const [ newsCheck, setNewsCheck ] = useState(false);

	const onFormSubmit = (e) => {
		e.preventDefault();
		setFirstName('');
		setLastName('');
		setEmail('');
		setPolicyCheck(false);
		setNewsCheck(false);
	};

	return (
		<div className="form">
			<div className="form-container">
				<h2>Stay tuned</h2>
				<p>
					Excited about coworking venues and workplace trends? Us too. When we have news, insights or ideas
					worth talking about, we share them in occasional emails. Sign up to join our list.
				</p>
				<form onSubmit={onFormSubmit}>
					<div className="form-input-group">
						<input
							type="text"
							placeholder="First Name"
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
						<input
							type="text"
							placeholder="Last Name"
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						/>
						<input
							type="text"
							placeholder="Email Address"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<p className="form-checkbox">
						<input type="checkbox" id="cbox1" />
						<label
							htmlFor="cbax1"
							defaultChecked={policyCheck}
							onChange={(e) => setPolicyCheck(!policyCheck)}
						>
							I agree to the Privacy Policy
						</label>
					</p>
					<p className="form-checkbox">
						<input type="checkbox" id="cbox2" />
						<label htmlFor="cbox2" defaultChecked={newsCheck} onChange={(e) => setNewsCheck(!newsCheck)}>
							I would like to receive news from The Loft and its operating group
						</label>
					</p>
					<motion.input
						transition={{ duration: 0.1 }}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		</div>
	);
}
