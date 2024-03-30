// import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import communityBlur from "../assets/CommunityBlur1.webp";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";

import blurX from "../../public/x_blur.png"
import blurDiscord from "../../public/dicord_blur.png"
import blurGit from "../../public/github_blur.png"

function Community() {
  const sectionRef = useRef(null);
  const imgdetails = [
    {
      link: "../../aave5.png",
      user: {
        protocol: "Aave",
        tvl: "74.99",
        hr: "87.12",
        reward: "112.34",
        fullName2: "Alex Johnson",
        userName2: "DeFiAlex22",
        description2:
          "LayerDapp truly stands out as a DeFi Command Center. With support for multiple protocols and over $70B in TVL, it's the only tool I need for my DeFi activities. ",

        fullName3: "Mia Wang",
        userName3: "MiaOnTheBlock",
        description3:
          "The ease of navigating and transacting across different DeFi platforms without leaving LayerDapp has been phenomenal.",

        fullName4: "Ethan Clark",
        userName4: "EthanTheEther",
        description4:
          "From managing assets across protocols to batching transactions for efficiency, LayerDapp has revolutionized how I interact with DeFi.",

        fullName5: "Aditya Jaa",
        userName5: "AdityaJaaDeFi",
        description5:
          "LayerDapp revolutionized my DeFi strategy with seamless protocol integration. Multi-account management is a game-changer.",

        fullName1: "Priya Kumari",
        userName1: "PriyaSinghKumariCrypto",
        description1:
          "Streamlined operations and gas savings with LayerDapp's single interface and transaction batching are phenomenal.",
      },
    },
    {
      link: "../../unilogo.png",
      user: {
        protocol: "Uniswap",
        tvl: "97.2",
        hr: "65.1",
        reward: "83.9",
        fullName1: "Manoj",
        userName1: "ManojKumar@123",
        description1:
          "Unleashing the full potential of DeFi has never been easier thanks to LayerDapp.",
        fullName2: "Olivia Smith",
        userName2: "OliviaDefiQueen",
        description2:
          "Managing multiple accounts under one EOA and interacting with a multitude of protocols has streamlined my operations and my investment horizon.",

        fullName3: "Rohan Mehra",
        userName3: "RohanTheTrader",
        description3:
          "LayerDapp makes DeFi easy with support for multiple protocols and insightful community-driven strategies.",

        fullName4: "Ananya Patel",
        userName4: "AnanyaDeFiGuru",
        description4:
          "A DeFi command center that simplifies asset management across protocols with custom logic for endless possibilities.",

        fullName5: "Vikram Reddy",
        userName5: "VikramInCrypto",
        description5:
          "LayerDapp offers unparalleled interoperability and strategy-building capabilities for all my DeFi needs.",
      },
    },
    // Add more image objects as needed
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlideIndex(newIndex),
  };

  const currentUser = imgdetails[currentSlideIndex].user;

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
    <section className="pt-10 md:pt-20 lg:pt-28 bg-[#151D29] z-100 ">

      <img
        src={blurX}
        className="absolute h-[320px] w-[320px] top-[4210px] left-[60px] object-cover z-0 "
      />

      <img
        src={blurDiscord}
        className="absolute h-[250px] w-[320px] top-[4320px] left-[1220px] object-cover z-0 "
      />   

      <img
      src={blurGit}
      className="absolute h-[380px] w-[380px] top-[4900px] left-[1180px] object-cover z-0 filter blur-sm"
    />

    <div className="max-w-6xl  m-auto flex flex-col items-center">
     
      <div className="flex flex-col justify-between items-center">
        <h className="text-[96px] text-white font-semibold">Our Community</h>
        <p className="text-[#768190] pb-10 text-[20px] text-center w-[75%]">Don't just follow the market - lead it. Explore and employ top-performing strategies curated by our community of DeFi experts and trailblazers.</p>
      </div>
  
    <div className="container p-[38px] py-[44px] max-w-6xl mx-auto rounded-[50px] bg-[#020916] bg-opacity-50  z-0
    ">



    <div className="flex flex-row justify-between items-stretch  gap-6">
       <div className="w-[50%] rounded-[32px] bg-gradient-to-r from-[#009ACE] via-[#1372DD] to-[#1869F4] p-12 ">
        <div className=" text-right  pt-10">
          <div className="mb-5">
          <p className="text-white font-medium text-[20px]">Community Members</p>
          <h className= "text-5xl text-[#08F420] leading-[80px] font-bold">40M+</h>
          </div>

          <div className="mb-5">
          <p className="text-white font-medium text-[20px]">Community Members</p>
          <h className= "text-5xl text-[#08F420] leading-[80px] font-bold">40M+</h>
          </div>          

          <div className="mb-5">
          <p className="text-white font-medium text-[20px]">Community Members</p>
          <h className= "text-5xl text-[#08F420] leading-[80px] font-bold">40M+</h>
          </div>

        </div>
       </div>


       <div className="w-[50%] rounded-[32px] bg-[#151D29] p-7">
          <div className="flex flex-col justify-between items-center">
            <h className="text-white text-[40px] font-semibold ">Discover Top Strategies</h>
            <p className="text-[20px] text-[#768190]">Community voted Top Strategies</p>
          </div>

        <div className="w-full mt-8">
              <Slider className="mb-5" {...settings}>
                {imgdetails.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.link}
                      alt={`Image ${index + 1}`}
                      className="w-[35%] h-auto m-auto mb-1"
                    />
                  </div>
                ))}
              </Slider>
              <div className="">
                <div className="text-center font-semibold text-[32px] text-white  mb-2">
                  {currentUser.protocol}
                </div>
                <div className="text-center font-medium text-[16px] mt-1 text-white ">
                  Strategy Name
                </div>

                <div className="flex flex-row justify-around mt-4  text-center mb-4 text-white w-[80%] m-auto ">

                  <span className="border-r-4 w-[120px] border-[#D9D9D9]  text-gray-600 font-normal">
                    TVL
                    <p className="text-[24px] font-medium text-white">${currentUser.tvl} </p>{" "}
                  </span>
                  <span className="border-r-4 w-[130px] border-[#D9D9D9]  text-gray-600 font-normal -ml-[60px]">
                    24hr{" "}
                    <p className="text-[24px] ml-3 font-medium text-white">${currentUser.hr} </p>
                  </span>
                  <span className="text-gray-600 -ml-5 font-normal">
                    Reward{" "}
                    <p className="text-[24px] -ml-2 font-medium text-white">${currentUser.reward}</p>
                  </span>
                </div>
              </div>
            </div>






       </div>
    </div>



    <div className=" flex justify-around items-center m-auto w-[15%] mt-12 -pl-[20px] ml-[42%]">
    <a
      href="https://twitter.com/LayerDapp"
      target="_blank"
      className="">
      <RiTwitterXFill className="text-3xl text-white" />
    </a>
    <a
    href="https://discord.gg/eDwnvCc8nB"
    target="_blank" 
    className=""
  >
    <FaDiscord className="text-3xl text-white" />
  </a>
  <a
    href="https://github.com/LayerDapp"
    target ="_blank"
    className=""
  >
    {" "}
    <FaGithub className="text-3xl text-white" />
  </a>

    </div>

    </div>

    </div>

      
    </section>
  );
}

export default Community;
