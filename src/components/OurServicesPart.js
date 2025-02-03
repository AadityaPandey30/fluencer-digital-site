import React, { useEffect } from "react";
import website from "./Our Services/Website Development/BACK-END.png";
import website1 from "./Our Services/Website Development/CUSTOM SOFTWARE.png";
import website2 from "./Our Services/Website Development/E-COM.png";
import website3 from "./Our Services/Website Development/FRONT-END.png";
import website4 from "./Our Services/Website Development/PWA.png";
import website5 from "./Our Services/Website Development/SAAS.png";
import software from "./Our Services/Software Development/software-img.png";
// import { useInView } from 'react-intersection-observer';
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const OurServicesPart = () => {
  // for animation
  //  const { ref: myRef, inView: myElementIsVisible } = useInView();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Software Development Fluencer Digital</title>
        <meta name="description" content="" />
      </Helmet>
      {/* Second part */}
      <div>
        <div className="Back-img-Service">
          <div className="img-back">
            <div style={{ margin: "auto", width: "fit-content" }}>
              <img src={software} alt="Custom Software Development Service" />
            </div>
          </div>
          <h2
            style={{
              color: "#fff",
              WebkitTextStroke: "0px",
              textAlign: "center",
            }}
          >
            Custom Software Development
            <span style={{ color: "orangered", fontSize: "2.8rem" }}>.</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Custom Software Development */}
          <div className="col" data-aos="slide-left">
            <img
              src={website3}
              className="card-img1-top"
              alt="Custom Software Solutions"
            />
            <div
              className="web card"
              style={{ minHeight: "30vh", marginTop: "10%" }}
            >
              <div className="card-body1">
                <h4 className="card-title1">Custom Software Development</h4>
                <p className="card-text1" style={{ color: "gray" }}>
                  We create tailored software solutions designed to address your
                  unique business needs, delivering efficient tools for
                  operational success.
                </p>
              </div>
            </div>
          </div>

          {/* Software Consulting */}
          <div className="col" data-aos="slide-left">
            <img
              src={website}
              className="card-img1-top"
              alt="Software Consulting Services"
            />
            <div
              className="web card"
              style={{ minHeight: "30vh", marginTop: "10%" }}
            >
              <div className="card-body1">
                <h4 className="card-title1">Software Consulting</h4>
                <p className="card-text1" style={{ color: "gray" }}>
                  Our consultants provide strategic insights to help you make
                  informed choices about software requirements, technology
                  options, and development methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Legacy Software Modernization */}
          <div className="col" data-aos="slide-left">
            <img
              src={website5}
              className="card-img1-top"
              alt="Legacy Software Modernization"
            />
            <div
              className="web card"
              style={{ minHeight: "30vh", marginTop: "10%" }}
            >
              <div className="card-body1">
                <h4 className="card-title1">Legacy Software Modernization</h4>
                <p className="card-text1" style={{ color: "gray" }}>
                  We upgrade outdated software systems to ensure compatibility
                  with the latest technologies, improving performance and
                  security standards.
                </p>
              </div>
            </div>
          </div>

          {/* API Integration Services */}
          <div className="col" data-aos="slide-right">
            <img
              src={website4}
              className="card-img1-top"
              alt="API Integration Services"
            />
            <div
              className="web card"
              style={{ minHeight: "30vh", marginTop: "10%" }}
            >
              <div className="card-body1">
                <h4 className="card-title1">API Integration Services</h4>
                <p className="card-text1" style={{ color: "gray" }}>
                  Our team integrates third-party APIs and systems seamlessly,
                  enhancing your software's functionality and enabling improved
                  connectivity with other platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Software Maintenance and Support */}
          <div className="col" data-aos="slide-right">
            <img
              src={website2}
              className="card-img1-top"
              alt="Software Maintenance and Support"
            />
            <div
              className="web card"
              style={{ minHeight: "30vh", marginTop: "10%" }}
            >
              <div className="card-body1">
                <h4 className="card-title1">
                  Software Maintenance and Support
                </h4>
                <p className="card-text1" style={{ color: "gray" }}>
                  We provide ongoing maintenance and support to keep your custom
                  software up-to-date, secure, and optimized for maximum
                  performance.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Assurance Testing */}
          <div className="col" data-aos="slide-right">
            <img
              src={website1}
              className="card-img1-top"
              alt="Quality Assurance Testing"
            />
            <div
              className="web card"
              style={{ minHeight: "30vh", marginTop: "10%" }}
            >
              <div className="card-body1">
                <h4 className="card-title1">Quality Assurance Testing</h4>
                <p className="card-text1" style={{ color: "gray" }}>
                  We implement thorough testing and quality assurance processes
                  to ensure a flawless product, meeting your high standards and
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesPart;
