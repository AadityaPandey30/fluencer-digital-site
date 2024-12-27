import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import Services from './Services';
import Us from './Us';
import Testimonials from './Testimonials';
import MainContact from './MainContact';
import Works from './Works';
import MobileHome from './MobileHome';

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 660);
    };

    useEffect(() => {
        // Check screen size on component mount
        checkScreenSize();

        // Add event listener to update state on window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Render MobileHome for mobile view
    if (isMobile) {
        return <MobileHome />;
    }

    // Render original Home component for other devices
    return (
        <>
            <div className="hero" id="home" style={{ height: '128vh' }}>
                <div className="contain" style={{ height: '128vh' }}>
                    <video className='back-video' autoPlay loop muted playsInline preload="metadata">
                        <source src="/BGVideoMobile.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <div className="overlay2"></div>
                </div>

                <div className="content container" style={{ marginTop: '10px', marginLeft: '5%' }}>
                    <h1 className='firdt' style={{ marginBottom: '20px' }}>
                        <TypeAnimation
                            className='typeAnimation'
                            sequence={[
                                'WEBSITE DEVELOPMENT SERVICES',
                                1000,
                                'SOFTWARE DEVELOPMENT SOLUTIONS',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={false}
                        />
                    </h1>
                    <h4>DRIVING <b>GROWTH</b> & <b>REVENUE</b> FOR YOUR BUSINESS</h4>
                    <h5>Crafting Strategic Web Experiences<span className='dot' style={{ color: 'orangered', fontSize: '50px' }}>.</span></h5>

                    <Link to="/mainContact" title="Contact Fluencer Digital" style={{ marginBottom: '20px' }}>
                        Start Your Project
                    </Link>
                </div>
            </div>
            <Services />
            <Works />
            <Us />
            <Testimonials />
            <MainContact />
        </>
    );
};

export default Home;