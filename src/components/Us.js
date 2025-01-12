import React, { useEffect, useState } from 'react'
import back from '../components/MaskGroup.png'
import { NavLink } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Technology1 from './Technology1'
import Technology2 from './Technology2' // Make sure Technology2, Technology3, and Technology4 are created similarly
import Technology3 from './Technology3'
import Technology4 from './Technology4'

const Us = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [])

  const [showTab, setShowTab] = useState("tab1");

  return (
    <>
      <section aria-labelledby="why-us"  style={{paddingTop:'8%'}}>
        <div
          className="Us"
          style={{
            backgroundImage: `url(${back})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000', // fallback color
          }}
          aria-label="Background for Why Us section"
        >
          <div className="cont">
            {/* Header */}
            <header>
              <h1 id="why-us" className="h3title-Us" style={{ color: 'white', fontSize: '2.75rem' }}>
                Why Us<span style={{ color: 'orangered', fontSize: '2.8rem' }}>?</span>
              </h1>
            </header>

            {/* Unique Selling Points */}
            <div className="firstContent" data-aos="slide-right">
              {[
                { number: "01", title: "End-to-End Project", description: "We handle every aspect of the project, from requirements gathering to deployment, ensuring a smooth process." },
                { number: "02", title: "On-Time Delivery", description: "Our commitment to excellence ensures timely delivery, keeping you competitive in the digital landscape." },
                { number: "03", title: "Latest Technology", description: "Leveraging cutting-edge technology, we deliver solutions that drive success and competitiveness." },
                { number: "04", title: "24/7 Support", description: "Our team provides round-the-clock support, ensuring assistance whenever needed." }
              ].map((item, index) => (
                <div key={index} className="para1 my-3 mx-4">
                  <div className="box1">
                    <h2 className="h2-Us">{item.number}</h2>
                    <h3 className="h3-Us" style={{ color: '#fff', position: 'relative', bottom: '20px', marginLeft:'5%' }}>
                      {item.title}<span style={{ color: 'orangered' }}>.</span>
                    </h3>
                  </div>
                  <span className="span-Us" style={{ color: 'gray' }}>{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="secondContent container" style={{marginLeft:'4%', marginTop:'4%',marginBottom:'1%'}}>
            <header>
              <h2 className="h3title" style={{ color: 'white', fontSize: '2.75rem' }}>
                Technologies We Work With<span style={{ color: 'orangered', fontSize:'20px' }}>.</span>
              </h2>
            </header>

            {/* Navigation Tabs */}
            <section className="smallNav" aria-label="Technology categories">
              <ul className="nav nav-underline">
                {["Frontend", "Backend", "Database", "Mobile"].map((tab, idx) => (
                  <li key={tab} className="nav-item">
                    <NavLink
                      className="nav-link1"
                      to={`#${tab.toLowerCase()}`}
                      onClick={() => setShowTab(`tab${idx + 1}`)}
                      aria-current={showTab === `tab${idx + 1}` ? "page" : undefined}
                    >
                      {tab}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tabs Content */}
            <div className="tabs" role="tabpanel">
              {showTab === "tab1" && <Technology1 />}
              {showTab === "tab2" && <Technology2 />}
              {showTab === "tab3" && <Technology3 />}
              {showTab === "tab4" && <Technology4 />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Us
