import React from 'react'
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Services from './Services';
import Us from './Us'
import Testimonials from './Testimonials';
import MainContact from './MainContact';
import Works from './Works';


const Home = () => {

    return (
        <>
            <div className="hero" id="home" style={{height:'128vh'}}>
                <div className="contain" style={{height:'128vh'}}>
                    <video className='back-video' autoPlay loop muted playsInline preload="metadata">
                    <source src="/BGVideo.webm" type="video/webm" />
                    <source src="/BGVideo.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay">
                    </div>
                    <div className="overlay2">
                    </div>
                </div>

                <div className="content container" style={{ marginTop: '10px', marginLeft: '5%' }}>
                    <h1 className='firdt' style4 style={{ marginBottom: '20px'}}
                    >
                        <TypeAnimation className='typeAnimation'
                            sequence={[
                                'WEBSITE DEVELOPMENT SERVICES', // Types 'One'
                                1000, // Waits 1s
                                'SOFTWARE DEVELOPMENT SOLUTIONS', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                            ]}
                            wrapper="span"
                            cursor={false}
                        // repeat={Infinity}
                        />
                    </h1>
                    <h4>DRIVING <b>GROWTH</b> & <b>REVENUE</b> FOR YOUR BUSINESS</h4>
                    <h5>Crafting Strategic Web Experiences<span className='dot' style={{ color: 'orangered', fontSize: '50px' }}>.</span></h5>
    
                    <Link to="/mainContact" title="Contact Fluencer Digital" style={{marginBottom:'20px'}}>
                        Start Your Project
                    </Link>
                </div>
            </div>
            <About />
            <Services />
            <Works />
            <Us />
            <Testimonials />
            <MainContact />
        </>
    )
}

export default Home