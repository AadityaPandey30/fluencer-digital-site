import React from 'react';
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Services from './Services';
import Us from './Us';
import Testimonials from './Testimonials';
import MainContact from './MainContact';
import Works from './Works';

const MobileHome = () => {
  return (
    <div>
      <div className="hero" id="home">
                <div className="contain">
                    <video className='back-video' autoPlay loop muted playsInline preload="metadata">
                        <source src="/BGVideoMobile.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <div className="overlay2"></div>
                </div>

                <div className="content container" style={{ marginTop: '10px', marginLeft: '5%' }}>
                    <h1 className='firdt' style={{ marginBottom: '20px', fontSize:'40px' }}>
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
                    <h4 style={{fontSize:'20px'}}>DRIVING <b>GROWTH</b> & <b>REVENUE</b> FOR YOUR BUSINESS</h4>
                    <h5 style={{fontSize:'14px', margin:'4% 0 10% 0'}}>Crafting Strategic Web Experiences<span className='dot' style={{ color: 'orangered'}}>.</span></h5>

                    <Link to="/mainContact" title="Contact Fluencer Digital" style={{ marginBottom: '20px' }}>
                        Start Your Project
                    </Link>
                </div>
            </div>
            {/* <About /> */}
            <Services />
            <Works />
            <Us />
            <Testimonials />
            <MainContact />
    </div>
  )
}

export default MobileHome
