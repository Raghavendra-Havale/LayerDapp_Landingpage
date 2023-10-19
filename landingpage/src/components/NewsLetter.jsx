import { BiLogoGithub } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

function NewsLetter() {
  return (
    <section className=" bg-offwhite dark:bg-secondary">
      <div className="mx-auto max-w-6xl p-4 flex flex-col">
        <div className="text-center">
          <div className="font-poppins text-center leading-6 text-2xl font-bold bg-gradient-to-r from-btn/30 via-btn to-purple-600 bg-clip-text text-transparent pb-5px">
            Join Our Newsletter
          </div>
          <div className="mt-2 text-gray-500 font-poppins text-center text-base font-normal leading-6">
            We will send you a nice letter once per week. No spam.
          </div>
          <form className="flex flex-col md:flex-row items-center justify-center text-center mt-4">
            <label htmlFor="email" className="block md:mr-2 mb-2 md:mb-0">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-9  text-base w-full md:w-[25rem] max-w-screen-lg rounded-lg focus:outline-btn"
                placeholder="Enter your email"
              />
            </label>
            <button
              className="bg-blue-500 text-white p-3 text-sm cursor-pointer border-none rounded-lg md:ml-2 mt-2 md:mt-0"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <div className="flex flex-row items-center justify-center mt-4">
            <a href="https://twitter.com/LayerDapp" className="">
              <RiTwitterXFill className="text-darktext dark:text-white cursor-pointer text-3xl mr-2 mt-8 mb-8" />
            </a>
            <a href="https://github.com/LayerDapp" className="">
              <BiLogoGithub className="text-darktext dark:text-white cursor-pointer text-3xl mr-2 mt-8 mb-8" />
            </a>
            <a href="https://discord.gg/eDwnvCc8nB" className="">
              <BiLogoDiscordAlt className="text-darktext dark:text-white cursor-pointer text-3xl mr-2 mt-8 mb-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
