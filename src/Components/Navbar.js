import React, { Fragment, useState } from 'react';
import { TbCircleChevronLeft } from 'react-icons/tb';
import { AiFillHome, AiOutlineLinkedin } from 'react-icons/ai';
import { FaInstagram, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';
import { MdContacts } from 'react-icons/md';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from './Footer';

export const Navbar = () => {
	const [open, setOpen] = useState(true);
	return (
		<Fragment>
			{/* navbar container */}
			<div className="flex h-screen w-80">
				{/* sidebar container */}
				<div
					className={`${
						open ? 'w-8/12 ' : 'w-20 '
					} p-3 pt-5 h-screen bg-purple-950 text-white relative duration-300 `}
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
							className={`${
								open &&
								'rounded-2xl items-center h-60 w-44 m-auto cursor-pointer'
							} ${
								!open && 'h-14 w-14 m-auto  rounded-full mt-4'
							} `}
						/>
					</div>
					<div
						className={`flex-col mt-8 border-2 ${!open && 'pt-2'}`}
					>
						<div className="flex text-center m-2">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name p-1 cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/">
										<AiFillHome />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left px-2 font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/">Home</Link>
								</h3>
							</div>
						</div>
						<div className="flex m-2">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name p-1 cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/about">
										<BsQuestionCircleFill />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left px-2 font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/about">About</Link>
								</h3>
							</div>
						</div>
						<div className="flex m-2">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name p-1 cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/education">
										<FaUserGraduate />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left px-2 font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/education">Education</Link>
								</h3>
							</div>
						</div>
						<div className="flex m-2">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name p-1  cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/projects">
										<FaChartLine />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left px-2 font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/projects">Projects</Link>
								</h3>
							</div>
						</div>
						<div className="flex m-2">
							<div>
								<IconContext.Provider
									value={{
										size: '2em',
										className:
											'global-class-name p-1 cursor-pointer text-white duration-200 items-center',
									}}
								>
									<Link to="/contact">
										<MdContacts />
									</Link>
								</IconContext.Provider>
							</div>

							<div>
								<h3
									className={`origin-left px-2 font-medium text-xl duration-100 ${
										!open && 'scale-0'
									}`}
								>
									<Link to="/contact">Contact</Link>
								</h3>
							</div>
						</div>
					</div>
					<div
						className={` flex mt-52 pt-2   justify-evenly  border-2 text-xl ${
							!open && ' h-40 flex-col pl-4'
						}`}
					>
						<div className="mb-2">
							<AiOutlineLinkedin />
						</div>
						<div>
							<VscGithub />
						</div>

						<div>
							<FaInstagram />
						</div>
						<div>
							<TfiTwitter />
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
