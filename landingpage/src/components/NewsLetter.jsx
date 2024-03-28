import { BiLogoGithub } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { useRef, useEffect } from "react";
import communityBlur from "../assets/CommunityBlur1.webp";

function NewsLetter() {
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
    <section className="bg-[#151D29] pt-16 ">
      <img
        src={communityBlur}
        className="absolute h-[700px] w-full top-[5000px]"
      />
      <div
        className="mx-auto max-w-6xl p-28 pb-10 flex flex-col section"
        ref={sectionRef}
      >
        <div className="text-center flex gap-3 justify-center flex-col items-center">
          <div className="font-poppins text-center leading-6 text-[26px] font-medium  bg-gradient-to-r from-[#0199D2] via-blue-600 to-blue-700  bg-clip-text text-transparent pb-5px">
          Subscribe to Our Waitlist
          </div>
          <div className="mt-2 w-[800px] text-white font-poppins text-center text-base font-normal leading-6">
          Join the LayerDapp community and stay ahead of the curve. Subscribe to our newsletter for the latest updates, strategies, and insights from the heart of the DeFi universe. Together, we're building the future of finance. 
          </div>
          <form className="flex flex-col md:flex-row items-center justify-center text-center mt-4">
            <label htmlFor="email" className="block md:mr-2 mb-2 md:mb-0">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-9 bg-[#020916]/30 text-base w-full md:w-[40rem] max-w-screen-lg rounded-lg focus:outline-[#151D29] outline-none shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] dark:shadow-none text-graytext"
                placeholder="Enter your email"
              />
            </label>
            <button
              className="bg-[#1869F4] text-white p-4 text-base cursor-pointer border-none font-normal rounded-[10px] md:ml-2 mt-2 md:mt-0"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <div className="flex flex-row items-center justify-between mt-20 w-[17%]">
            <a href="https://twitter.com/LayerDapp" target ="_blank" className="">
              <RiTwitterXFill className="text-white cursor-pointer text-[40px] mr-2 mt-8 mb-8" />
            </a>
            <a href="https://github.com/LayerDapp"  target ="_blank"className="">
              <BiLogoGithub className="text-white cursor-pointer text-[40px] mr-2 mt-8 mb-8" />
            </a>
            <a href="https://discord.gg/eDwnvCc8nB" target ="_blank" className="">
              <BiLogoDiscordAlt className="text-white cursor-pointer text-[44px] mr-2 mt-8 mb-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
