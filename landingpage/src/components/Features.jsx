import { useRef, useEffect, useState } from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse24Img from "../assets/Ellipse24.png";
import Ellipse25Img from "../assets/Ellipse25.png";
import Ellipse20Img from "../assets/Ellipse20.png";
import Ellipse21Img from "../assets/Ellipse21.png";
import FeatureBlur from "../assets/FeatureBlur1.webp";

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
    <section className="z-100 pt-16 bg-[#151D29] z-100">
      <img src={FeatureBlur} className="absolute" />

      <div className="md:h-full flex items-center text-white mx-auto">
        <div className="container px-4 py-4 max-w-6xl mx-auto">
          <div className=" items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 text-left font-normal ">
              LAYERDAPP FEATURES
            </h1>

            <h1 className="font-poppins text-6xl text-left font-semibold  md:text-[68px] text-white md:text-left">
              Layer Smart Accounts
            </h1>

            <img
              src={Ellipse24Img}
              className="absolute bg-fixed left-0 sm:right-[1200px] lg:right-[1200px] xl:right-[1200px]  top-[1900px] h-[567px] w-[200px] sm:w-[200px] lg:w-[200px] xl:w-[200px]"
            />

            <img
              src={Ellipse25Img}
              className="absolute bg-fixed left-0 sm:right-[1060px] lg:right-[1060px] xl:right-[1060px]  top-[1900px] h-[567px] w-[350px] sm:w-[350px] lg:w-[350px] xl:w-[350px]"
            />
          </div>

          <div className="flex flex-wrap -m-4 mt-16 ">


            <div className="group p-2 sm:w-1/2 lg:w-1/3">


              <div className="h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                  <img src="../../Scales.png" />
                </div>
                <div className="mt-6 text-center font-medium text-[21px] text-white ">
                  Multiple Accounts, one EOA
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-3  text-center ">
                    Manage your assets, positions across multiple protocols
                    effortlessly from a single intuitive interface. No need to
                    manage gas on multiple wallets
                  </p>
                </div>
              </div>


            </div>

            <div className="group p-2 sm:w-1/2 lg:w-1/3 ">
            <div className="h-full bg-[#020916] bg-opacity-[32%] rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                <img src="../../Interactive.png" />
                </div>
                <div className="mt-6 text-center font-medium text-[21px] hover:text-white text-white">
                Interact with Multiple Protocols
                </div>
                <div className="p-6  hover:text-white transition duration-300 ease-in">
                <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-3 text-center ">
                  Interact with multiple protocols and Batch their transactions together.
                  </p>
                </div>
              </div>
            </div>


            <div className="group p-2 sm:w-1/2 lg:w-1/3 ">

              <div className="h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                <img src="../../Interchangeability.png" />
                </div>
                <div className="mt-6 text-center font-medium text-[21px] text-white">
                Multi User Control
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-3 text-center ">
                  Add multiple authorities to the accounts and let your team manage efficiently.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>






      <div className="md:h-full flex items-center text-white mt-40">
        <div className="container px-4 py-4 mx-auto max-w-6xl">
          <div className="items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 font-normal text-right">
              LAYERDAPP FEATURES
            </h1>
            <h1 className="font-poppins text-6xl font-semibold text-right md:text-[65px] text-white md:text-right">
              Interact With Multiple Protocols
            </h1>

            <img
              src={Ellipse21Img}
              className="absolute right-0 bg-fixed   top-[2600px] h-[567px] w-[200px] sm:w-[200px] lg:w-[200px] xl:w-[200px]"
            />

            <img
              src={Ellipse20Img}
              className="absolute right-0 bg-fixed   top-[2600px] h-[567px] w-[350px] sm:w-[350px] lg:w-[350px] xl:w-[350px]"
            />
          </div>

          <div className="flex flex-wrap -m-4">


          <div className="group p-2 sm:w-1/2 lg:w-1/3 ">
              <div className="h-full bg-[#020916] bg-opacity-[32%] rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                  <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                  <img src="../../Togetherness.png" />
                  </div>
                  <div className="mt-6 text-center font-medium text-[21px] hover:text-white text-white">
                  DeFi Without Borders
                  </div>
                  <div className="p-6  hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Seamlessly navigate and transact across the vast DeFi landscape, from lending on Compound to trading on Uniswap, all in one place.
                    </p>
                  </div>
                </div>
            </div>

            <div className="group p-2 sm:w-1/2 lg:w-1/3 ">
              <div className="h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                <img src="../../Arrows.png" />
                </div>
                <div className="mt-6 text-center font-medium text-[21px] text-white">
                Your alternate frontend to Defi
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Bridge the gaps between protocols without ever leaving LayerDapp. Whether swapping, lending, or farming, do it all from one unified platform.
                  </p>
                </div>
              </div>
            </div>


            <div className="group p-2 sm:w-1/2 lg:w-1/3 ">
              <div className="h-full bg-[#020916] bg-opacity-[32%] rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                  <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                  <img src="../../Solution.png" />
                  </div>
                  <div className="mt-5 text-center font-medium text-[21px] hover:text-white text-white">
                  Less fragmentation and more interoperability
                  </div>
                  <div className="p-6  hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-3 -mt-2 text-center ">
                  Bringing the best of protocols, improving discoverability, interoperability and enabling complex strategies like Flash Loans, Leverage.
                    </p>
                  </div>
                </div>
            </div>


          </div>
        </div>
      </div>

      {/* DIFFUSION VALUT SECTUON */}
      <div className="md:h-full grid grid-rows-1 z-100  text-white mt-20">
        <div className="container px-4 py-4 mx-auto max-w-6xl">



          <div className=" grid grid-cols-2 h-[330px] mb-10 mt-10 ml-1 sm:grid-cols-2">
          <h1 className="font-poppins text-8xl text-left font-semibold md:text-8xl text-white md:text-left pl-10 pt-12 leading-[120px]  ">
            Diffusion{" "}
            <button className="absolute -ml-20 font-normal text-sm px-3 rounded-full py-[10px]  bg-[#EA2315] ">
              Comming soon
            </button>
            <div style={{ display: 'inline-block', marginTop: '40px' }}>
              <span >Vault</span>
            </div>
          </h1>

            <div className="sm:w-full lg:w-full grid ">
              
            <div className="h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                <img src="../../Playground.png" />
                </div>
                <div className="mt-6 text-center font-medium text-[21px] text-white">
                Your playground
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Create numerous strategies that can be built on top of multiple legacy protocols and create strategies like hedging, leverage and more.
                  </p>
                </div>
              </div>


            </div>
          </div>







          <div className=" grid grid-cols-2 h-[330px] mb-10 mt-10 ml-1 sm:grid-cols-2">
          <div className="p-4 sm:w-full lg:w-full grid ">
              
              <div className="h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                  <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                  <img src="../../Idea.png" />
                  </div>
                  <div className="mt-6 text-center font-medium text-[21px] text-white">
                  Custom Logic
                  </div>
                  <div className="p-6 hover:text-white transition duration-300 ease-in">
                    <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                    Our contracts can handle your custom logic that you can build using Typescript.
                    </p>
                  </div>
                </div>
              </div>

            <div className=" p-4 sm:w-full lg:w-full grid ">
              
            <div className="h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">
                <div className="w-16 h-16 mt-5  text-2xl flex align-middle justify-center items-center shadow-sm  mx-auto">
                <img src="../../Finance.png" />
                </div>
                <div className="mt-6 text-center font-medium text-[21px] text-white">
                Everything Defi
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Use multiple protocols or choose specific assets, manual or automated build anything you like.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Features;

{
  /* <div class="group mx-2 rounded-3xl relative cursor-pointer p-4 sm:w-1/2 lg:w-1/3 overflow-hidden bg-white  pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-3xl sm:px-10 mt-5">
              <center>
                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gray-500 dark:bg-black text-white transition-all duration-300 group-hover:scale-[9]"></span>
              </center>
              <div class="relative z-10 text-center items-center ">
                <center>
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-10 w-10 text-white transition-all"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                </center>
                <div className="mt-5 text-center text-2xl text-white hover:text-white">
                  Create Multiple Account
                </div>
                <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>
                    Perfect for learning how the framework works, prototyping a
                    new idea, or creating a demo to share online.
                  </p>
                </div>
              </div>
            </div> */
}
