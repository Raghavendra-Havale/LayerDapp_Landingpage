import { useRef, useEffect } from "react";

function Ecosystem() {
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
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
  }, []);
  return (
    <section className="pt-10 pb-20 bg-offwhite dark:bg-secondary">
      <div
        className="mx-auto max-w-6xl p-4 flex flex-col section"
        ref={sectionRef}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6  my-12">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
            <h5 className="mb-3 font-bold text-center md:text-left text-2xl text-darktext dark:text-white">
              ECOSYSTEM AND PARTNERS
            </h5>
            <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              An Ecosystem of DeFi Apps
            </h1>
            <h5 className="text-lg md:text-3xl font-medium text-center md:text-left mt-4 text-darktext dark:text-white">
              Unlocking Financial Freedom
            </h5>
            <p className="text-sm md:text-lg text-gray-500 text-center md:text-left mt-4">
              A growing number of DApps are collaborating with Layerdapp to
              create a multi-chain DeFi ecosystem
            </p>
          </div>

          <div className="w-[80%] md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className="bg-white dark:bg-darktext p-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] rounded-md">
                <h3 className="text-1xl font-semibold mb-2 text-darktext dark:text-white font-poppins">
                  NETWORKS
                </h3>
                <ul className="list-disc ml-2">
                  <div className="!min-w-max flex items-center gap-x-4 object-contain mr-[60px] mb-1">
                    <img
                      src="../../polygon-logo.png"
                      alt="logo"
                      className="w-[30px]"
                    />
                    <span className="text-sm leading-[30px] tracking-wide   font-bold font-400 text-popins text-020916 text-darktext dark:text-white ">
                      Polygon
                    </span>
                  </div>
                  <div className="!min-w-max flex items-center gap-x-4 mr-[60px]  mb-1">
                    <img
                      src="../../arbitrum-logo.webp"
                      alt="logo"
                      className="w-[30px]"
                    />
                    <span className="text-sm leading-[30px] tracking-wide  font-bold font-400 text-popins text-020916 text-darktext dark:text-white ">
                      Arbitrum
                    </span>
                  </div>
                  <div className="!min-w-max flex items-center gap-x-4 object-contain mr-[60px]">
                    <img
                      src="../../polygonzkevm-logo.webp"
                      alt="logo"
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <span className="text-sm leading-[30px] tracking-wide  font-bold font-400 text-popins text-020916 text-darktext dark:text-white ">
                      Polygon zKEVM
                    </span>
                  </div>
                </ul>
              </div>
              <div className="bg-white dark:bg-darktext p-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] rounded-md">
                <h3 className="text-1xl font-semibold mb-2    dark:text-white font-poppins">
                  PROTOCOLS
                </h3>
                <ul className="list-disc ml-2 text-darktext dark:text-white ">
                  <div className="!min-w-max flex items-center gap-x-4 object-contain mr-[60px] mb-1">
                    <img
                      src="../../Compound.png"
                      alt="logo"
                      className="w-[30px]"
                    />
                    <span className="text-sm leading-[30px] tracking-wide  font-bold font-400 text-popins text-020916 text-darktext dark:text-white ">
                      Compound
                    </span>
                  </div>
                  <div className="!min-w-max flex items-center gap-x-4 mr-[60px]  mb-1">
                    <img src="../../aave.png" alt="logo" className="w-[30px]" />
                    <span className="text-sm leading-[30px] tracking-wide font-bold font-400 text-popins text-020916 dark:text-white">
                      AAVE
                    </span>
                  </div>
                  <div className="!min-w-max flex items-center gap-x-4 object-contain mr-[60px]">
                    <img
                      src="../../Uniswap.png"
                      alt="logo"
                      className="w-[30px]"
                      loading="lazy"
                    />
                    <span className="text-sm leading-[30px] tracking-wide   font-bold font-400 text-popins text-020916 text-darktext dark:text-white ">
                      Uniswap
                    </span>
                  </div>
                </ul>
              </div>
              
              
            </div>
            <a href="#" target="_blank">
            <div className="flex justify-center items-center bg-btn py-4 mt-4 cursor-pointer rounded-md text-white font-medium hover:bg-btn/70">
              View all networks and protocols
              </div></a>
          </div>
        </div>
        {/* slidding logos */}
        <div className="h-[70px] flex items-center justify-center">
          <div className="w-full absolute left-0 right-0 max-w-[500px] md:max-w-[1024px] lg:max-w-[1690px] mx-auto">
            <div className="overflow-hidden">
              <div className="slides-wrapper_settings">
                <div className="!min-w-max flex items-center gap-x- md:gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Polygon
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../polygonzkevm-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Polygon zKEVM
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../arbitrum-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Arbitrum
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../avalanche-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Avalanche
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../bnb-logo.png"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    BNB
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../ethereum-logo.png"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Ethereum
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../gnosis-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Gnosis
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../optimism-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Optimism
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Polygon
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../polygonzkevm-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Polygon zKEVM
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../arbitrum-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Arbitrum
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../avalanche-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Avalanche
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../bnb-logo.png"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    BNB
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../ethereum-logo.png"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Ethereum
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../gnosis-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Gnosis
                  </span>
                </div>
                <div className="!min-w-max flex items-center gap-x-[16px] object-contain mr-[60px]">
                  <img
                    src="../../optimism-logo.webp"
                    alt="logo"
                    className="w-[36px]"
                    loading="lazy"
                  />
                  <span className="text-xl leading-[30px] tracking-wide text-darktext dark:text-white ">
                    Optimism
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
