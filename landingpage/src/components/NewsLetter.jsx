import { BiLogoGithub } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { useRef, useEffect } from "react";

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
    <section className=" bg-gradient-to-r from-gray-900 to-blue-900 pt-24 pb-24">
      <div
        className="mx-auto max-w-6xl p-4 flex flex-col section"
        ref={sectionRef}
      >
        <div className="text-center flex justify-center flex-col items-center">
          <div className="font-poppins text-center leading-6 text-2xl font-bold bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 bg-clip-text text-transparent pb-5px">
          Subscribe to Our Waitlist
          </div>
          <div className="mt-2 w-[800px] text-white font-poppins text-center text-base font-normal leading-6">
          Unlock the latest updates and exclusive sneak peeks into the diffusion Vault! Don't miss out –  subscribe to our waitlist and be the first to know!"
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
              className="bg-blue-500 text-white p-3 text-sm cursor-pointer border-none rounded-lg md:ml-2 mt-2 md:mt-0"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <div className="flex flex-row items-center justify-center mt-4">
            <a href="https://twitter.com/LayerDapp" target ="_blank" className="">
              <RiTwitterXFill className="text-white cursor-pointer text-3xl mr-2 mt-8 mb-8" />
            </a>
            <a href="https://github.com/LayerDapp"  target ="_blank"className="">
              <BiLogoGithub className="text-white cursor-pointer text-3xl mr-2 mt-8 mb-8" />
            </a>
            <a href="https://discord.gg/eDwnvCc8nB" target ="_blank" className="">
              <BiLogoDiscordAlt className="text-white cursor-pointer text-3xl mr-2 mt-8 mb-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
