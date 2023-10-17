// import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";

function Community() {
  return (
    <section className="pt-28 bg-offwhite dark:bg-secondary">
      <div className="mx-auto max-w-6xl p-4 flex flex-col">
        <div className="font-Poppins text-5xl font-semibold text-center text-darktext dark:text-white">
          For{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            The Community
          </span>{" "}
          by
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-Poppins text-5xl font-semibold text-gradient text-center">
          The Community
        </div>
        <div className="font-Poppins text-xl font-normal text-graytext pt-8 text-center">
          Discover top-notch strategies handpicked for you by the community
        </div>
        <div className="font-Poppins text-xl font-normal text-graytext text-center">
          you by the community
        </div>

        <div className="mt-8 p-4 bg-white dark:bg-darktext rounded-lg ">
          <div className="flex justify-between">
            <div className="max-w-sm">
              <img
                src="../../Frame 251.png"
                alt="underline image"
                className="relative  mt-0" // Adjust the ml value as needed
              />
            </div>

            <div className="w-1/2 text-left pr-8">
              <div className="font-Poppins text-xl text-darktext dark:text-white font-semibold leading-tight pb-[3rem]">
                What the community says
              </div>
              <div className="mb-4 max-w-lg">
                <div className="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-lg">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 bg-[#D9D9D9] p-6 rounded-full block"></div>
                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold">Full Name</div>
                      <div className="flex items-center text-btn font-bold text-sm">
                        <BiLogoDiscordAlt className="" /> Username
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-darktext dark:text-white">
                    Lorem ipsum dolor sit amet consectetur. Sed enim egestas
                    pellentesque vel. Ut suspendisse vestibulum ipsum.
                  </p>
                </div>
                <div className="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-lg">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 bg-[#D9D9D9] p-6 rounded-full block"></div>
                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold">Full Name</div>
                      <div className="flex items-center text-btn font-bold text-sm">
                        <BiLogoDiscordAlt className="" /> Username
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-darktext dark:text-white">
                    Lorem ipsum dolor sit amet consectetur. Sed enim egestas
                    pellentesque vel. Ut suspendisse vestibulum ipsum.
                  </p>
                </div>
                <div className="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-lg">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 bg-[#D9D9D9] p-6 rounded-full block"></div>
                    <div className="flex flex-col">
                      <div className="text-gray-500 font-bold">Full Name</div>
                      <div className="flex items-center text-btn font-bold text-sm">
                        <BiLogoDiscordAlt className="" /> Username
                      </div>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-darktext dark:text-white">
                    Lorem ipsum dolor sit amet consectetur. Sed enim egestas
                    pellentesque vel. Ut suspendisse vestibulum ipsum.
                  </p>
                </div>

                {/* Repeat similar structure for other cards */}
              </div>

              <div className="flex items-center mb-8 mt-6">
                <button className="bg-btn text-white px-6 py-2 rounded-lg mr-2">
                  Create Strategy
                </button>
                <button className="bg-btn/20 text-btn px-6 py-2 rounded-lg flex items-center">
                  <BiLogoDiscordAlt className="mr-2" />
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
