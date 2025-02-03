import React, { useEffect } from 'react';
import mobile from './mobile1.png';
import robot from './ai.png';
import soft from './soft.png';
import web from './web1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Services = () => {
  // AOS animation
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <section className='serviceSection' style={{ marginTop: '' }}>
        <div className='services cont' style={{ marginBottom: '40px' }}>
          <div data-aos="slide-right">
            <h3 className='h3title-Us' style={{ color: 'white', fontSize: '2.75rem', marginTop: '2%' }}>
              Our Services<span style={{ color: 'orangered' }}>.</span>
            </h3>
          </div>
        </div>

        <div className="card-div d-flex justify-content-center align-item-center my-5 mx-2 md:mx-0">
          {/* Mobile App Development */}
          <div className="card text-bg-dark mx-3" data-aos="slide-right">
            <img src={mobile} className="card-img" alt="Mobile App Development" loading="lazy" />
            <Link to="/Services3">
            <div className="card-overlay md:pt-[12%] md:px-[5%]">
                <h4 className="card-title" style={{ fontWeight: '600', fontSize: '2.6rem', color: '#fff' }}>
                  Mobile App Development
                </h4>
                <p className="card-text" style={{ color: 'grey' }}>
                  Leverage our expertise to create stable, scalable, and high-performance mobile applications.
                </p>
            </div>
            </Link>
          </div>

          {/* Software Development */}
          <div className="card text-bg-dark mx-3" data-aos="slide-right">
            <img src={soft} className="card-img" alt="Software Development" loading="lazy" />
            <div className="card-overlay md:pt-[12%] md:px-[5%]">
              <Link to="/Services2">
                <h4 className="card-title" style={{ fontWeight: '600', fontSize: '2.6rem', color: '#fff' }}>
                  Software Development
                </h4>
                <p className="card-text" style={{ color: 'grey' }}>
                  Custom software solutions tailored to meet your specific project requirements and business goals.
                </p>
              </Link>
            </div>
          </div>

          {/* Artificial Intelligence */}
          <div className="card text-bg-dark mx-3" data-aos="slide-left">
            <img src={robot} className="card-img" alt="Artificial Intelligence" loading="lazy" />
            <div className="card-overlay md:pt-[12%] md:px-[5%]">
              <Link to="/Services4">
                <h4 className="card-title" style={{ fontWeight: '600', fontSize: '2.6rem', color: '#fff' }}>
                  Artificial Intelligence
                </h4>
                <p className="card-text" style={{ color: 'grey' }}>
                  Cutting-edge AI solutions that adapt to user behavior, making your applications smarter and more intuitive.
                </p>
              </Link>
            </div>
          </div>

          {/* Website Development */}
          <div className="card text-bg-dark mx-3" data-aos="slide-left">
            <img src={web} className="card-img" alt="Website Development" loading="lazy" />
            <div className="card-overlay md:pt-[12%] md:px-[5%]">
              <Link to="/ourServices">
                <h4 className="card-title" style={{ fontWeight: '600', fontSize: '2.6rem', color: '#fff' }}>
                  Website Development
                </h4>
                <p className="card-text" style={{ color: 'grey' }}>
                  Our solutions help enterprises thrive globally with customized website development that scales with business needs.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
