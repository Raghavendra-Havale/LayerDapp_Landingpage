import { useRef, useEffect } from "react";
import './Ecosystem.css';


function Ecosystem() {
  const sectionRef = useRef(null);
  const animatedDivRef = useRef(null); 

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            // Check for the specific div and add animation class
            if (entry.target === animatedDivRef.current) {
              entry.target.classList.add("fade-in-on-scroll");
            }

            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Observe the animated div
    if (animatedDivRef.current) {
      sectionObserver.observe(animatedDivRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section className="pb-20 bg-[#151D29] z-100 ">
      {/* <img src={ecosystemBlur} className="absolute " /> */}

      <div
        className="mx-auto max-w-7xl h-[600px]  w-full p-4 flex flex-col section z-50 bg-[#020916]/30 rounded-[40px] "
        ref={sectionRef}
      >

        <div className="flex flex-col h-full md:flex-row items-center justify-between gap-5 px-4">
          <div className="flex flex-col w-[550px] md:flex-row items-center justify-between gap-6     my-12"
          ref={animatedDivRef}>
            <div className="flex flex-col items-center md:items-start w-full    md:w-full">
              <h5 className="mb-3 font-semibold text-center md:text-left text-[18px]     text-white dark:text-white">
                ECOSYSTEM AND PARTNERS
              </h5>
              <h1 className="font-semibold text-3xl md:text-[40px] text-center md:text-left bg-gradient-to-r from-[#0199D2] via-blue-600 to-blue-700 bg-clip-text text-transparent tracking-tighter">
                An Ecosystem of DeFi Apps
              </h1>
              <h5 className="font-semibold text-3xl md:text-[40px] text-center md:text-left mt-4 text-white dark:text-white tracking-tighter">
                Unlocking Financial Freedom
              </h5>
              <p className="text-sm md:text-[20px] leading-7 text-gray-500 text-center md:text-left mt-4">
                Dive into the vast LayerDapp ecosystem, where every DeFi tool
                and protocol you need is at your fingertips.
              </p>
            </div>
          </div>

          <div className="sm:w-7/12 sm:mt-0 mt-[30px] w-full flex justify-center sm:gap-x-10 gap-x-4 overflow-hidden">
            <div className="mt-2">
              <div className="overflow-hidden h-[590px] flex flex-col">
                <div className="animation_settings flex flex-col gap-4">
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]  z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../uni_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Uniswap
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../lido_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Lido
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../compound_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Compound
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../newAave.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px]  bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Aave
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10" >
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../arbitrum-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Arbitrum
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../avalanche-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Avalanche
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../bnb-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      BNB
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px] z-10">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../ethereum-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Ethereum
                    </div>
                  </div>
                  <div className="w-[165px]  z-50 h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../gnosis-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Gnosis
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] z-100 px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../gnosis-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] z-100 bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Gnosis
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../optimism-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] z-100 bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Optimism
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../polygon-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Polygon
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="overflow-hidden h-[590px] flex flex-col">
                <div className="animation_settings2 flex flex-col gap-4">
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../uni_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Uniswap
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../lido_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Lido
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../compound_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Compound
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../newAave.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px]  bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Aave
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../arbitrum-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Arbitrum
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../avalanche-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Avalanche
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../bnb-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      BNB
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../ethereum-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Ethereum
                    </div>
                  </div>
                  <div className="w-[165px]  z-50 h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../gnosis-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Gnosis
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] z-100 px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../gnosis-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] z-100 bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Gnosis
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../optimism-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] z-100 bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Optimism
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../polygon-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Polygon
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block mt-2">
              <div className="overflow-hidden h-[590px] flex flex-col">
                <div className="animation_settings flex flex-col gap-4">
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../uni_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Uniswap
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../lido_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Lido
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../compound_logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Compound
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../newAave.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px]  bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Aave
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../arbitrum-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Arbitrum
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../avalanche-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Avalanche
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../bnb-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      BNB
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../ethereum-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Ethereum
                    </div>
                  </div>
                  <div className="w-[165px]  z-50 h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../gnosis-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Gnosis
                    </div>
                  </div>

                  <div className="w-[165px] h-[220px] z-100 px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../gnosis-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] z-100 bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      Gnosis
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../optimism-logo.webp"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] z-100 bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Optimism
                    </div>
                  </div>
                  <div className="w-[165px] h-[220px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
                    <div className="w-full h-full flex justify-center items-center mb-2 ">
                      <img
                        src="../../polygon-logo.png"
                        alt="logo"
                        className="w-[80px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center text-base font-normal ">
                      {" "}
                      Polygon
                    </div>
                  </div>
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
