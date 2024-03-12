import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";
import layerdAppImg from "../assets/layerdApp.png";

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
    <section className={`pt-28 bg-gradient-to-r from-gray-900 to-blue-900`}>
      <div className="mx-auto  max-w-6xl px-4 flex section" ref={sectionRef}>
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-7 justify-center items-center">
            <div className="w-full lg:max-w-[55%] flex flex-col items-center lg:items-start">
              <h1 className="text-2xl md:text-[56px]  font-semibold bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 bg-clip-text text-transparent leading-none lg:leading-[100px] text-center lg:text-left">
                {`DeFi's Command  Center `}
              </h1>
              <p className="mt-4 font-medium text-sm md:text-base text-white dark:text-white leading-tight md:leading-[24px] text-center lg:text-left">
                Layerdapp: Elevate Your DeFi Adventure. Dive deep into the web3
                realm, effortlessly bridging diverse protocols. Transform
                intricate strategies into intuitive actions, and unlock a world
                of decentralized opportunities with unparalleled precision and
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
                <button className="bg-btn px-20 md:px-[100px] lg:px-[150px] font-bold py-4 text-white rounded-[20px] mt-9">
                  Launch App
                </button>
              </a>
            </div>
            <div className="flex justify-center lg:justify-start lg:items-start w-full h-full lg:w-[45%] pb-10">
              <img src={layerdAppImg} className="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between bg-gray-900/40 w-full mx-auto max-w-6xl md:p-5 lg:p-10 rounded-[36px]  dark:border-darktext/50  relative mt-20">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-5xl opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d">
                $329.66M
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                TVL of protocol
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-5xl">
                2.25B
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Protocols Used
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-5xl">
                2.25B
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Users all over the world
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-white dark:text-white font-bold md:text-2xl lg:text-5xl">
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
