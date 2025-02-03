import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import WorkComponent from './WorkComponent';
import WorkComponent2 from './WorkComponent2';
import JIT from "./images/JIT update-min.jpg";
import Keith from "./images/Keithston update-min.jpg";
import tpr from './Works/planetreserve.png';
import ababeel from "./images/Ababeel1update-min.jpg";
import firstmile from './Works/firstmile.png';
import garol from './images/AI5I4727 update-min.jpg';
import Bike from "./images/Myple update-min.jpg";
import sand from "./images/Sandesh Foundation update-min.jpg";
import ken from "./images/Kanmart update-min.jpg";

import bikeLogo from './logo/Myple.png';
import garolLogo from './logo/Garol Advisory.png';
import sandLogo from './logo/Sandesh Foundation.png';
import ababeelLogo from "./logo/ababeelLogo-removebg-preview (1).png";
import jitLogo from "./logo/jit logo (1).png";
import kenLogo from './logo/Kn-removebg-preview.png';
import tprLogo from './logo/TPR.png';
import fml from './logo/fml.png';
import keithLogo from './logo/keithLogo.png';
import { Helmet } from 'react-helmet';

const workItems = [
    {
        image: tpr,
        logo: tprLogo,
        title: "The Planet Reserve",
        description1: "Fluencer, a leading Software Development Agency, successfully reestablished and developed a comprehensive dashboard for both user and admin sides. Our team of experts also implemented a Content Management System (CMS) to simplify content updates and manage client details.",
        description2: `The Planet Reserve is a prime example of how our Web Development Company delivers innovative solutions for sustainability. We specialize in developing websites that are user-friendly, efficient, and mobile-optimized. Our focus on environmental conservation and carbon removal is highlighted through a robust <a href="https://amzn.to/4gorxFS" target="_blank" rel="noopener noreferrer">website</a> platform designed to drive change. Whether you are looking for website development services or software solutions, Fluencer is your go-to Software Company. 
        `,
        link: "https://theplanetreserve.com/"
    },
    {
        image: ababeel,
        logo: ababeelLogo,
        title: "Ababeel",
        description1: "Fluencer Digital, a top-tier Website Design agency, developed an intuitive and responsive website for Ababeel. Our team focused on creating a seamless user experience, from the homepage to product pages, ensuring an optimal browsing experience on both desktop and mobile devices.",
        description2: `The Ababeel website is designed with <a href="https://amzn.to/3BsYOAV" target="_blank" rel="noopener noreferrer">SEO</a> and digital marketing strategies in mind, ensuring that the platform ranks well in search engines. With Fluencer's expertise in Software Development and Website Development, we built a mobile-first website that allows users to easily browse and explore products, contributing to a better user engagement. As a leading Web Development Company, we understand the importance of seamless navigation and visual appeal for any business.
        `,
        link: "https://ababeel.in/"
    },
    {
        image: firstmile,
        logo: fml,
        title: "Firstmile",
        description1: "Firstmile’s website development was executed by Fluencer Digital, a leading Web Development Company specializing in WordPress. We utilized a highly customizable platform to create a responsive and efficient website tailored to the needs of the global logistics industry. Fluencer's team integrated advanced digital marketing techniques to boost online visibility and user engagement.",
        description2: `At Fluencer, we believe in the power of Web Development and Software Development to transform businesses. By applying our deep knowledge of web design and digital marketing, we helped Firstmile streamline its logistics services and expand its digital presence. From website design to app development and digital marketing strategies, Fluencer stands out as the go-to Software <a href="https://amzn.to/3ZoLCoH" target="_blank" rel="noopener noreferrer">Products</a> Company for comprehensive digital solutions. Whether you need custom web development or a reliable Software Development Agency, Fluencer delivers results.
        `,
        link: "https://firstmile.global/"
    },
    {
        image: garol,
        logo: garolLogo,
        title: "Garol Advisory",
        description1: "Garol Advisory's finance consulting website was built by Fluencer, a Website Design and Software Development Agency known for its innovative approaches. Our team utilized React for the frontend, ensuring a modern and highly interactive user interface that aligns with Garol’s industry-leading financial consulting services.",
        description2: `As a leading Software Development Agency, Fluencer provided Garol Advisory with a powerful CMS system, built with React and TypeScript, that streamlines backend data management and offers an intuitive user experience. Our work exemplifies how a well-crafted website design can support and enhance <a href="https://amzn.to/3D2kww5" target="_blank" rel="noopener noreferrer">business</a> operations. Whether you're looking for Web Development or a full suite of digital marketing services, Fluencer is your trusted Software Company, offering services tailored to your business needs.
        `,
        link: "https://garol.in/"
    },
    {
        image: sand,
        logo: sandLogo,
        title: "Sandesh Foundation",
        description1: "Fluencer designed and developed an impactful website for the Sandesh Foundation, a non-profit organization. Our team ensured the website reflects Sandesh's mission in education, health, and nutrition, while incorporating donation functionalities to support their charity work.",
        description2: `As a Web Development Company, Fluencer has proven expertise in creating websites for non-profits and organizations dedicated to making a social impact. Sandesh Foundation's website was developed with a strong focus on <a href="https://amzn.to/3DfnVHS" target="_blank" rel="noopener noreferrer">user experience</a>, mobile accessibility, and responsive design. Fluencer also optimized the website for digital marketing, ensuring it reaches a broader audience. Our capabilities extend beyond website development to include digital marketing, making us the preferred Software Development Agency for non-profit organizations.
        `,
        link: "https://sandeshfoundation.in/"
    },
    {
        image: ken,
        logo: kenLogo,
        title: "Kanmart(Refurbished India)",
        description1: "Kanmart’s e-commerce platform was built by Fluencer, a Software Development Agency specializing in e-commerce website design and development. Fluencer delivered a user-friendly interface that enables customers to easily purchase refurbished products, especially smartphones and laptops.",
        description2: `Fluencer provided Kanmart with a custom-built website that offers a seamless shopping experience for users. As a leading Software Company, Fluencer focuses on delivering high-quality Web Development and app development solutions for e-commerce businesses. Whether you're looking for website design services or a comprehensive <a href="https://amzn.to/4iqT5w2" target="_blank" rel="noopener noreferrer">digital marketing</a> strategy, Fluencer is your go-to Software Development Agency for all your online business needs.
        `,
        link: "#"
    },
    {
        image: Bike,
        logo: bikeLogo,
        title: "Myple",
        description1: "Fluencer designed and developed the Myple website, a platform connecting bike owners and riders. We focused on creating an intuitive interface that allows users to easily browse and rent bikes. Our expertise in Web Development and Software Development ensures a seamless and enjoyable user experience.",
        description2: `As a top Web Development Company, Fluencer understands the importance of user-friendly website design and robust software solutions. Myple's website incorporates advanced features for easy booking and <a href="https://amzn.to/4gkwtM2" target="_blank" rel="noopener noreferrer">payment</a> processing. We offer a range of services, including app development and digital marketing, making Fluencer your one-stop Software Development Agency for all digital solutions.
        `,
        link: "#"
    },
    {
        image: Keith,
        logo: keithLogo,
        title: "Keithston",
        description1: "Keithston’s website was developed by Fluencer, a Software Company specializing in e-commerce and fashion brands. Our team designed an interactive and visually appealing platform that showcases Keithston's products while offering a seamless shopping experience for customers.",
        description2: `Fluencer, a leading Web Development Company, created a user-friendly website for Keithston that integrates advanced e-commerce functionalities. As experts in digital marketing and website design, Fluencer ensures that the Keithston website ranks high in search engines and delivers a smooth user experience. Our Software Development solutions are perfect for businesses looking to enhance their online presence through cutting-edge technologies and digital 
            <a href="https://amzn.to/3OJSb0g" target="_blank" rel="noopener noreferrer">strategies</a>.`,
        link: "#"
    },
    {
        image: JIT,
        logo: jitLogo,
        title: "Jaipur Institute of Technology",
        description1: "Fluencer built a responsive, mobile-first website for the Jaipur Institute of Technology (JIT), ensuring that students and faculty have easy access to academic resources and institutional information. We utilized modern Web Development practices to create a seamless and professional platform.",
        description2: `Fluencer, a premier Software Development Agency, designed the JIT website with a focus on education. Our team’s expertise in website design and development ensured that the platform is accessible on all devices. JIT's website is optimized for digital marketing, ensuring that the institution’s <a href="https://amzn.to/4g1vMaO" target="_blank" rel="noopener noreferrer">courses</a> and programs reach a wider audience. Whether you need Web Development services or a complete digital marketing strategy, Fluencer is your trusted Software Company.
        `,
        link: "https://jitjaipur.onrender.com/"
    },
];

const OurWorks = () => {

  useEffect(()=>{

    Aos.init({ duration: 500});
  }, [])

  return (
    <>
    <Helmet>
        <title>Projects Delivered- Fluencer Digital</title>
        <meta name="description" content="Discover how Fluencer Digital delivers cutting-edge tech solutions. Browse our case studies on web development, AI, and software projects driving innovation" />
      </Helmet>
    <div className='ourWork container1'>
      <div>
        <h1 className='heading' style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center', zIndex: '-1' }}>Case Studies<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h1>
      </div>
      
      {workItems.map((work, index) => (
    <div style={{ margin: '65px 0px' }} key={index}>
        {index % 2 === 0 ? (
            <WorkComponent
                image={work.image}
                title={work.title}
                description1={work.description1}
                description2={work.description2}
                link={work.link}
            />
        ) : (
            <WorkComponent2
                image={work.image}
                title={work.title}
                description1={work.description1}
                description2={work.description2}
                link={work.link}
            />
        )}
    </div>
))}  
    </div>
    </>
  )
}

export default OurWorks