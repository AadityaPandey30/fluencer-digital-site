import React , {useEffect} from 'react'
import web from './Our Services/Website Development/BACK-END.png'
import web1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import web2 from './Our Services/Website Development/E-COM.png'
import web3 from './Our Services/Website Development/FRONT-END.png'
import web4 from './Our Services/Website Development/PWA.png'
import web5 from './Our Services/Website Development/SAAS.png'
import mobile from './mobile1.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServicesThree = () => {

     // for animation
//  const { ref: myRef, inView: myElementIsVisible } = useInView();

useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

    return (
        <>
    {/* Third Part - Mobile App Development */}
    <div>
        <div className="Back-img-Service">
            <div className="img-back">
            <div style={{margin:'auto', width:'fit-content'}}>
                <img src={mobile} alt="Mobile App Development" />
            </div>
            </div>
            <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>
                Mobile App Development
                <span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span>
            </h2>
        </div>
    </div>
    
    <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {/* iOS App Development */}
            <div className="col" data-aos="slide-left">
                <img src={web3} className="card-img1-top" alt="iOS App Development" />
                <div className="web card" style={{minHeight:'50vh',marginTop:'12%'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">iOS App Development</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            Our iOS app development team builds high-quality, feature-rich applications tailored for Apple's iOS platform. We ensure that each app is optimized for seamless performance on all iOS devices, aligning with the latest iOS updates.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Android App Development */}
            <div className="col" data-aos="slide-left">
                <img src={web} className="card-img1-top" alt="Android App Development" />
                <div className="web card" style={{minHeight:'50vh',marginTop:'12%'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">Android App Development</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            We develop dynamic, responsive Android applications that cater to a wide user base across various Android devices. Our apps are optimized to support multiple Android versions and offer scalability for future updates.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Cross-Platform App Development */}
            <div className="col" data-aos="slide-left">
                <img src={web5} className="card-img1-top" alt="Cross-Platform App Development" />
                <div className="web card" style={{minHeight:'50vh', marginTop:'12%'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">Cross-Platform App Development</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            With our cross-platform development approach, we create apps that work seamlessly on both iOS and Android, reducing overall development time and costs while ensuring maximum reach and performance.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* UI/UX Design */}
            <div className="col" data-aos="slide-right">
                <img src={web4} className="card-img1-top" alt="UI/UX Design for Mobile Apps" />
                <div className="web card" style={{minHeight:'50vh',marginTop:'12%'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">UI/UX Design</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            Our design team prioritizes user experience by creating intuitive, aesthetically pleasing interfaces that enhance engagement. We combine modern design principles with usability to deliver a smooth and interactive mobile app experience.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* App Backend Development */}
            <div className="col" data-aos="slide-right">
                <img src={web2} className="card-img1-top" alt="App Backend Development" />
                <div className="web card" style={{minHeight:'50vh',marginTop:'12%'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">App Backend Development</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            We develop secure and reliable backend systems that serve as the backbone for your mobile app, providing functionalities like data storage, user authentication, and seamless data handling for a smooth user experience.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* App Testing and Quality Assurance */}
            <div className="col" data-aos="slide-right">
                <img src={web1} className="card-img1-top" alt="App Testing and Quality Assurance" />
                <div className="web card"  style={{minHeight:'50vh',marginTop:'12%'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">App Testing and Quality Assurance</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            Our quality assurance team rigorously tests each mobile application to ensure a flawless user experience. We conduct comprehensive testing across multiple devices to identify and address potential issues, guaranteeing a seamless launch.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</>


    )}

    export default OurServicesThree;