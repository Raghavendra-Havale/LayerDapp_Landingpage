// import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef, useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import communityBlur from "../assets/CommunityBlur.png";

function Community() {
  const sectionRef = useRef(null);
  const imgdetails = [
    {
      link: "../../aave5.png",
      user: {
        protocol: "Aave",
        tvl: "74.99",
        hr:"87.12",
        reward:"112.34",
        fullName: "John Doe",
        userName: "john_doe123",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    },
    {
      link: "../../unilogo.png",
      user: {
        protocol: "Uniswap",
        tvl: "97.2",
        hr:"65.1",
        reward:"83.9",
        fullName: "chetan",
        userName: "chetan_doe123",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    },
    // Add more image objects as needed
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlideIndex(newIndex)
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
    <section className="pt-10 md:pt-20 lg:pt-28 bg-[#151D29] z-100">
    <img src={communityBlur} className="absolute border h-[550px] w-full top-[4100px]"/>
      <div
        className="flex flex-col mx-auto max-w-6xl p-4 section"
        ref={sectionRef}
      >
        <div className="font-Poppins  text-3xl md:text-4xl font-semibold  text-white dark:text-white">
          For{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-600  bg-clip-text text-transparent">
            The Community
          </span>{" "}
          by
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600  bg-clip-text text-transparent font-Poppins text-3xl md:text-4xl font-semibold text-gradient ">
          The Community
        </div>
        <div className="font-Poppins  w-[550px] text-lg md:text-xl font-normal text-graytext mt-4 md:mt-8 ">
          Discover top-notch strategies handpicked for you by the community.
        </div>

        <div className="mt-8 p-4 bg-transparent dark:bg-darktext rounded-lg ">
          <div className="flex flex-col lg:flex-row justify-between items-center transition-all duration-500">
            <div className="w-full lg:w-1/3 min-w-[250px] mx-12">
            <Slider {...settings}>
                {imgdetails.map((item, index) => (
                  <div key={index}>
                    <img 
                      src={item.link}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto md:max-h-full"
                      
                    />
                  </div>
                ))}
              </Slider>
              <div>
              <div className="text-center font-bold text-4xl text-white dark:text-white">{currentUser.protocol}</div>
              <div className="text-center font-bold text-1xl mt-1 text-white dark:text-white">Strategy Name</div>
              <div className="flex flex-row justify-around mt-12  text-center mb-14 text-white dark:text-white">
                <span className="border-r-4 w-[120px] border-gray-600  text-gray-600 font-bold">TVL<p className="text-3xl text-white ">${currentUser.tvl} </p> </span>
                <span className="border-r-4 w-[120px] border-gray-600  text-gray-600 font-bold">24hr <p className="text-3xl text-white">${currentUser.hr} </p></span>
                <span className="text-gray-600 font-bold">Reward <p className="text-3xl text-white">${currentUser.reward}</p></span>
              </div>
              </div>
            </div>
            

            <div className="w-full h-[580px] overflow-scroll lg:w-1/2 text-left pr-0  order-1 md:order-2">
              {/* <div className="font-Poppins text-xl text-darktext dark:text-white font-semibold leading-tight pb-[3rem]">
                What the community says
              </div> */}
              {/* <div className="absolute inset-x-0  w-[650px] left-[500px] top-[200px] z-100 h-20 bg-gradient-to-r from-gray-800 to-gray-800 blur-lg"></div> */}

              <div className=" min-w-60 ">
              
                <div className="bg-gray-900/40 dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        {currentUser?.fullName}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" /> {currentUser.userName}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white  text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description}
                  </p>
                </div>
                <div className="bg-gray-900/40 dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                      {currentUser?.fullName}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" />{currentUser.userName}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description}
                  </p>
                </div>
                <div className="bg-gray-900/40 dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                      {currentUser?.fullName}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" /> {currentUser?.userName}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description}
                  </p>
                </div>

                <div className="bg-gray-900/40 dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                      {currentUser?.fullName}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" /> {currentUser?.userName}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description}
                  </p>
                </div>

                <div className="bg-gray-900/40 dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                      {currentUser?.fullName}
                      </div>
                      <div className="flex items-center text-btn font-medium text-xs md:text-sm lg:text-sm xl:text-base">
                        <BiLogoDiscordAlt className="mr-1" /> {currentUser?.userName}
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-white dark:text-white text-sm md:text-sm lg:text-sm xl:text-lg">
                    {currentUser.description}
                  </p>
                </div>
                
                
                
               </div>
               
            </div>
            
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-3 ml-[40vw] mb-10 mt-2">
                <a href="https://discord.gg/eDwnvCc8nB" className="" target="_blank">
                  <button className="bg-[#1869F4] text-white text-base font-normal px-6 py-3 rounded-lg flex items-center justify-center">
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
