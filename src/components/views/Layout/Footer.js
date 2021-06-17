import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<div className="footer">
			<div className="container footer-container">
				<div className="footer-section">
					<h3 className="footer-title"> INTERESTED?</h3>
					<a href="/" className="footer-link">
						Book a Tour
					</a>
					<a href="/" className="footer-link">
						Book a Meeting Room
					</a>
					<a href="/" className="footer-link">
						Enquire about Space
					</a>
				</div>
				<div className="footer-section">
					<h3 className="footer-title">FIND US</h3>
					<p>
						No.1, City Hall Rd.,<br /> Xinyi District, Taipei City 110204, Taiwan
					</p>
				</div>
				<div className="footer-section">
					<h3 className="footer-title">CONTACT US</h3>
					<a href="/" className="footer-link">
						Email Us
					</a>
				</div>
			</div>
			<div className="policy-section">
				<a href="/" className="policy-link">
					Privacy Policy
				</a>
				<p className="policy-reserved">The Loft Studios 2021 • All Right Reserve</p>
			</div>
		</div>
	);
}
