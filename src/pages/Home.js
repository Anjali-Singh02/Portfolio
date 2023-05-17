import React from 'react';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div>
			Home
			<About />
			<Education />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
