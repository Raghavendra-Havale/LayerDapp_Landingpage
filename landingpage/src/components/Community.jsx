// import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
function Community() {
  return (
    <section className="pt-10 md:pt-20 lg:pt-28 bg-offwhite dark:bg-secondary">
      <div className="mx-auto max-w-6xl p-4 flex flex-col">
        <div className="font-Poppins text-3xl md:text-5xl font-semibold text-center text-darktext dark:text-white">
          For{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            The Community
          </span>{" "}
          by
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-Poppins text-3xl md:text-5xl font-semibold text-gradient text-center">
          The Community
        </div>
        <div className="font-Poppins text-lg md:text-xl font-normal text-graytext mt-4 md:mt-8 text-center">
          Discover top-notch strategies handpicked for you by the community
        </div>

        <div className="mt-8 p-4 bg-white dark:bg-darktext rounded-lg ">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="w-full md:w-1/3 min-w-[200px]  order-2 md:order-1">
              <img
                src="../../Frame 251.png"
                alt="uniswap logo"
                className="relative block dark:hidden w-full max-w-full max-h-64 md:max-h-full object-cover"
              />
              <img
                src="../../Frame-252.png"
                alt="uniswap logo"
                className="relative hidden dark:block w-full max-w-full max-h-64 md:max-h-full object-cover"
              />
            </div>

            <div className="w-1/2 text-left pr-8 order-1 md:order-2">
              {/* <div className="font-Poppins text-xl text-darktext dark:text-white font-semibold leading-tight pb-[3rem]">
                What the community says
              </div> */}
              <div className="mb-4 min-w-60 mt-5">
                <div className="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        Full Name
                      </div>
                      <div className="flex items-center text-btn font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        <BiLogoDiscordAlt className="mr-1" /> Username
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-darktext dark:text-white text-sm md:text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur. Sed enim egestas
                    pellentesque vel. Ut suspendisse vestibulum ipsum.
                  </p>
                </div>
                <div className="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        Full Name
                      </div>
                      <div className="flex items-center text-btn font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        <BiLogoDiscordAlt className="mr-1" /> Username
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-darktext dark:text-white text-sm md:text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur. Sed enim egestas
                    pellentesque vel. Ut suspendisse vestibulum ipsum.
                  </p>
                </div>
                <div className="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-[#D9D9D9] p-2 rounded-full"></div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        Full Name
                      </div>
                      <div className="flex items-center text-btn font-bold text-xs md:text-sm lg:text-base xl:text-lg">
                        <BiLogoDiscordAlt className="mr-1" /> Username
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-darktext dark:text-white text-sm md:text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur. Sed enim egestas
                    pellentesque vel. Ut suspendisse vestibulum ipsum.
                  </p>
       
                </div>
                <button
  className="bg-gray-200 border-2 border-blue-500 hover:border-blue-700 text-blue-800 py-2 px-3 rounded font-semibold flex items-center mx-auto w-[fit-content] transition duration-300 ease-in-out"
>
  <MdKeyboardDoubleArrowDown className="mr-1" />
</button>

              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 mb-8 mt-6">
                <a href="https://v1-frontend-staging.vercel.app/" className="">
                  <button className="bg-btn text-white px-6 py-2 rounded-lg mb-2 md:mb-0 ">
                    Create Strategy
                  </button>
                </a>
                <a href="https://discord.gg/eDwnvCc8nB" className="">
                  <button className="bg-btn/20 text-btn px-6 py-2 rounded-lg flex items-center">
                    <BiLogoDiscordAlt className="" />
                    Join Community
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
