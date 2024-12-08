import React, { useEffect } from 'react'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import { Link } from "react-router-dom";

import 'aos/dist/aos.css'


const About = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  return (
    <>
      <section>
    <div className='main cont' id="home" style={{marginTop:'3%'}}>
        <div className="" data-aos="slide-left"> 
            <h3 style={{color:'white', mixBlendMode: 'difference'}}>About Fluencer Digital<span style={{ color: 'orangered' }}>.</span></h3>
        </div>
        <div className="" data-aos="slide-right">
            <div className="para container">
                <p>
                <b>Fluencer Digital</b> is a forward-thinking digital solutions provider, specializing in <b>website development</b>, <b>mobile app development</b>, and <b>custom software solutions</b>. Our team is passionate about leveraging cutting-edge technology to deliver innovative and sustainable solutions that drive growth for businesses.
                </p>
                <p>
                    Our expertise lies in transforming business ideas into <b>next-gen web applications</b>. With a track record of delivering high-quality, scalable, and customized business solutions, we aim to exceed client expectations with secure and impactful digital experiences.
                </p>
                <p>
                    Leveraging deep domain knowledge and technical expertise, our team crafts user-friendly applications that enhance customer experiences and business agility. From intuitive UI/UX design to robust functionality, we ensure every project leads to tangible results for our clients.
                </p>
                <p>
                    <b>Partner with Fluencer Digital</b> to bring impactful changes to your web development projects. Our approach covers everything from identifying unique challenges to creating powerful, fully functional digital solutions tailored to your needs.
                </p>
                <Link to="/mainContact" title="Contact Fluencer Digital">Contact us today for a consultation</Link>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default About