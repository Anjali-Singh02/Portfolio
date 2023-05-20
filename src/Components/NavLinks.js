import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const NavLinks = ({ props }) => {
	console.log(props);
	const { open, title, link, Component } = props;
	return (
		<div
			className={`flex text-center m-2  motion-safe:hover:-translate-x-0.5 motion-safe:transition ... duration-500 `}
		>
			<div className={` flex hover:text-golden`}>
				<IconContext.Provider
					value={{
						size: '2em',
						className:
							'global-class-name p-1 cursor-pointer  duration-200 items-center ',
					}}
				>
					<Link to={link}>
						<Component />
					</Link>
				</IconContext.Provider>
				<h3
					className={`origin-left px-2 font-medium  text-sm transition-all ease-in duration-500  ${
						!open && 'scale-0'
					}  `}
				>
					<Link to={link}>{title}</Link>
				</h3>
			</div>
		</div>
	);
};

export default NavLinks;
