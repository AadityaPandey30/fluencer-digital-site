import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import mobile from './mobile1.png';
import robot from './ai.png';
import soft from './soft.png';
import web from './web1.png';

const servicesData = [
  {
    img: mobile,
    title: "Mobile App Development",
    desc: "Leverage our expertise to create stable, scalable, and high-performance mobile applications.",
    link: "/Services3"
  },
  {
    img: soft,
    title: "Software Development",
    desc: "Custom software solutions tailored to meet your specific project requirements and business goals.",
    link: "/Services2"
  },
  {
    img: robot,
    title: "Artificial Intelligence",
    desc: "Cutting-edge AI solutions that adapt to user behavior, making your applications smarter and more intuitive.",
    link: "/Services4"
  },
  {
    img: web,
    title: "Website Development",
    desc: "Our solutions help enterprises thrive globally with customized website development that scales with business needs.",
    link: "/ourServices"
  }
];

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className='mt-10'>
      <div className='text-right mb-10 md:mr-16' data-aos="slide-right">
        <h3 className='text-white text-5xl'>
          Our Services<span className='text-orange-500'>.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {servicesData.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg" data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}>
            <img src={service.img} alt={service.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-left px-6 text-left transition-all duration-500 transform translate-y-0 group-hover:translate-y-full">
              <Link to={service.link} className="text-white text-3xl font-semibold mb-3">{service.title}</Link>
              <p className="text-gray-300 text-md">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
