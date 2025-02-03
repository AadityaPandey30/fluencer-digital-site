import React, { useEffect } from "react";
import image1 from "./Contact Us.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_hp4bpsh"; // Replace with your service ID
    const publicKey = "YSDN2PdjTNg6qu6KA"; // Replace with your public key

    // Send email to the company
    emailjs
      .sendForm(serviceId, "template_5u0ou8m", e.target, publicKey) // Replace with your company template ID
      .then(
        (result) => {
          console.log("Company email sent:", result.text);
        },
        (error) => {
          console.log("Error sending company email:", error.text);
        }
      );

    // Send auto-reply to the client
    emailjs
      .sendForm(serviceId, "template_b07mxrg", e.target, publicKey) // Replace with your client template ID
      .then(
        (result) => {
          console.log("Client auto-reply sent:", result.text);
          alert(
            "We have received your message. Our team will contact you shortly!"
          );
        },
        (error) => {
          console.log("Error sending auto-reply email:", error.text);
          alert("Failed to send the email. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Contact Fluencer Digital</title>
        <meta name="description" content="Have questions or need assistance? Contact Fluencer Digital for innovative tech solutions, expert guidance, and seamless digital transformation." />
      </Helmet>
      <div className="mainContact cont">
        <div>
          <h2
            className="contact-heading"
            style={{
              color: "#fff",
              WebkitTextStroke: "0px",
              textAlign: "center",
            }}
          >
            Have a Question? Let's Chat
            <span style={{ color: "orangered", fontSize: "2.8rem" }}>.</span>
          </h2>
          <p style={{ color: "#fff", textAlign: "center", marginBottom: "4%" }}>
            Ready for digital transformation? Partner with Fluencer Digital
            today!
          </p>
        </div>
        <div className="contact">
          <div className="firstPart" data-aos="slide-left">
            <img
              style={{ width: "100%", marginRight: "30px" }}
              src={image1}
              alt="Contact Us"
            />
          </div>
          <div
            className="SecondPart"
            data-aos="slide-up"
            style={{ marginLeft: "25px" }}
          >
            <div>
              <h3
                className="h3title"
                style={{
                  color: "white",
                  fontSize: "2.30rem",
                  fontWeight: "400",
                }}
              >
                Contact Team Fluencer Digital
                <span style={{ color: "orangered", fontSize: "2.8rem" }}>
                  .
                </span>
              </h3>
            </div>
            <form className="row g-3" onSubmit={sendEmail}>
              <div className="form-floating mb-3 col-12">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Your Name"
                  name="from_name"
                  required
                />
                <label htmlFor="floatingInput">Your Name</label>
              </div>
              <div className="form-floating col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
                <label htmlFor="floatingEmail">Your Email Id</label>
              </div>
              <div className="form-floating col-md-6">
                <input
                  type="number"
                  className="form-control"
                  id="floatingNumber"
                  placeholder="Mobile Number"
                  name="number"
                  required
                />
                <label htmlFor="floatingNumber">Mobile No.</label>
              </div>
              <div className="form-floating col-12">
                <textarea
                  className="form-control"
                  id="floatingMessage"
                  placeholder="Tell us about your project..."
                  name="message"
                  rows="3"
                  required
                ></textarea>
                <label htmlFor="floatingMessage">Project Details</label>
              </div>
              <div className="col-12">
                <input
                  className="button"
                  type="submit"
                  value="Submit"
                  style={{ background: "transparent" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
