import React, { useEffect } from 'react'
import web from './Our Services/Website Development/BACK-END.png'
import web1 from './Our Services/Website Development/CUSTOM SOFTWARE.png'
import web2 from './Our Services/Website Development/E-COM.png'
import web3 from './Our Services/Website Development/FRONT-END.png'
import web4 from './Our Services/Website Development/PWA.png'
import web5 from './Our Services/Website Development/SAAS.png'
// import web6 from './Our Services/Website Development/Website Development.jpg'
import web6 from './web1.png'
// import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurServices = () => {


    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])

    return (
        <>
                 <section className="Back-img-Service">
        <div className='img-back'>
          <div style={{margin:'auto', width:'fit-content'}}>
          <img src={web6} alt="Website development background"  style={{width:'fit' }} />
          </div>
        </div>
        <h2 style={{ color: '#fff', WebkitTextStroke: '0px', textAlign: 'center' }}>
          Website Development<span style={{ color: 'orangered', fontSize: '2.8rem' }}>.</span>
        </h2>
      </section>

      <section className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Frontend Web Development */}
          <article className="col" data-aos="slide-left">
            <img src={web3} className="card-img1-top" alt="Frontend Web Development" />
            <div className="web1 card" style={{minHeight:'30vh'}}>
              <div className="card-body1" >
                <h3 className="card-title1">Front-end Web Development</h3>
                <p className="card-text1" style={{ color: 'gray' }}>
                  Utilize reusable components and deliver component-driven architecture using advanced frontend <a style={{border:'none', margin:'0', padding:'0', fontSize:'medium', color:'gray', textDecoration:'underline'}} href='https://amzn.to/3ZHB7OM'>technologies</a> like React.js, Angular, and Vue.js. Fluencer is a web application development company that combines amazing UI designs with required functionalities effortlessly.
                </p>
              </div>
            </div>
          </article>
          {/* <a style={{border:'none', }} href='https://amzn.to/3ZHB7OM'></a> */}

          {/* Backend Web Development */}
          <article className="col" data-aos="slide-left">
            <img src={web} className="card-img1-top" alt="Backend Web Development" />
            <div className="web1 card" style={{minHeight:'30vh'}}>
              <div className="card-body1">
                <h3 className="card-title1">Back-end Web Development</h3>
                <p className="card-text1" style={{ color: 'gray' }}>
                  Access our skilled backend web developers to make your application scalable. We offer AWS and Azure services to host backend services on <a style={{border:'none', margin:'0', padding:'0', fontSize:'medium', color:'gray', textDecoration:'underline'}} href='https://amzn.to/3ZIO8Yb'>cloud</a>, and use SQL and NoSQL databases for reliable data storage with Microservices architecture.
                </p>
              </div>
            </div>
          </article>

          {/* SaaS Development */}
          <article className="col" data-aos="slide-left">
            <img src={web5} className="card-img1-top" alt="SaaS Development Services" />
            <div className="web1 card" style={{minHeight:'30vh'}}>
              <div className="card-body1">
                <h3 className="card-title1">SaaS Development</h3>
                <p className="card-text1" style={{ color: 'gray' }}>
                  We dive deep to understand your web app’s scope and expandability. Our skilled team provides secure, multi-tenant SaaS <a style={{border:'none', margin:'0', padding:'0', fontSize:'medium', color:'gray', textDecoration:'underline'}} href='https://amzn.to/3ZKhNAv'>application</a> development, enabling sustainable growth for businesses.
                </p>
              </div>
            </div>
          </article>

          {/* Progressive Web Apps */}
          <article className="col" data-aos="slide-right">
            <img src={web4} className="card-img1-top" alt="Progressive Web App Development" />
            <div className="web1 card" style={{minHeight:'30vh'}}>
              <div className="card-body1">
                <h3 className="card-title1">Progressive Web Apps (PWA)</h3>
                <p className="card-text1" style={{ color: 'gray' }}>
                  We create native web apps with <a style={{border:'none', margin:'0', padding:'0', fontSize:'medium', color:'gray', textDecoration:'underline'}} href='https://amzn.to/41mBgZ1'>advanced</a> technology features, quick load times, and interactive content, providing smooth navigation and user experience within the application.
                </p>
              </div>
            </div>
          </article>

          {/* E-commerce Development */}
          <article className="col" data-aos="slide-right">
            <img src={web2} className="card-img1-top" alt="E-Commerce Web Development" />
            <div className="web1 card" style={{minHeight:'30vh'}}>
              <div className="card-body1">
                <h3 className="card-title1">E-Commerce Development</h3>
                <p className="card-text1" style={{ color: 'gray' }}>
                  Build custom <a style={{border:'none', margin:'0', padding:'0', fontSize:'medium', color:'gray', textDecoration:'underline'}} href='https://amzn.to/4iv6Hqr'>eCommerce</a> applications using Shopify, Magento, or custom frameworks. Our team ensures growth with agile, secure, and user-friendly eCommerce solutions.
                </p>
              </div>
            </div>
          </article>

          {/* Custom Software Development */}
          <article className="col" data-aos="slide-right">
            <img src={web1} className="card-img1-top" alt="Custom Software Development" />
            <div className="web1 card" style={{minHeight:'30vh'}}>
              <div className="card-body1">
                <h3 className="card-title1">Custom Software Development</h3>
                <p className="card-text1" style={{ color: 'gray' }}>
                  We offer expert resources and technical expertise for custom web app development, ensuring compatibility, scalability, and an intuitive <a style={{border:'none', margin:'0', padding:'0', fontSize:'medium', color:'gray', textDecoration:'underline'}} href='https://amzn.to/4iv6Hqr'>user experience</a>.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
        </>
    )
}

export default OurServices