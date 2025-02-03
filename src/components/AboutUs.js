import React from "react";
import sarthak from "./sarthak.png";
import yash from "./yash.jpg"
import { Link } from "react-router-dom";
import bulb from "./bulb.png"
import diamond from "./diamond.png"
import rocket from "./rocket-launch.png"
import gear from "./mdi_gear.png"
import Helmet from "react-helmet"



const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Fluencer Digital</title>
        <meta name="description" content="Discover how Fluencer Digital empowers startups and businesses with cutting-edge technology solutions. Meet our founders - Yash Kandoi and Sarthak." />
      </Helmet>
      <div class="flex flex-col items-center gap-3 self-stretch mt-[55%] md:mt-[8%] px-3 pb-[8%]">
        <span class="font-bold text-[20px] md:text-[24px] leading-[34px] text-center text-[#ed1c24]">
          ABOUT FLUENCER DIGITAL
        </span>
        <span class="max-w-7xl font-bold text-[32px] md:text-[64px] leading-[36px] md:leading-[72px] text-center capitalize text-white">
          Your Trusted Partner in Turning Ideas Into Innovation
        </span>
      </div>
      <div class="flex flex-col gap-20 px-[4%] md:px-[9%] pb-[10%]">
        <div class=" md:flex justify-center items-center md:gap-[74px] self-stretch">
          <div class="flex flex-col md:gap-6 self-stretch w-[761px]">
            <div class="flex flex-col gap-3 self-stretch">
              <span class="font-bold text-[18px] md:text-[24px] leading-[34px] text-[#ed1c24] mt-[20%] md:mt-0">
                ABOUT US
              </span>
              <span class="font-bold text-3xl md:text-5xl capitalize text-white">
                Innovating for the Future
              </span>
            </div>
            <div className="">
            <Link to="/ourservices">
              <div class="bg-[#ed1c24] px-[2%] md:px-[4%] py-[1%] md:py-[2%] rounded-lg w-fit my-[2%] md:my-0 cursor-pointer">
                <button class="font-semibold text-md md:text-xl text-white">
                  Explore Our Services →
                </button>
              </div>
              </Link>
            </div>
          </div>
          <span class="font-normal text-lg md:text-xl leading-[34px] text-white max-w-2xl">
            Fluencer Digital specializes in empowering non-tech founders and
            businesses to bring their ideas to life. As a full-service
            technology partner, we focus on MVP development, innovative product
            solutions, and long-term project support. Whether you’re launching
            your first product or scaling a successful business, Fluencer
            Digital ensures every step of the journey is seamless, strategic,
            and impactful. Our mission is to help you transform ideas into
            scalable, market-ready solutions that drive growth and innovation.
          </span>
        </div>
      </div>

      <div class="flex flex-col items-center gap-20 bg-white px-[2%] py-[12%] md:py-[4%]">
        <div class="flex flex-col justify-center items-center gap-8 self-stretch max-w-7xl">
          <div class="flex flex-col items-center gap-3 self-stretch mb-[4%]">
            <span class="font-bold text-[24px] leading-[22px] md:leading-[34px] text-center text-[#ed1c24]">
              MEET THE FOUNDERS
            </span>
            <span class="font-bold text-5xl leading-[60px] md:leading-[72px] text-center capitalize text-[#191919]">
              The Minds Behind Fluencer Digital
            </span>
          </div>
        </div>

        <div class="md:flex md:flex-row-reverse px-4 items-center gap-16 max-w-7xl">
          <img
            class="w-full md:w-[40%]"
            src={yash}
            alt="Fluencer Founder"
          ></img>
          <div class="flex flex-col gap-[5%] grow">
            <div class="flex flex-col gap-1 md:gap-6 self-stretch">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-[28px] md:text-[42px] leading-[52px] text-[#191919] mt-2 md:my-0">
                  Yash Kandoi
                </span>
              </div>
              <span class="font-normal text-[16px] md:text-[32px] text-[#1e1e1e] max-w-4xl">
                A strategic leader with a deep understanding of technology and
                business, Yash bridges the gap between vision and execution. His
                expertise in scaling startups and delivering innovative
                solutions drives Fluencer Digital’s mission to empower
                businesses.
              </span>
            </div>
          </div>
        </div>

        <div class="md:flex items-center gap-16  px-4  max-w-7xl">
          <img
            class="w-full md:w-[40%]"
            src={sarthak}
            alt="Fluencer Co-Founder"
          ></img>
          <div class="flex flex-col gap-[5%] grow">
            <div class="flex flex-col gap-1 md:gap-6 self-stretch">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-[28px] md:text-[42px] leading-[52px] text-[#191919] mt-2 md:my-0">
                  Sarthak Behera
                </span>
              </div>
              <span class="font-normal text-[16px] md:text-[32px] text-[#1e1e1e] max-w-4xl">
                As an expert in project management, Sarthak ensures every
                initiative is executed flawlessly, transforming complex ideas
                into tangible results. His ability to manage projects with
                precision has made Fluencer Digital a trusted partner for
                startups and businesses alike.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-20 px-[6%] py-[6%] max-w-7xl m-auto">
        <div class="flex flex-col justify-center items-center gap-8 my-12 md:my-6">
          <div class="flex flex-col items-center gap-3 self-stretch">
            <span class="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
              OUR VALUES
            </span>
            <span class="font-bold text-[64px] leading-[60px] md:leading-[72px] text-center capitalize text-white">
              what drives us
            </span>
          </div>
          <span class="font-normal text-[20px] md:text-[24px] leading-[34px] text-center text-[#bebebe]">
            At Fluencer Digital, we prioritize our team's growth and well-being,
            fostering a culture that empowers personal development, professional
            excellence, and long-term success through continuous support and{" "}
          </span>
        </div>
        <div class="flex flex-col gap-6 self-stretch">
          <div class="flex flex-col md:flex-row justify-center gap-4 self-stretch">
            <div class="flex flex-col items-center gap-6 grow bg-[#131313] p-4 md:p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
                <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-3 md:p-6 rounded-[100px]"><img src={bulb} alt="icon" className="m-[10%]"/></div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Innovation
                  </span>
                  <span class="font-normal text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-center text-[#bebebe]">
                    We drive innovation by leveraging cutting-edge technologies
                    and creative solutions, empowering businesses to stay ahead
                    of the curve and achieve sustainable growth in an
                    ever-evolving digital{" "}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between items-center self-stretch grow bg-[#131313]  p-4 md:p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
              <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-3 md:p-6 rounded-[100px]"><img src={diamond} alt="icon" className="m-[10%]"/></div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Excellence
                  </span>
                  <span class="font-normal text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-center text-[#bebebe]">
                    We strive for excellence by delivering high-quality
                    solutions, exceeding expectations, and continuously
                    improving to ensure our clients achieve outstanding results
                    and long-term success in a competitive digital world
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-center gap-4 self-stretch">
            <div class="flex flex-col items-center gap-6 grow bg-[#131313] p-4 md:p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
              <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-3 md:p-6 rounded-[100px]"><img src={rocket} alt="icon" className="m-[10%]"/></div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Adaptability
                  </span>
                  <span class="font-normal text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-center text-[#bebebe]">
                    We embrace adaptability by staying agile and responsive to
                    change, leveraging innovative strategies and technologies to
                    deliver solutions that evolve with our clients' dynamic
                    business needs{" "}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between items-center self-stretch grow bg-[#131313]  p-4 md:p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
              <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-3 md:p-6 rounded-[100px]"><img src={gear} alt="icon" className="m-[10%]"/></div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Collaboration
                  </span>
                  <span class="font-normal text-[18px] md:text-[24px] leading-[28px] md:leading-[34px] text-center text-[#bebebe]">
                    We foster collaboration through open communication,
                    teamwork, and shared goals, creating an environment where
                    ideas thrive, innovation flourishes, and meaningful
                    solutions are developed together for lasting success
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 px-[2%] py-[5%] max-w-7xl m-auto">
        <div class="flex flex-col items-center gap-10 md:gap-20 self-stretch p-[8%] rounded-2xl border-2 border-solid my-12 mx-2">
          <div class=" flex flex-col justify-center items-center gap-8">
            <div class="flex flex-col items-center gap-3 self-stretch">
              <span class="font-bold text-[20px] md:text-[24px] leading-[34px] text-center text-[#ed1c24]">
                WHY CHOOSE US
              </span>
              <span class="font-bold text-[54px] md:text-[64px] leading-[72px] text-center capitalize text-white">
                what sets us apart
              </span>
            </div>
          </div>
          <span class="font-normal text-md md:text-2xl text-center text-[#bebebe]">
            We understand the challenges of building a product from scratch,
            especially for non-tech founders. That’s why we’ve created a
            streamlined, transparent process that ensures your vision becomes a
            reality without unnecessary stress. With a team of experts by your
            side, you can focus on what matters most – growing your business.
            Our expertise, combined with a commitment to innovation and customer
            success, positions us as the go-to tech partner for startups and
            businesses aiming to create world-class products.
          </span>
          <Link to="/ourWorks">
          <div class="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[25px] py-[15px] rounded-lg">
            <button class="font-semibold text-xl text-white">
              Sample Works →
            </button>
          </div>
          </Link>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-left md:items-center gap-20 bg-[#060606] p-4 md:p-20 max-w-7xl m-auto">
        <div class="flex flex-col gap-6 grow max-w-3xl">
          <span class="font-bold  text-[42px] md:text-[52px] leading-[62px] text-white">
            Let’s Build Something Extraordinary
          </span>
          <span class="font-normal text-[24px] leading-[34px] text-[#bebebe]">
            We’re here to make your ideas happen. Whether you’re just starting
            out or looking to take your product to the next level, we have the
            tools, expertise, and passion to help you succeed. Join Fluencer
            Digital and take the first step toward creating innovative,
            market-leading solutions.
          </span>
        </div>
        <div class="flex flex-col gap-4">
        <Link to="/mainContact">
          <div class="flex justify-center items-center gap-2.5">
          <button class="font-semibold text-xl text-white px-[25px] py-[15px] rounded-lg border border-solid border-white w-full">Contact Us</button>
          </div>
          </Link>
          <Link to="/mainContact">
          <div class="flex justify-center items-center gap-2.5">
          <button class="font-semibold text-xl text-white px-[25px] py-[15px] bg-[#ed1c24] h-fit rounded-lg w-full">
              Start Your Journey Today
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
