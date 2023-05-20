import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from './Footer';

const SetPath = () => {
	return (
		<>
			{/* Content container routing starts here */}
			<div>
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/about" element={<About />} exact />
					<Route path="/contact" element={<Contact />} exact />
					<Route path="/education" element={<Education />} exact />
					<Route path="/projects" element={<Projects />} exact />
				</Routes>
				<div className="p-1 bg-gray-500">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default SetPath;
