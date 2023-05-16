import React, { Fragment, useState } from 'react';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { BsQuestionCircleFill } from 'react-icons/bs';

import { IconContext } from 'react-icons/lib';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

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
							} global-class-name absolute cursor-pointer text-white duration-200  -right-3 rounded-full  top-9 bg-purple-950`,
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
							className={`rounded-3xl items-center w-11/12 mx-auto cursor-pointer ${
								!open && 'h-10'
							}`}
						/>
						<h2
							className={`p-4 text-3xl font-bold  ${
								!open && 'scale-0'
							}`}
						>
							Anjali Singh
						</h2>
					</div>
					<div className="flex-col gap-x-2 items-center">
						<div className="flex ">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name  cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/">
										<AiFillHome />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/">Home</Link>
								</h3>
							</div>
						</div>
						<div className="flex">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name  cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/about">
										<BsQuestionCircleFill />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/about">About</Link>
								</h3>
							</div>
						</div>
						<div className="flex">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name  cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/education">
										<FaUserGraduate />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/education">Education</Link>
								</h3>
							</div>
						</div>
						<div className="flex">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name  cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/projects">
										<FaChartLine />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/">Projects</Link>
								</h3>
							</div>
						</div>
						<div className="flex">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name  cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/contact">
										<MdContacts />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/contact">Contact</Link>
								</h3>
							</div>
						</div>
					</div>
				</div>
				{/* Content container starts here */}
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
				</div>
			</div>
		</Fragment>
	);
};
