import { useRef, useEffect } from "react";
// import { BiLogoDiscordAlt } from "react-icons/bi";
// import Slider from "react-slick";
// import Ellipse24Img from "../assets/Ellipse24.png";
// import Ellipse25Img from "../assets/Ellipse25.png";
// import Ellipse20Img from "../assets/Ellipse20.png";
// import Ellipse21Img from "../assets/Ellipse21.png";
// import FeatureBlur from "../assets/FeatureBlur1.webp";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newHeroBG2 from "../assets/newHeroBG2.png";
import Ellipse5 from "../assets/Ellipse5.png";
import Ellipse6 from "../assets/Ellipse6.png";


import icon1 from "../assets/ico1.png";
import icon2 from "../assets/ico2.png";
import icon3 from "../assets/ico3.png";
import icon4 from "../assets/ico4.png";
import icon5 from "../assets/ico5.png";
import icon6 from "../assets/ico6.png";
import icon7 from "../assets/ico7.png";
import icon8 from "../assets/ico8.png";
import icon9 from "../assets/ico9.png";

import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";




function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="pt-16 bg-[#151d28]">

      <img
        src={newHeroBG2}
        className="absolute h-[full] w-[38%] top-[1700px] right-0 "
      />

      <img
        src={Ellipse5}
        className="absolute h-[full] opacity-50 w-[full] top-[900px]"
      />

      <img
        src={Ellipse6}
        className="absolute h-[full] w-[full] top-[2290px] z-1"
      />

      <img
        src={Frame1}
        className="absolute h-[full] w-[160px] top-[3060px] left-[44%] z-10"
      />

      <img
        src={Frame2}
        className="absolute h-[full] w-[160px] top-[3050px] left-[44%] z-1 opacity-60"
      />
     
      <div className="md:h-full flex items-center text-white mx-auto z-[100]">
        <div className="container  max-w-7xl mx-auto  mt-[140px]">

          <div className="flex flex-row justify-between items-center w-full z-[10000]">

              <div className="w-[27%]">
                <p className="font-poppins text-lg text-left font-normal bg-gradient-to-r from-[#009ACE] via-[#277cdd] to-[#2c6fe3] bg-clip-text text-transparent mb-3">LAYERDAPP FEATURES</p>
                <h1 className="font-poppins text-5xl text-left font-semibold  text-white leading-[64px]">LAYER SMART ACCOUNTS</h1>
              </div>

              <div className="w-[33%] h-[228px] bg-[#020916]/50 py-12 px-10 rounded-3xl  flex flex-col justify-between items-center">

                  <div className="flex items-center justify-start w-full ">
                      <div className="mr-4 w-[25%]">
                        <img src={icon1} className="w-full " alt="err"/>
                      </div>
                      <p className="font-poppins w-[80%] text-2xl text-white">Tool-Protocol Pairings</p>
                  </div>

                  <div className=" text-base leading-6 font-light text-white/70  mt-3">
                      <p>Explore innovate, Pair tools and protocols together</p>
                  </div>
              </div>


              <div className="w-[33%] h-[228px] bg-[#020916]/50 py-12 px-10 rounded-3xl flex flex-col justify-between items-center z-10 backdrop-blur">
              <div className="flex items-center justify-start w-full">
                <div className="mr-4 w-[25%]">
                  <img src={icon2} className="w-full" alt="err" />
                </div>
                <p className="font-poppins w-[80%] text-2xl text-white">Assets and Positions Abstract</p>
              </div>

              <div className="text-base leading-6 font-light text-white/70 mt-3">
                <p>Abstract your assets and positions from your EOA</p>
              </div>
            </div>
          </div>


          {/* //////////////////////////////////////////////////////////////////*/}


          <div className="flex flex-row justify-between items-center mt-8 w-full z-[10000]">

            <div className="w-[32%] h-[240px] bg-[#020916]/50 py-12 px-10 rounded-3xl  flex flex-col justify-between items-center">

              <div className="flex items-center justify-start w-full ">
                  <div className="mr-4 w-[25%]">
                    <img src={icon3} className="w-full " alt="err"/>
                  </div>
                  <p className="font-poppins w-[80%] text-2xl text-white">Batching and Complex Strategies</p>
              </div>

              <div className=" text-base leading-6 font-light text-white/70  mt-3">
                  <p>Batch transactions and enable complex strategies using multiple protocols</p>
              </div>
            </div>

            <div className="w-[32%] h-[240px] bg-[#020916]/50 py-12 px-10 rounded-3xl  flex flex-col justify-between items-center">

                <div className="flex items-center justify-start w-full ">
                    <div className="mr-4 w-[25%]">
                      <img src={icon4} className="w-full " alt="err"/>
                    </div>
                    <p className="font-poppins w-[80%] text-[23px] text-white">Transact on Multiple LSA Accounts</p>
                </div>

                <div className=" text-base leading-6 font-light text-white/70  mt-3">
                    <p>Explore Innovate, Pair tools and protocols together</p>
                </div>
            </div>


            <div className="w-[32%] h-[240px] bg-[#020916]/50 py-12 px-10 rounded-3xl flex flex-col justify-between items-center z-10 backdrop-blur">
              <div className="flex items-center justify-start w-full">
                  <div className="mr-4 w-[25%]">
                    <img src={icon5} className="w-full" alt="err" />
                  </div>
                  <p className="font-poppins w-[80%] text-2xl text-white">Assets and Add Multiple Authorities</p>
              </div>

              <div className="text-base leading-6 font-light text-white/70 mt-3">
                <p>Add Multiple authorities to give LSA control to users.</p>
              </div>
            </div>

            </div>

        </div>
      </div>

      {/* sebsection22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}

      <div className="md:h-full flex items-center text-white mx-auto mt-40 z-[10]">
        <div className="container px-4 py-4 max-w-7xl mx-auto">
          
          <div className=" items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 text-center font-medium bg-gradient-to-r from-[#009ACE] via-[#1372DD] to-[#1869F4] bg-clip-text text-transparent z-[1000]">
              LAYERDAPP FEATURES
            </h1>

            <h1 className="font-poppins text-center font-medium md:text-[50px] text-white md:text-center -mt-3 w-full ">
              INTERACT WITH MULTIPLE PROTOCOLS
            </h1>
          </div>

            <div className=" w-full flex">
              <div className="w-[415px] h-[240px] p-6 bg-[#020916]/50 flex flex-col justify-between items-center rounded-xl z-10">
                      <div className="w-full flex items-start justify-end">
                        <img src={icon6} alt="err"/>
                      </div>

                      <div className="w-full flex flex-col">
                        <h1 className="font-poppins text-[20px] text-white w-[70%]">Protocols Interoperability</h1>
                        <p className="text-base leading-6 font-light text-white/70 mt-3">Experience interoperability between protocols, hedge, leverage etc</p>
                      </div>
              </div>

              <div className="w-[415px] h-[220px] mt-10 p-6 bg-[#020916]/50 flex flex-col justify-between items-center rounded-xl ml-[33%]  z-10">
                      <div className="w-full flex items-start justify-end">
                        <img src={icon7} alt="err"/>
                      </div>

                      <div className="w-full flex flex-col">
                        <h1 className="font-poppins text-[20px] text-white w-[70%]">Flash Loans</h1>
                        <p className="text-base leading-6 font-light text-white/70 mt-3">Experience interoperability between protocols, hedge, leverage etc</p>
                      </div>
              </div>
            </div>



            <div className=" w-full flex mt-10">
              <div className="w-[375px] h-[250px] ml-6 p-6 bg-[#020916]/50 flex flex-col justify-between items-center rounded-xl  z-10">
                      <div className="w-full flex items-start justify-end">
                        <img src={icon8} alt="err"/>
                      </div>

                      <div className="w-full flex flex-col">
                        <h1 className="font-poppins text-[20px] text-white w-[70%]">Alternate frontend to Protocols</h1>
                        <p className="text-base leading-6 font-light text-white/70 mt-3">
                        Alternate frontend to multiple protocols, swap, lend and farm
                        </p>
                      </div>
              </div>

              <div className="w-[415px] h-[240px]  p-6 bg-[#020916]/50 flex flex-col justify-between items-center rounded-xl ml-[33%]  z-10">
                      <div className="w-full flex items-start justify-end">
                        <img src={icon9} alt="err"/>
                      </div>

                      <div className="w-full flex flex-col">
                        <h1 className="font-poppins text-[20px] text-white ">Manage Multiple Protocols</h1>
                        <p className="text-base leading-6 font-light text-white/70 mt-3">Batch transactions and enable complex strategies using multiple protocols</p>
                      </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
