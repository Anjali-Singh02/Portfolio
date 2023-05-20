import React from 'react';
import { Link } from 'react-router-dom';

const SocialLinks = ({ props }) => {
	const { link, Component } = props;
	return (
		<div className="motion-safe:hover:-translate-x-0.5 motion-safe:transition ... hover:text-golden">
			<Link to={link}>
				<Component />
			</Link>
		</div>
	);
};

export default SocialLinks;
