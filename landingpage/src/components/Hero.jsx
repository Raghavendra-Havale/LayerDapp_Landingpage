import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";

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
    <section className={`background-img pt-28 bg-white dark:bg-secondary`}>
      <div className="mx-auto max-w-6xl px-4 flex section" ref={sectionRef}>
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-7 justify-center items-center">
            <div className="w-full lg:max-w-[55%] flex flex-col items-center lg:items-start">
              <h1 className="text-2xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent leading-none lg:leading-[96px] text-center lg:text-left">
                {`DeFi's Command Center for Seamless Strategy Execution`}
              </h1>
              <p className="mt-4 font-medium text-sm md:text-base text-darktext dark:text-white leading-tight md:leading-[24px] text-center lg:text-left">
                Layerdapp: Elevate Your DeFi Adventure. Dive deep into the web3
                realm, effortlessly bridging diverse protocols. Transform
                intricate strategies into intuitive actions, and unlock a world
                of decentralized opportunities with unparalleled precision and
                security.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-11">
                <a
                  href="https://twitter.com/LayerDapp"
                  className="text-darktext dark:text-white"
                >
                  <RiTwitterXFill className="text-3xl" />
                </a>
                <a
                  href="https://discord.gg/eDwnvCc8nB"
                  className="text-darktext dark:text-white"
                >
                  <FaDiscord className="text-3xl" />
                </a>
                <a
                  href="https://github.com/LayerDapp"
                  className="text-darktext dark:text-white"
                >
                  {" "}
                  <FaGithub className="text-3xl" />
                </a>
              </div>
              <a href="https://v1-frontend-staging.vercel.app" className="">
                <button className="bg-btn px-20 md:px-[100px] lg:px-[150px] py-4 text-white rounded-xl mt-9">
                  Launch App
                </button>
              </a>
            </div>
            <div className="flex justify-center lg:justify-start lg:items-start w-full h-full lg:w-[45%] pb-10">
              <img src="../../LAYER DAPP 3 1.png" className="" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between bg-white/10 w-full mx-auto max-w-6xl md:p-5 lg:p-10 rounded-lg border border-white/50 dark:border-darktext/50 bg-gradient-to-r from-btn/40 via-transparent to-transparent relative mt-20">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-darktext dark:text-white font-bold md:text-2xl lg:text-5xl">
                $329.66M
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                TVL of protocol
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-darktext dark:text-white font-bold md:text-2xl lg:text-5xl">
                2.25B
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Protocols Used
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-darktext dark:text-white font-bold md:text-2xl lg:text-5xl">
                2.25B
              </h3>
              <p className="text-graytext font-semibold text-xs lg:text-base">
                Users all over the world
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-darktext dark:text-white font-bold md:text-2xl lg:text-5xl">
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
