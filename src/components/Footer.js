import React, {useEffect} from 'react';
import Logo from './Logo.png'
// import Twitter from './Twitter.png'
// import Facebook from './Facebook.png'
import Linked from './Linkedin.png'
// import Insta from './Instagram.png'
import what from './icons8-whatsapp-50.png'
import Email from './icons8-email-48.png'
import Consult from './icons8-center-51.png'
import copyright from './copy.png'
import {
    Link,
  } from "react-router-dom";
//   import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    
    
    // for animation
//   const { ref: myRef, inView: myElementIsVisible } = useInView();

  //AOS Animation
useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

    return (
        <footer className="container"> {/*data-aos="fade-up" {`${'hid2 container'} ${myElementIsVisible? 'show': 'hid2'}`} ref={myRef} */}
            <div>
                <nav className='FooterNav'>
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="Fluencer Digital Logo" className='LogoFooter' /></Link>
                    <ul className="Footer-ul nav justify-content-between">
                        <li className="nav-link">
                            <Link className="link-a active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-link ">
                            <Link className="link-a" to="/ourServices">Our Services</Link>
                        </li>
                        <li className="nav-link ">
                            <Link className="link-a" to="/ourWorks">Our Works</Link>
                        </li>
                        {/* <li className="nav-link ">
                            <Link className="link-a" to="/">Terms of Service</Link>
                        </li> */}
                        <li className="nav-link ">
                            <Link className="link-a" to="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='phone'>
                <p>+91-8306067708 | yash.kandoi@fluencer.co.in</p>
                <hr className='hr-line'/>
            </div>
            <div className='bottom-line' style={{display: 'flex' ,justifyContent: 'space-between'}}>
                <div style={{color:'#fff'}}>
                    <img src={copyright} style={{width:'5%', padding:'5px'}} alt="" />2023 Fluencer.All Rights Reserved.
                </div>
                <div className='icon'>
                    <a style={{border:'none', margin:'0', padding:'0'}} href="mailto:yash.kandoi@fluencer.co.in"><img src={Email} style={{width:'25px', margin: '10px'}} alt="" /></a>
                    <a style={{border:'none', margin:'0', padding:'0'}} href="https://www.linkedin.com/company/fluencer2022/"><img src={Linked} style={{width:'25px', margin: '10px'}} alt="" /></a>
                    <a style={{border:'none', margin:'0', padding:'0'}} href="https://api.whatsapp.com/send?phone=918306067708&text"><img src={what} style={{width:'25px', margin: '10px'}} alt="" /></a>
                    <a style={{border:'none', margin:'0', padding:'0'}} href="https://topmate.io/yash_kandoi/432383"><img src={Consult} style={{width:'25px', margin: '10px'}} alt="" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer