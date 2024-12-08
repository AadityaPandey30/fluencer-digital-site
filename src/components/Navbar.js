import React,{useEffect, useState} from 'react'
import Logo from './Logo.png'
/*social media icons */
import Linked from './Linkedin.png'
import what from './icons8-whatsapp-50.png'
import Email from './icons8-email-48.png'
import Consult from './icons8-center-51.png'
import {
    Link,
} from "react-router-dom";
import sideBar from './image (4).png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    //javascript for navbar
    const [open, setOpen] = useState(true);

    var lastScrollTop = 0;
    // const navbar = document.getElementById("middleNav");
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            setOpen(false)
        } else{
            setOpen(true)
        }
        lastScrollTop = scrollTop;
    })

    return (
        <header className='hero1'>

            {/*Middle navbar */}

            {open === false ||
            <nav className='navbar navbar-dark navline' id="middleNav" style={{ position: 'fixed',top:'30px',zIndex: "5" }}>
                {/* <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link> */}
                <ul className="ul nav justify-content-between">
                    <li className="nav-item">
                        <Link className="link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">

                        <li className="nav-item dropdown">
                            {/* <Link className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/ourServices">Our Services</Link> */}
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <Link className="link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/ourServices">Our Services</Link>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><Link class="dropdown-item" to="/ourServices">Website Development</Link></li>
                                        <li><Link class="dropdown-item" to="/Services2">Custom Software Development</Link></li>
                                        <li><Link class="dropdown-item" to="/Services3">Mobile App Development</Link></li>
                                        <li><Link class="dropdown-item" to="/Services4">Artificial Intelligence</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/ourWorks">Our Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="link" to="/mainContact">Contact</Link>
                    </li>
                </ul>
            </nav> }

            {/*side nav bar*/}
            <nav className="navbar navbar-dark  fixed-top" style={{ zIndex: '1' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" className='Logo' /></Link>
                    
                    <button className="navbar-toggler sideNav" data-aos="slide-right" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler"><img src={sideBar} style={{ width: '40px' }} alt='sidebar' /></span>
                    </button> 
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{ color: '#ED1C24' }}><img src={Logo} alt="logo" style={{ width: '60px' }} />Fluencer</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item"> {/*dropdown */}
                                    <Link className="nav-link dropdown-toggle" to="/ourServices" role="button" aria-expanded="false"> {/* data-bs-toggle="dropdown" */}
                                        Our Services
                                    </Link>
                                    <ul className="dropdown-menu-dark" style={{ listStyleType: 'none', padding: '0' }}> {/*dropdown-menu  */}
                                        <li><Link className="dropdown-item" to="/ourServices">Website Development</Link></li>
                                        <li><Link className="dropdown-item" to="/Services2">Custom Software Development</Link></li>
                                        <li><Link className="dropdown-item" to="/Services3">Mobile App Development</Link></li>
                                        <li><Link className="dropdown-item" to="/Services4">Artificial Intelligence</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ourWorks">Our Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mainContact">Contact</Link>
                                </li>
                            </ul>
                            <div className='icon'>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="mailto:yash.kandoi@fluencer.co.in"><img src={Email} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="https://www.linkedin.com/company/fluencer2022/"><img src={Linked} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="https://api.whatsapp.com/send?phone=918306067708&text"><img src={what} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                                <a style={{ border: 'none', margin: '0', padding: '0' }} href="https://topmate.io/yash_kandoi/432383"><img src={Consult} style={{ width: '25px', margin: '10px' }} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar