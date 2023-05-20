import React from 'react';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
	return (
		<div className="m-auto   bg-green-500 text-center border-2">
			<div className="h-52 p-3">Hi there! My name is Anjali Singh</div>

			<div className="bg-cyan-700">
				<About />
			</div>
			<div className="bg-emerald-700">
				<Education />
			</div>
			<div className="bg-indigo-600">
				<Projects />
			</div>
			<div className="bg-teal-700">
				<Contact />
			</div>
		</div>
	);
};

export default Home;
