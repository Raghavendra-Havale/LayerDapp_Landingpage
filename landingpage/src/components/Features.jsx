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
import gif from "../../public/Gif1.gif"
import gif2 from "../../public/Gif2.gif"

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
      <img src={gif2} className="absolute w-full  h-[1400px] opacity-30" />

      <div className="md:h-full flex items-center text-white mx-auto z-[100]">
        <div className="container px-4 py-4 max-w-7xl mx-auto">
          <div className=" items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 text-center font-medium bg-gradient-to-r from-[#009ACE] via-[#1372DD] to-[#1869F4] bg-clip-text text-transparent z-[1000]">
              LAYERDAPP FEATURES
            </h1>

            <h1 className="font-poppins text-5xl text-center font-semibold  md:text-5xl text-white md:text-center">
             LAYER SMART ACCOUNTS
            </h1>

            {/* <img
              src={Ellipse24Img}
              className="absolute bg-fixed left-0 sm:right-[1200px] lg:right-[1200px] xl:right-[1200px]  top-[1900px] h-[567px] w-[200px] sm:w-[200px] lg:w-[200px] xl:w-[200px]"
            />

            <img
              src={Ellipse25Img}
              className="absolute bg-fixed left-0 sm:right-[1060px] lg:right-[1060px] xl:right-[1060px]  top-[1900px] h-[567px] w-[350px] sm:w-[350px] lg:w-[350px] xl:w-[350px]"
            /> */}
          </div>

          <div className="flex flex-wrap -m-4 mt-32 ">


            <div className="group p-2 sm:w-1/2 lg:w-1/3 ">
            <div className="h-[85%] bg-[#020916] bg-opacity-[40%] rounded-3xl relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

              <div className="w-[125px] h-[90px] py-1 px-4 rounded-full   absolute -top-16 left-8 bg-gradient-to-r from-[#009ACE] to-[#1869F4] flex justify-center items-center z-10" >
                <p className="text-6xl font-bold">1</p>
              </div>

                <div className="mt-6 text-center font-medium text-[24px] text-white pt-20">
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




            <div className="group p-2 sm:w-1/2 lg:w-1/3">
            <div className="h-[85%] bg-[#020916] bg-opacity-[40%] rounded-3xl relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

              <div className="w-[125px] h-[90px] py-1 px-4 rounded-full   absolute -top-16 left-32 bg-gradient-to-r from-[#009ACE] to-[#1869F4] flex justify-center items-center z-10" >
                <p className="text-6xl font-bold">2</p>
              </div>

                <div className="mt-6 text-center font-medium text-[24px] text-white pt-20">
                Interact with Multiple Protocols
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-3  text-center ">
                  Interact with multiple protocols and Batch their transactions together.
                  </p>
                </div>
              </div>
            </div>



            <div className="group p-2 sm:w-1/2 lg:w-1/3">
            <div className="h-[85%] bg-[#020916] bg-opacity-[40%] rounded-3xl relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

              <div className="w-[125px] h-[90px] py-1 px-4 rounded-full   absolute -top-16 left-52 bg-gradient-to-r from-[#009ACE] to-[#1869F4] flex justify-center items-center z-10" >
                <p className="text-6xl font-bold">3</p>
              </div>

                <div className="mt-6 text-center font-medium text-[24px] text-white pt-20">
                Multi User Control
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-3  text-center ">
                  Add multiple authorities to the accounts and let your team manage efficiently.
                  </p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>






      <div className="md:h-full flex items-center text-white mx-auto mt-12 z-[10]">
        <div className="container px-4 py-4 max-w-7xl mx-auto">
          <div className=" items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-lg dark:text-white mb-3 text-center font-medium bg-gradient-to-r from-[#009ACE] via-[#1372DD] to-[#1869F4] bg-clip-text text-transparent z-[1000]">
              LAYERDAPP FEATURES
            </h1>

            <h1 className="font-poppins text-5xl text-center font-semibold md:text-5xl text-white md:text-center leading-4">
            INTERACT WITH MULTIPLE <br />
            <span className=" mt-3 block">PROTOCOLS</span>
          </h1>


            {/* <img
              src={Ellipse24Img}
              className="absolute bg-fixed left-0 sm:right-[1200px] lg:right-[1200px] xl:right-[1200px]  top-[1900px] h-[567px] w-[200px] sm:w-[200px] lg:w-[200px] xl:w-[200px]"
            />

            <img
              src={Ellipse25Img}
              className="absolute bg-fixed left-0 sm:right-[1060px] lg:right-[1060px] xl:right-[1060px]  top-[1900px] h-[567px] w-[350px] sm:w-[350px] lg:w-[350px] xl:w-[350px]"
            /> */}
          </div>

          <div className="flex flex-wrap -m-4 mt-32 ">


            <div className="group p-2 sm:w-1/2 lg:w-1/3 ">
            <div className="h-[86%] bg-[#020916] bg-opacity-[40%] rounded-3xl relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

              <div className="w-[125px] h-[90px] py-1 px-4 rounded-full   absolute -top-16 left-8 bg-gradient-to-r from-[#009ACE] to-[#1869F4] flex justify-center items-center z-10" >
                <p className="text-6xl font-bold">1</p>
              </div>

                <div className="mt-6 text-center font-medium text-[24px] text-white pt-20">
                DeFi Without Borders
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-5  text-center ">
                  Seamlessly navigate and transact across the vast DeFi landscape, from lending on Compound to trading on Uniswap, all in one place
                  </p>
                </div>
              </div>
            </div>




            <div className="group p-2 sm:w-1/2 lg:w-1/3">
            <div className="h-[86%] bg-[#020916] bg-opacity-[40%] rounded-3xl relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

              <div className="w-[125px] h-[90px] py-1 px-4 rounded-full   absolute -top-16 left-32 bg-gradient-to-r from-[#009ACE] to-[#1869F4] flex justify-center items-center z-10" >
                <p className="text-6xl font-bold">2</p>
              </div>

                <div className="mt-6 text-center font-medium text-[24px] text-white pt-20">
                Your alternate frontend to Defi
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-5  text-center ">
                  Bridge the gaps between protocols without ever leaving LayerDapp. Whether swapping, lending, or farming, do it all from one unified platform.
                  </p>
                </div>
              </div>
            </div>



            <div className="group p-2 sm:w-1/2 lg:w-1/3">
            <div className="h-[86%] bg-[#020916] bg-opacity-[40%] rounded-3xl relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

              <div className="w-[125px] h-[90px] py-1 px-4 rounded-full   absolute -top-16 left-52 bg-gradient-to-r from-[#009ACE] to-[#1869F4] flex justify-center items-center z-10" >
                <p className="text-6xl font-bold">3</p>
              </div>

                <div className="mt-6 text-center font-medium text-[24px] text-white pt-[76px]">
                Less fragmentation and more interoperability
                </div>
                <div className="p-6 hover:text-white transition duration-300 ease-in">
                  <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4   text-center ">
                  Bringing the best of protocols, improving discoverability, interoperability and enabling complex strategies like Flash Loans, Leverage.
                  </p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>



      {/* DIFFUSION VALUT SECTUON */}
      <div className="md:h-full grid grid-rows-1 z-100 text-white mt-36">
        <div className="container py-4 mx-auto max-w-7xl ">



          <div className=" grid grid-cols-2 h-[330px] mb-10 mt-10 ml-1 sm:grid-cols-2">
          <h1 className="font-poppins text-8xl text-left font-semibold md:text-8xl text-white md:text-left pl-24 pt-12 leading-[120px]  ">
            Diffusion{" "}
            <button className="absolute -ml-20 font-normal text-sm px-3 rounded-full py-[10px]  bg-[#EA2315] ">
              Comming soon
            </button>
            <div style={{ display: 'inline-block', marginTop: '40px' }}>
              <span >Vault</span>
            </div>
          </h1>

          <div className="sm:w-full lg:w-full flex flex-col justify-end items-center mb-5">
              
            <div className="mt-[18%] w-full h-[85%] bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <div className="mt-6 text-center font-medium text-[24px] text-white pt-10">
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







          <div className=" grid grid-cols-2 gap-4 h-[330px] mb-10 mt-10 ml-1 sm:grid-cols-2">
          <div className="p-1 sm:w-full lg:w-full grid ">
              
              <div className="h-[75%] bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

                  <div className="mt-6 text-center font-medium text-[21px] text-white pt-10">
                  Custom Logic
                  </div>
                  <div className="p-6 hover:text-white transition duration-300 ease-in">
                    <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                    Our contracts can handle your custom logic that you can build using Typescript.
                    </p>
                  </div>
                </div>
              </div>

            <div className=" p-1 sm:w-full lg:w-full grid ">
              
            <div className="h-[75%] bg-[#FFFFFF] bg-opacity-5 rounded-3xl overflow-hidden relative cursor-pointer  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ">

                <div className="mt-6 text-center font-medium text-[21px] text-white pt-10">
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


