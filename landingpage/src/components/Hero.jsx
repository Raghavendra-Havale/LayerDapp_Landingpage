import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";
import layerdAppImg from "../assets/layerdApp.png";
import Header from "./Header";
import bgDesignImg from "../assets/bgDesign.png";
import HeroBlurImg from "../assets/HeroBlur1.png"
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
    <section className={`bg-[#151D29] pb-56`}>
    <img src={bgDesignImg}
    className="absolute opacity-20  h-[1000px] w-full" />
    <img  src={HeroBlurImg}  className="absolute w-full"/>
    <Header />
      <div className="mx-auto  max-w-6xl  flex section" ref={sectionRef}>
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col items-start ">
            <div className="w-full relative right-8  lg:w-[75%] flex flex-col items-center lg:items-start">
              <h1 className=" text-2xl pt-24 md:text-[86px]  font-semibold bg-gradient-to-r from-[#0199D2] via-blue-600 to-blue-700 bg-clip-text text-transparent leading-none lg:leading-[100px] text-center lg:text-left">
                {`DeFi's Command  Center `}
              </h1>
              
              <p className="mt-8  text-sm  text-white dark:text-white leading-tight md:leading-[24px] text-center lg:text-left">
                Layerdapp: Elevate Your DeFi Adventure. Dive deep into the <br /> web3
                realm, effortlessly bridging diverse protocols.  Transform <br />
                intricate strategies into intuitive actions, and unlock a world <br />
                of decentralized opportunities with unparalleled precision and <br />
                security.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-11">
                <a
                  href="https://twitter.com/LayerDapp"
                  target="_blank"
                  className="text-white dark:text-white"
                >
                  <RiTwitterXFill className="text-3xl" />
                </a>
                <a
                  href="https://discord.gg/eDwnvCc8nB"
                  target="_blank"
                  className="text-white dark:text-white"
                >
                  <FaDiscord className="text-3xl" />
                </a>
                <a
                  href="https://github.com/LayerDapp"
                  target="_blank"
                  className="text-white dark:text-white"
                >
                  {" "}
                  <FaGithub className="text-3xl" />
                </a>
              </div>
              <a
                href="https://v1-frontend-staging.vercel.app"
                target="_blank"
                className=""
              >
                <button className="bg-[#1869F4] text-base px-20 md:px-[100px] lg:px-[150px] font-semibold py-4 text-white rounded-[18px] mt-9">
                  Launch App
                </button>
              </a>
            </div>
           
              <img src={layerdAppImg} className="absolute bottom-28 left-[500px] w-[743px] h-[760px]"/>
              
            
          </div>

          <div className="hidden  mt-32 md:flex items-center justify-between bg-[#020916]/30 w-full mx-auto max-w-6xl md:p-5 lg:p-10 rounded-[36px]  dark:border-darktext/50  relative">
            <div className="flex px-10 flex-col items-center justify-center">
              <h3 className="text-white dark:text-white  font-bold md:text-2xl lg:text-4xl opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d">
                $329.66M
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                TVL of protocol
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mr-6">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-4xl">
                2.25B
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Protocols Used
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-4xl">
                2.25B
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Users all over the world
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mr-6">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-4xl">
                $130.04M
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Volume pushed through app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
