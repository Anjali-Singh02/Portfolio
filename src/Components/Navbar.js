import React, { Fragment, useState } from 'react';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { AiFillHome, AiOutlineLinkedin } from 'react-icons/ai';
import { FaInstagram, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';
import { MdContacts } from 'react-icons/md';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import SetPath from './SetPath';

export const Navbar = () => {
	const [open, setOpen] = useState(true);

	const navLinks = [
		{
			title: 'Home',
			link: '/',
			Component: AiFillHome,
		},
		{
			title: 'About',
			link: '/about',
			Component: BsQuestionCircleFill,
		},
		{
			title: 'Education',
			link: '/education',
			Component: FaUserGraduate,
		},
		{
			title: 'projects',
			link: '/projects',
			Component: FaChartLine,
		},
		{
			title: 'contacts',
			link: '/contact',
			Component: MdContacts,
		},
	];

	const socialLinks = [
		{
			link: 'https://www.linkedin.com/in/anjali-singh02/',
			Component: AiOutlineLinkedin,
		},
		{
			link: 'https://github.com/Anjali-Singh02',
			Component: VscGithub,
		},
		{
			link: 'https://www.instagram.com/anju01173/',
			Component: FaInstagram,
		},
		{
			link: 'https://twitter.com/Anjali__Singh02',
			Component: TfiTwitter,
		},
	];

	return (
		<Fragment>
			{/* navbar container */}
			<div className="bg-gray-900 text-white">
				<div className="flex min-h-screen h-full w-full transition-all ease-in duration-500">
					{/* sidebar container */}
					<div
						className={`${
							open ? 'w-60 ' : 'w-20 '
						} p-3 pt-5 h-screen bg-gray-900 border-r-2 border-gray-500 relative transition-all ease-in duration-500 `}
					>
						{/* control icon wrapped inside IconContext.Provider */}
						<IconContext.Provider
							value={{
								size: '2em',

								className: `${
									!open && 'rotate-180'
								} global-class-name absolute cursor-pointer text-white transition-all duration-700 -right-3 rounded-full  top-5 bg-purple  hover:visible`,
							}}
						>
							{/* control icon for side bar */}
							<TbCircleChevronLeft
								onClick={() => setOpen(!open)}
							/>
						</IconContext.Provider>
						{/* contents of side bar */}
						<div className="">
							<img
								src="/assets/profile.jpg"
								alt="myImage"
								className={`${
									open &&
									'rounded-2xl items-center h-60 w-44 m-auto cursor-pointer '
								} ${
									!open &&
									'h-14 w-14 m-auto  rounded-full mt-4'
								} `}
							/>
						</div>
						<div
							className={`flex-col mt-8 ml-3 text-sm uppercase ${
								!open && 'pt-2 ml-1'
							}`}
						>
							{navLinks.map((element, key) => {
								return (
									<NavLinks
										props={{ open, ...element }}
										key={key}
									/>
								);
							})}
						</div>
						<div
							className={` flex mt-52 pt-2   justify-evenly text-xl ${
								!open && ' h-40 flex-col pl-4 mt-60'
							}`}
						>
							{socialLinks.map((element, key) => {
								return (
									<SocialLinks
										props={{ open, ...element }}
										key={key}
									/>
								);
							})}
						</div>
					</div>
					{/* Router component */}
					<div className="w-1/2 m-auto mt-20 h-screen">
						<SetPath />
					</div>
				</div>
			</div>
		</Fragment>
	);
};
