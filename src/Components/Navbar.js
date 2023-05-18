import React, { Fragment, useState } from 'react';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { AiFillHome, AiOutlineLinkedin } from 'react-icons/ai';
import { FaInstagram, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';
import { MdContacts } from 'react-icons/md';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from './Footer';
import NavLinks from './NavLinks';

export const Navbar = () => {
	const [open, setOpen] = useState(true);

	const navLinks = [
		{
			title: 'Home',
			link: '/',
			Component: AiFillHome,
			style: 'hover:text-golden ',
		},
		{
			title: 'About',
			link: '/about',
			Component: BsQuestionCircleFill,
			style: 'hover:text-golden',
		},
		{
			title: 'Education',
			link: '/education',
			Component: FaUserGraduate,
			style: 'hover:text-golden',
		},
		{
			title: 'projects',
			link: '/projects',
			Component: FaChartLine,
			style: 'hover:text-golden',
		},
		{
			title: 'contacts',
			link: '/contact',
			Component: MdContacts,
			style: 'hover:text-golden',
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
			<div className="flex min-h-screen h-full w-80">
				{/* sidebar container */}
				<div
					className={`${
						open ? 'w-8/12 ' : 'w-20 '
					} p-3 pt-5 h-screen bg-purple text-white relative transition-all ease-in duration-500 `}
				>
					{/* control icon wrapped inside IconContext.Provider */}
					<IconContext.Provider
						value={{
							size: '2em',

							className: `${
								!open && 'rotate-180'
							} global-class-name absolute cursor-pointer text-white transition-all duration-700 -right-3 rounded-full  top-9 bg-purple  hover:visible`,
						}}
					>
						{/* control icon for side bar */}
						<TbCircleChevronLeft onClick={() => setOpen(!open)} />
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
								!open && 'h-14 w-14 m-auto  rounded-full mt-4'
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
							const { link, Component } = element;

							return (
								<div
									className="motion-safe:hover:-translate-x-0.5 motion-safe:transition ... hover:text-golden"
									key={key}
								>
									<Link to={link}>
										<Component />
									</Link>
								</div>
							);
						})}
					</div>
				</div>

				{/* Content container routing starts here */}
				<div>
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/about" element={<About />} exact />
						<Route path="/contact" element={<Contact />} exact />
						<Route
							path="/education"
							element={<Education />}
							exact
						/>
						<Route path="/projects" element={<Projects />} exact />
					</Routes>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</Fragment>
	);
};
