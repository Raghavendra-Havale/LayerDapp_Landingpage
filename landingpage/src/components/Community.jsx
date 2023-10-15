import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";

function Community() {
  return (
    <div className="text-center mt-24">
      <div className="font-Poppins text-5xl font-semibold text-blue-800">
        For{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          The Community
        </span>{" "}
        by
      </div>
      <div className="font-Poppins text-5xl font-semibold text-gradient">
        The Community
      </div>
      <div className="font-Poppins text-xl font-normal text-gray-700 pt-8">
        Discover top-notch strategies handpicked for you by the community
      </div>
      <div className="font-Poppins text-xl font-normal text-gray-700">
        you by the community
      </div>
      <div className="mt-8 p-4 bg-white rounded shadow-lg ring ring-white ring-offset-2 ring-offset-white">
      <div className="flex justify-between">
      <div className="max-w-sm">
  <img
    src="../../Frame 251.png"
    alt="underline image"
    className="relative ml-[10rem] mt-0" // Adjust the ml value as needed
  />
</div>


          <div className="w-1/2 text-left pr-8">
            <div className="font-Poppins text-xl font-semibold leading-tight pb-[3rem]">
              What the community says
            </div>
            <div className="mb-4 max-w-lg">
              <div className="bg-white rounded-lg p-4 mb-4 flex items-start shadow-md">
                <img
                  src="../../circle.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <div className="text-gray-500 font-bold">Full Name</div>
                  <div className="flex items-center text-blue-800 font-bold text-sm">
                    <BiLogoDiscordAlt className="mr-2" /> Username
                  </div>
                  <p className="ml-4 flex-shrink-0">
                    This is the content of the card. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 flex items-start shadow-md">
                <img
                  src="../../circle.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <div className="text-gray-500 font-bold">Full Name</div>
                  <div className="flex items-center text-blue-800 font-bold text-sm">
                    <BiLogoDiscordAlt className="mr-2" /> Username
                  </div>
                  <p className="ml-4 flex-shrink-0">
                    This is the content of the card. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4 flex items-start shadow-md">
                <img
                  src="../../circle.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col">
                  <div className="text-gray-500 font-bold">Full Name</div>
                  <div className="flex items-center text-blue-800 font-bold text-sm">
                    <BiLogoDiscordAlt className="mr-2" /> Username
                  </div>
                  <p className="ml-4 flex-shrink-0">
                    This is the content of the card. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* Repeat similar structure for other cards */}
            </div>

            <div className="flex items-center mb-8">
              <button className="bg-blue-500 text-white px-6 py-2 rounded mr-2">
                Create Strategy
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded flex items-center">
                <BiLogoDiscordAlt className="mr-2" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
