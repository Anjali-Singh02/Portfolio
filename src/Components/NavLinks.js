import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const NavLinks = ({ props }) => {
	console.log(props);
	const { open, title, link, style, Component } = props;
	return (
		<div
			className={`flex text-center m-2 motion-safe:hover:-translate-x-0.5 motion-safe:transition ... duration-500 ${style}`}
		>
			<div className={` flex `}>
				<IconContext.Provider
					value={{
						size: '2em',
						className:
							'global-class-name p-1 cursor-pointer text-white duration-200 items-center hover:text-golden',
					}}
				>
					<Link to={link}>
						<Component />
					</Link>
				</IconContext.Provider>

				<h3
					className={`origin-left px-2 font-medium text-sm duration-100  ${
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
