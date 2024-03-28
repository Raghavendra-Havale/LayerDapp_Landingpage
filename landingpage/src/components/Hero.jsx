import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";
import layerdAppImg from "../assets/layerdApp1.png";
import Header from "./Header";
import bgDesignImg from "../assets/bgDesign.webp";
import HeroBlurImg from "../assets/HeroBlur1.webp";
function Hero() {
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
    <section className={`bg-[#151D29] pb-52`}>
      <img
        src={bgDesignImg}
        className="absolute opacity-40  h-[1000px] w-full "
      />
      <img src={HeroBlurImg} className="absolute w-full " />
      <Header />
      <div className="mx-auto  max-w-6xl  flex section" ref={sectionRef}>
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col items-start ">
            <div className="w-full relative right-8  lg:w-[75%] flex flex-col items-center lg:items-start">
              <h1 className=" text-2xl pt-24 md:text-[86px]  font-semibold bg-gradient-to-r from-[#0199D2] via-blue-600 to-blue-700 bg-clip-text text-transparent leading-none lg:leading-[100px] text-center lg:text-left">
                {`DeFi's Command  Center `}
              </h1>

              <p className="mt-8  text-sm  text-white dark:text-white leading-tight md:leading-[24px] text-center lg:text-left">
              Unleash the full potential of decentralized finance with just a few clicks.{" "}
                <br /> LayerDapp is your one-stop DeFi powerhouse, where simplicity <br />
                meets innovation.{" "}
                <br />
                <span className="font-normal text-base text bg-gradient-to-r from-[#a3dcf1] via-[#5fd0f9] to-[#a3dcf1] bg-clip-text text-transparent">Explore, Manage, Build</span>{" "}
                <br />
                
              </p>

              {/* LayerDapp is your one-stop DeFi powerhouse, where simplicity meets innovation. Explore, Manage, Build */}

              <div className="flex items-center justify-center lg:justify-start gap-3 mt-11">
                <a
                  href="https://twitter.com/LayerDapp"
                  target="_blank"
                  className="text-white dark:text-white"
                >
                  <RiTwitterXFill className="text-[36px]" />
                </a>
                <a
                  href="https://discord.gg/eDwnvCc8nB"
                  target="_blank"
                  className="text-white dark:text-white"
                >
                  <FaDiscord className="text-[36px]" />
                </a>
                <a
                  href="https://github.com/LayerDapp"
                  target="_blank"
                  className="text-white dark:text-white"
                >
                  {" "}
                  <FaGithub className="text-[36px]" />
                </a>
              </div>
              {/* <a
                href="https://v1-frontend-staging.vercel.app"
                target="_blank"
                className=""
              >
                <button className="bg-[#1869F4] text-base px-20 md:px-[100px] lg:px-[150px] font-semibold py-4 text-white rounded-[18px] mt-9">
                  Launch App
                </button>
              </a> */}
            </div>

            <img
              src={layerdAppImg}
              className="absolute bottom-35 left-[500px] w-[743px] h-[760px]"
            />
          </div>

          <div className="hidden  mt-32 md:flex items-center justify-between bg-[#020916]/30 w-[65%]  max-w-6xl md:px-5 lg:px-10 md:py-7 lg:py-12 rounded-[36px]  dark:border-darktext/50  relative  -ml-[30px]">
            <div className="flex px-10 flex-col items-center justify-center ">
              <h3 className="text-white dark:text-white  font-semibold md:text-3xl lg:text-5xl opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d">
                $70B+
              </h3>
              <p className="text-[#768190] font-semibold text-xs lg:text-base pt-2 tracking-tight">
                TVL across DeFi
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mr-6">
              <h3 className="text-white dark:text-white font-semibold md:text-3xl lg:text-5xl">
                5+
              </h3>
              <p className="text-[#768190] font-semibold text-xs lg:text-base pt-2 tracking-tight">
                Protocols Supported
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white dark:text-white font-semibold md:text-3xl lg:text-5xl">
                100+
              </h3>
              <p className="text-[#768190] font-semibold text-xs lg:text-base pt-2 tracking-tight">
                LSA Accounts Created
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
