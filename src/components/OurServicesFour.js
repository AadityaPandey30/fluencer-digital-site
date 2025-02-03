import React, {useEffect} from 'react'
import web from './Our Services/Website Development/BACK-END.png'
import web1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import web2 from './Our Services/Website Development/E-COM.png'
import web3 from './Our Services/Website Development/FRONT-END.png'
import web4 from './Our Services/Website Development/PWA.png'
import web5 from './Our Services/Website Development/SAAS.png'
import ai from './ai.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'

const OurServicesFour = () => {

           // for animation
//   const { ref: myRef, inView: myElementIsVisible } = useInView();

useEffect(()=>{
    Aos.init({ duration: 500});
  }, [])

    return (
        <>
        <Helmet>
        <title>AI Training Fluencer Digital</title>
        <meta name="description" content="Transform your business with Fluencer Digital’s AI solutions. From machine learning and chatbots to predictive analytics, we help you harness AI for growth." />
      </Helmet>
    {/* Fourth part */}
    <div>
        <div className="Back-img-Service">
            <div className='img-back'>
            <div style={{margin:'auto', width:'fit-content'}}>
                <img src={ai} alt="Artificial Intelligence Services" />
            </div>
            </div>
            <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>Artificial Intelligence<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span></h2>
        </div>
    </div>
    <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col" data-aos="slide-left">
                <img src={web3} className="card-img1-top" alt="AI Consulting" />
                <div className="web card" style={{minHeight:'50vh'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">AI Consulting</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            Our team of AI experts provides consultation services to help businesses leverage AI effectively. We identify and optimize areas for AI integration to enhance processes, efficiency, and decision-making.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="slide-left">
                <img src={web} className="card-img1-top" alt="AI Software Development" />
                <div className="web card"  style={{minHeight:'50vh'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">AI Software Development</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            We develop custom AI solutions, including machine learning models, natural language processing (NLP) algorithms, and computer vision systems, tailored to meet specific business needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="slide-left">
                <img src={web5} className="card-img1-top" alt="AI Chatbots and Virtual Assistants" />
                <div className="web card" style={{minHeight:'50vh'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">AI Chatbots and Virtual Assistants</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            We design and build intelligent chatbots and virtual assistants that can engage users, answer questions, provide support, and automate repetitive tasks for improved efficiency.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="slide-right">
                <img src={web4} className="card-img1-top" alt="AI Data Analysis and Insights" />
                <div className="web card"  style={{minHeight:'50vh'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">AI Data Analysis and Insights</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            Our AI-powered data analytics services help businesses gain insights from large datasets, enabling data-driven decision-making and predictive analytics for future-ready strategies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="slide-right">
                <img src={web2} className="card-img1-top" alt="API Integration Services" />
                <div className="web card" style={{minHeight:'50vh'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">API Integration Services</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            We integrate AI capabilities into existing systems, allowing businesses to harness AI's power without major disruptions to their current infrastructure.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col" data-aos="slide-right">
                <img src={web1} className="card-img1-top" alt="Predictive Analytics" />
                <div className="web card" style={{minHeight:'50vh'}}>
                    <div className="card-body1">
                        <h4 className="card-title1">Predictive Analytics</h4>
                        <p className="card-text1" style={{ color: 'gray' }}>
                            We implement AI-driven predictive models that analyze historical data, providing forecasts and aiding in data-driven decision-making to optimize business processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

    )
}

export default OurServicesFour;