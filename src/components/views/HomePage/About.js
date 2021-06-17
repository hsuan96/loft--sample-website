import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import Button from '../../Button';
import { fadeinBottom } from '../../framerVariants';
import './About.css';

import mainImg from '../../../img/loft-4.jpeg';
import img1 from '../../../img/loft-1.jpeg';
import img2 from '../../../img/loft-2.jpeg';
import img3 from '../../../img/loft-3.jpeg';

export default function About() {
	return (
		<div className="about" id="about">
			<div className="about-top">
				<div className="about-top-img">
					<img src={mainImg} alt="office space" />
				</div>
				<motion.div
					initial={{ x: -60, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="about-top-content"
				>
					<div className="about-top-content-container">
						<i className="fas fa-leaf" />
						<h1>A beautifully modern workspace in Taipei</h1>
						<p>
							The Loft has arrived to Queen's Park. We're perfect for startups, small to medium sized
							businesses and solo workers.
						</p>
						<HashLink smooth to="/#features">
							<Button>discover the loft</Button>
						</HashLink>
						<div className="about-address">
							<i className="fas fa-map-marker-alt" />
							<span>No.1, City Hall Rd., Xinyi District, Taipei City 110204, Taiwan</span>
						</div>
					</div>
				</motion.div>
			</div>
			<div className="about-bottom container">
				<InView threshold={0.25} triggerOnce={true}>
					{({ inView, ref }) => (
						<motion.div
							className="about-bottom-img"
							ref={ref}
							variants={fadeinBottom}
							animate={inView ? fadeinBottom.active : fadeinBottom.inactive}
						>
							<img src={img1} className="about-bottom-img-one" alt="office space" />
							<img src={img2} className="about-bottom-img-two" alt="office space" />
							<img src={img3} className="about-bottom-img-three" alt="office space" />
						</motion.div>
					)}
				</InView>
				<div className="about-bottom-content">
					<InView threshold={0.25} triggerOnce={true}>
						{({ inView, ref }) => (
							<motion.div
								ref={ref}
								variants={fadeinBottom}
								animate={inView ? fadeinBottom.active : fadeinBottom.inactive}
							>
								<h2>Work close to home, but without the distractions of home.</h2>
								<p>
									The Loft offers a variety of individual and team memberships, from flexible pass
									bundles through to private studios.
								</p>
								<p>
									We’ve taken important measures to keep our members safe during Covid-19, including
									seat-to-seat distancing and extra cleaning
								</p>
								<p>
									Need to travel into Central London? We’re a stone’s throw from Queen’s Park station,
									where the Bakerloo line gets you to Oxford Circus in just 15 minutes.
								</p>
								<HashLink smooth to="/#membership">
									<Button>see membership</Button>
								</HashLink>
							</motion.div>
						)}
					</InView>
				</div>
			</div>
		</div>
	);
}
