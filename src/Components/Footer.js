import React from 'react';

const Footer = ({ open }) => {
	return (
		<div className={`  ${!open && 'flex flex-col py-2'}`}>
			<div className="flex">
				<div>Hi</div>
				<div>hello </div>
			</div>
		</div>
	);
};

export default Footer;
