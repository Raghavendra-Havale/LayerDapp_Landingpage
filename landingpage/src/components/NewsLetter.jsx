import { BiLogoGithub } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

function NewsLetter() {
  return (
    <div className="text-center">
      <div className="font-poppins text-center leading-6 text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-5px">
        Join Our Newsletter
      </div>
      <div className="text-base text-gray-500 font-poppins text-center text-base font-normal leading-6">
        We will send you a nice letter once per week. No spam.
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <label htmlFor="email" className="block mt-4 shadow-md rounded-lg">
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 text-base w-[25rem] max-w-screen-lg rounded-lg"
            placeholder="Enter your email"
          />
        </label>
        <button className="bg-blue-500 text-white p-2 text-sm cursor-pointer border-none rounded-lg ml-2 mt-4">
          Subscribe
        </button>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <RiTwitterXFill className="text-black text-3xl mr-2 mt-8 mb-8" />
        <BiLogoGithub className="text-black text-3xl mr-2 mt-8 mb-8" />
        <BiLogoDiscordAlt className="text-black text-3xl mr-2 mt-8 mb-8" />
      </div>
    </div>
  );
}

export default NewsLetter;
