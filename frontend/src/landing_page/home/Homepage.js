import React from 'react';
import Hero from './Hero';
import Adwards from './Adwards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Footer from '../Footer';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return (
        <>
            <Hero/>
            <Adwards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
    );
}

export default HomePage;