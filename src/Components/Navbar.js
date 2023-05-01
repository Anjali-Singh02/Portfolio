import React, { Fragment, useState } from 'react';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { HiOutlineHome } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';

export const Navbar = () => {
	const [open, setOpen] = useState(true);
	return (
		<Fragment>
			{/* navbar container */}
			<div className="flex">
				{/* sidebar container */}
				<div
					className={`${
						open ? 'w-64' : 'w-20'
					} p-5 pt-8 h-screen bg-purple-950 text-white relative duration-300`}
				>
					{/* control icon wrapped inside IconContext.Provider */}
					<IconContext.Provider
						value={{
							size: '2em',
							className: `${
								!open && 'rotate-180'
							} global-class-name absolute cursor-pointer text-white duration-200  -right-3 rounded-full bg-purple-50 top-9 text-purple-950`,
						}}
					>
						{/* control icon for side bar */}
						<TbCircleChevronLeft onClick={() => setOpen(!open)} />
					</IconContext.Provider>
					{/* contents of side bar */}
					<div className="flex gap-x-2 items-center">
						<div>
							<IconContext.Provider
								value={{
									size: '2em',
									className:
										'global-class-name  cursor-pointer text-white duration-200 items-center',
								}}
							>
								<HiOutlineHome />
							</IconContext.Provider>
						</div>

						<div>
							<h3
								className={`origin-left font-medium text-xl duration-100 ${
									!open && 'scale-0'
								}`}
							>
								Home
							</h3>
						</div>
					</div>
				</div>
				{/* Content container starts here */}
				<div>Home Page</div>
			</div>
		</Fragment>
	);
};
