// import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import communityBlur from "../assets/CommunityBlur1.webp";

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
    <section className="pt-10 md:pt-20 lg:pt-36 bg-[#151D29] z-100">
      <img
        src={communityBlur}
        className="absolute h-[550px] w-full top-[4120px]"
      />
      <div
        className="flex flex-col mx-auto max-w-7xl p-4 section"
        ref={sectionRef}
      >
        <div className="font-Poppins m-auto text-3xl md:text-[40px] font-semibold  text-white dark:text-white ">
          For{" "}
          <span className="bg-gradient-to-r from-[#0199D2] via-blue-600 to-blue-700 bg-clip-text text-transparent ">
            The Community
          </span>{" "}
          by
        </div>
        <div className="bg-gradient-to-r from-[#0199D2] via-blue-600 to-blue-700 bg-clip-text text-transparent m-auto font-Poppins text-3xl md:text-[40px] font-semibold text-gradient mt-3 ">
          The Community
        </div>
        <div className="font-Poppins m-auto text-center w-[650px] text-lg md:text-xl font-normal text-[#768190] mt-2 md:mt-4 ">
        Don't just follow the market - lead it. Explore and employ top-performing strategies curated by our community of DeFi experts and trailblazers.
        </div>

        <div className="mt-8 p-[52px] bg-darktext rounded-xl ">
          <div className="flex flex-col lg:flex-row justify-between items-center transition-all duration-500">
            <div className="w-full lg:w-1/3 min-w-[250px] mx-12">
              <Slider className="mb-5" {...settings}>
                {imgdetails.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.link}
                      alt={`Image ${index + 1}`}
                      className="w-[80%] h-auto m-auto mb-1"
                    />
                  </div>
                ))}
              </Slider>
              <div>
                <div className="text-center font-bold text-4xl text-white dark:text-white">
                  {currentUser.protocol}
                </div>
                <div className="text-center font-bold text-1xl mt-1 text-white dark:text-white">
                  Strategy Name
                </div>
                <div className="flex flex-row justify-around mt-12  text-center mb-14 text-white dark:text-white">
                  <span className="border-r-4 w-[120px] border-gray-600  text-gray-600 font-bold">
                    TVL
                    <p className="text-[24px] font-medium text-white ">${currentUser.tvl} </p>{" "}
                  </span>
                  <span className="border-r-4 w-[120px] border-gray-600  text-gray-600 font-bold -ml-5">
                    24hr{" "}
                    <p className="text-[24px] font-medium text-white">${currentUser.hr} </p>
                  </span>
                  <span className="text-gray-600 font-bold">
                    Reward{" "}
                    <p className="text-[24px] font-medium text-white">${currentUser.reward}</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-[580px] overflow-scroll lg:w-1/2 text-left pr-0  order-1 md:order-2">
              {/* <div className="font-Poppins text-xl text-darktext dark:text-white font-semibold leading-tight pb-[3rem]">
                What the community says
              </div> */}
              {/* <div className="absolute inset-x-0  w-[650px] left-[500px] top-[200px] z-100 h-20 bg-gradient-to-r from-gray-800 to-gray-800 blur-lg"></div> */}

              <div className=" min-w-60 ">
                <div className="bg-gray-900 dark:bg-secondary rounded-xl p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        {currentUser?.fullName1}
                      </div>
                      <div className="flex items-center text-[#1869F4] font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" />{" "}
                        {currentUser.userName1}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white  text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description1}
                  </p>
                </div>
                <div className="bg-gray-900 dark:bg-secondary rounded-xl p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        {currentUser?.fullName2}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" />
                        {currentUser.userName2}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description2}
                  </p>
                </div>
                <div className="bg-gray-900 dark:bg-secondary rounded-xl p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        {currentUser?.fullName3}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" />{" "}
                        {currentUser?.userName3}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description3}
                  </p>
                </div>

                <div className="bg-gray-900 dark:bg-secondary rounded-xl p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        {currentUser?.fullName4}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" />{" "}
                        {currentUser?.userName4}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description4}
                  </p>
                </div>

                <div className="bg-gray-900 dark:bg-secondary rounded-xl p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        {currentUser?.fullName5}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" />{" "}
                        {currentUser?.userName5}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description5}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-full mt-3">
            <div className="w-[50%]"></div>
            <a
              href="https://discord.gg/eDwnvCc8nB"
              className="w-[50%] flex items-center justify-center"
              target="_blank"
            >
              <button className="bg-[#1869F4] text-white text-base font-normal px-6 py-4 rounded-xl flex items-center justify-center">
                <BiLogoDiscordAlt className="mr-2" />
                Join Community
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Community;