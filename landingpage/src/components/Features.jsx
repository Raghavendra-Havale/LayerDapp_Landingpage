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
import { FcConferenceCall, FcServices, FcMindMap, FcMultipleSmartphones, FcWorkflow, FcProcess, FcDataConfiguration, FcIdea, FcTodoList, FcSupport } from "react-icons/fc";

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

      <div class="md:h-full flex items-center text-white mx-auto">
        <div class="container px-4 py-4 max-w-6xl mx-auto">
          <div className=" items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 text-left font-normal ">
              LAYERDAPP FEATURES
            </h1>

            <h1 className="font-poppins text-6xl text-left font-semibold  md:text-6xl text-white md:text-left">
              Create LSA
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

          <div class="flex flex-wrap -m-4 ">
            <div class="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <span>
                <FcConferenceCall/>
                </span>
                </div>
                <div className="mt-5 text-center font-medium text-2xl text-white hover:text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal mb-3 text-center">
                    Create multiple accounts linked to one EOA, no need to
                    transfer gas to multiple wallets
                  </p>
                </div>
              </div>
            </div>
            <div class="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcServices/>
                </div>
                <div className="mt-5 text-center font-medium text-2xl hover:text-white text-white">
                  Multiple User Control
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    Add multiple authorities to the accounts and let your team
                    manage efficiently
                  </p>
                </div>
              </div>
            </div>
            <div class="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcMindMap />
                </div>
                <div className="mt-5 h-[40px] text-center font-medium mx-1 text-2xl hover:text-white text-white">
                  Multiple protocol interactions
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    Interact with multiple protocols easily and with our
                    technology batch and interact with them together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:h-full flex items-center text-white mt-56">
        <div class="container px-4 py-4 mx-auto max-w-6xl">
          <div className="items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 font-normal text-right ">
              LAYERDAPP FEATURES
            </h1>
            <h1 className="font-poppins text-6xl font-semibold text-right md:text-6xl text-white md:text-right">
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

          <div class="flex flex-wrap -m-4">
            <div class="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-700 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcMultipleSmartphones />
                </div>
                <div className="mt-5 h-[55px] text-center font-medium text-2xl hover:text-white text-white">
                  Multiple accounts & possibilities
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    Using multiple accounts you can have multiple positions
                    using the same EOA
                  </p>
                </div>
              </div>
            </div>
            <div class="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-700 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcWorkflow />
                </div>
                <div className="mt-5 h-[50px] text-center font-medium hover:text-white text-2xl text-white">
                  Why alternate frontend?
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    Its not just a alternate frontend but also using proxy
                    contracts we can enable unique strategies like leverage.
                  </p>
                </div>
              </div>
            </div>
            <div class="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500  rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcProcess />
                </div>
                <div className="mt-5 text-center font-medium hover:text-white text-2xl text-white">
                  Less fragmentation and more interoperability
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    We are improving discoverability and usage of protocols and
                    also enabling strategies that protocols are enabled for like
                    FLASH LOANS, LEVERAGE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIFFUSION VALUT SECTUON */}
      <div class="md:h-full grid grid-rows-1 z-100  text-white mt-20">
        <div class="container px-4 py-4 mx-auto max-w-6xl">
          <div className=" grid grid-cols-2 h-[330px] mb-4 mt-10 ml-1 sm:grid-cols-2">
            <h1 className="font-poppins  text-8xl text-left font-semibold  md:text-7xl text-white md:text-left">
              Diffusion{" "}
              <button className="absolute  -ml-20 font-normal text-sm px-2 rounded-full py-2 bg-red-500 tex">
                Comming soon
              </button>{" "}
              <br /> Vault
            </h1>
            <div class="p-4  sm:w-full lg:w-full grid hover:text-white">
              <div class="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div class="w-20 h-20 mt-5 group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcDataConfiguration />
                </div>
                <div className="mt-5 z-100 text-center font-medium text-2xl hover:text-white text-white">
                  Strategy management Layer
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    We are building a strategy management layer that enables
                    strategy manager to create manual/automated strategies using
                    multiple protocols
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div className="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcIdea />
                </div>
                <div className="mt-5 hover:text-white font-medium text-center text-2xl text-white">
                  Logic Layer
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    In short, what you want to do on Defi in a single click
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div className="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcTodoList />
                </div>
                <div className="mt-5 text-center font-medium hover:text-white text-2xl text-white">
                  Execution Layer
                </div>
                <div className="p-6  hover:text-white transition duration-300 ease-in">
                  <p className="leading-relaxed text-base font-normal text-center mb-3">
                    Secret sauce, your strategy gets checked and executed here
                    and enables you to use multiple protocols in one transaction
                  </p>
                </div>
              </div>
            </div>
            <div className="group p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
              <div className="h-full bg-lsaCard  hover:bg-blue-600 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-20 h-20 mt-5  group-hover:bg-white text-white group-hover:text-blue-500 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                <FcSupport />
                </div>
                <div className="mt-5 text-center font-medium hover:text-white text-2xl text-white">
                  Strategy management
                </div>
                <div class="w-[352px] h-[184px] p-3 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-base font-normal text-center mb-3">
                    Custom share minting, Automated strategies support, Script
                    logic support, Accurate strategy insights, Multi asset
                    support and special deposit, withdraw and rebalance
                    mechanism
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
