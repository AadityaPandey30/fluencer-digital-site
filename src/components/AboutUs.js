import React from "react";
import sarthak from "./sarthak.png";

const AboutUs = () => {
  return (
    <div>
      <div class="flex flex-col items-center gap-3 self-stretch mt-[14%] mb-[8%]">
        <span class="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
          ABOUT FLUENCER DIGITAL
        </span>
        <span class="max-w-5xl font-bold text-[64px] leading-[72px] text-center capitalize text-white">
          Your Trusted Partner in Turning Ideas Into Innovation
        </span>
      </div>
      <div class=" flex flex-col gap-20 px-[162px] py-[150px]">
        <div class="flex justify-center items-center gap-[74px] self-stretch">
          <div class="flex flex-col gap-14 self-stretch w-[761px]">
            <div class="flex flex-col gap-3 self-stretch">
              <span class="font-bold text-[24px] leading-[34px] text-[#ed1c24]">
                ABOUT US
              </span>
              <span class="font-bold text-5xl capitalize text-white">
                Innovating for the Future
              </span>
            </div>
            <div className="">
              <div class="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[4%] py-[2%] rounded-lg w-fit">
                <button class="font-semibold text-xl text-white">
                  Explore Our Services →
                </button>
              </div>
            </div>
          </div>
          <span class="font-normal text-xl leading-[34px] text-white max-w-2xl">
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

      <div class="flex flex-col items-center gap-20 bg-white px-[2%] py-[4%]">
        <div class="flex flex-col justify-center items-center gap-8 self-stretch">
          <div class="flex flex-col items-center gap-3 self-stretch mb-[4%]">
            <span class="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
              MEET THE FOUNDERS
            </span>
            <span class="font-bold text-5xl leading-[72px] text-center capitalize text-[#191919]">
              The Minds Behind Fluencer Digital
            </span>
          </div>
        </div>

        <div class="flex items-center gap-16">
          <div class="flex flex-col gap-[60px] grow">
            <div class="flex flex-col gap-6 self-stretch">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-[42px] leading-[52px] text-[#191919]">
                  Yash Kandoi
                </span>
              </div>
              <span class="font-normal text-3xl text-[#1e1e1e]">
                A strategic leader with a deep understanding of technology and
                business, Yash bridges the gap between vision and execution. His
                expertise in scaling startups and delivering innovative
                solutions drives Fluencer Digital’s mission to empower
                businesses.
              </span>
            </div>
          </div>
          <img class="w-[40%]" src={sarthak} alt=""></img>
        </div>

        <div class=" flex items-center gap-16">
          <img class="w-[40%]" src={sarthak} alt="Sarthak"></img>
          <div class="flex flex-col gap-[60px] grow">
            <div class="flex flex-col gap-6 self-stretch">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-[42px] leading-[52px] text-[#191919]">
                  Sarthak Behera
                </span>
              </div>
              <span class="font-normal text-[32px] text-[#1e1e1e] max-w-4xl">
                As an expert in project management, Sarthak ensures every
                initiative is executed flawlessly, transforming complex ideas
                into tangible results. His ability to manage projects with
                precision has made Fluencer Digital a trusted partner for
                startups and businesses alike.
              </span>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[25px] py-[15px] rounded-lg">
          <button class="font-semibold text-xl text-white">
            Learn More About Our Team →
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center gap-20 px-[6%] py-[6%]">
        <div class="flex flex-col justify-center items-center gap-8">
          <div class="flex flex-col items-center gap-3 self-stretch">
            <span class="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
              OUR VALUES
            </span>
            <span class="font-bold text-[64px] leading-[72px] text-center capitalize text-white">
              what drives us
            </span>
          </div>
          <span class="font-normal text-[24px] leading-[34px] text-center text-[#bebebe]">
            At Fluencer Digital, we prioritize our team's growth and well-being,
            fostering a culture that empowers personal development, professional
            excellence, and long-term success through continuous support and{" "}
          </span>
        </div>
        <div class="flex flex-col gap-6 self-stretch">
          <div class="flex justify-center gap-5 self-stretch">
            <div class="flex flex-col items-center gap-6 grow bg-[#131313] p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
                <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-6 rounded-[100px]"></div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Innovation
                  </span>
                  <span class="font-normal text-[24px] leading-[34px] text-center text-[#bebebe]">
                    We drive innovation by leveraging cutting-edge technologies
                    and creative solutions, empowering businesses to stay ahead
                    of the curve and achieve sustainable growth in an
                    ever-evolving digital{" "}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between items-center self-stretch grow bg-[#131313] p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
                <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-6 rounded-[100px]">
                  <div class="w-8 h-8">
                    <svg class="w-[26.666671752929688px] h-[24.0000057220459px] text-[#ff111b]"></svg>
                  </div>
                </div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Collaboration
                  </span>
                  <span class="font-normal text-[24px] leading-[34px] text-center text-[#bebebe]">
                    We foster collaboration through open communication,
                    teamwork, and shared goals, creating an environment where
                    ideas thrive, innovation flourishes, and meaningful
                    solutions are developed together for lasting success
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-5 self-stretch">
            <div class="flex flex-col justify-between items-center self-stretch grow bg-[#131313] p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
                <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-6 rounded-[100px]">
                  <div class="w-8 h-8">
                    <svg class="w-[28.000024795532227px] h-7 text-[#ff111b]"></svg>
                  </div>
                </div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Excellence
                  </span>
                  <span class="font-normal text-[24px] leading-[34px] text-center text-[#bebebe]">
                    We strive for excellence by delivering high-quality
                    solutions, exceeding expectations, and continuously
                    improving to ensure our clients achieve outstanding results
                    and long-term success in a competitive digital world
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-6 grow bg-[#131313] p-10 rounded-2xl border-2 border-solid basis-1/2">
              <div class="flex flex-col items-center gap-6 self-stretch">
                <div class="w-[72px] h-[72px] bg-[#e7ebfc] p-6 rounded-[100px]">
                  <div class="w-8 h-8">
                    <svg class="w-[25.938995361328125px] h-[26.666669845581055px] text-[#ff111b]"></svg>
                  </div>
                </div>
                <div class="flex flex-col gap-2 self-stretch">
                  <span class="font-bold text-[28px] leading-[34px] text-center text-white">
                    Adaptability
                  </span>
                  <span class="font-normal text-[24px] leading-[34px] text-center text-[#bebebe]">
                    We embrace adaptability by staying agile and responsive to
                    change, leveraging innovative strategies and technologies to
                    deliver solutions that evolve with our clients' dynamic
                    business needs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[25px] py-[15px] rounded-lg">
          <button class="font-semibold text-xl text-white">
            Discover Our Philosophy →
          </button>
          <svg class="w-5 h-2.5 text-white"></svg>
        </div>
      </div>

      <div class=" flex flex-col gap-2 px-[2%] py-[5%] max-w-7xl m-auto">
        <div class="flex flex-col items-center gap-20 self-stretch px-[162px] py-[150px] rounded-2xl border-2 border-solid">
          <div class=" flex flex-col justify-center items-center gap-8">
            <div class="flex flex-col items-center gap-3 self-stretch">
              <span class="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
                WHY CHOOSE US
              </span>
              <span class="font-bold text-[64px] leading-[72px] text-center capitalize text-white">
                what sets us apart
              </span>
            </div>
          </div>
          <span class="font-normal text-2xl text-center text-[#bebebe]">
            We understand the challenges of building a product from scratch,
            especially for non-tech founders. That’s why we’ve created a
            streamlined, transparent process that ensures your vision becomes a
            reality without unnecessary stress. With a team of experts by your
            side, you can focus on what matters most – growing your business.
            Our expertise, combined with a commitment to innovation and customer
            success, positions us as the go-to tech partner for startups and
            businesses aiming to create world-class products.
          </span>
          <div class="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[25px] py-[15px] rounded-lg">
            <button class="font-semibold text-xl text-white">
              See How We Work →
            </button>
          </div>
        </div>
      </div>

      <div class=" flex items-center gap-20 bg-[#060606] p-20">
        <div class="flex flex-col gap-6 grow max-w-3xl">
          <span class="font-bold text-[52px] leading-[62px] text-white">
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
        <div class="flex gap-4">
          <div class="flex justify-center items-center gap-2.5 px-[25px] py-[15px] rounded-lg border border-solid border-white">
            <button class="font-semibold text-xl text-white">Contact Us</button>
          </div>
          <div class="flex justify-center items-center gap-2.5 ">
            <button class="font-semibold text-xl text-white px-[25px] py-[15px] bg-[#ed1c24] h-fit rounded-lg">
              Start Your Journey Today →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
