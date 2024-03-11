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
    <section className="pt-10 pb-20 bg-gradient-to-r from-gray-900 to-blue-900">
      <div
        className="mx-auto max-w-[1120px] h-[650px] w-full p-4 flex flex-col section bg-gray-900/40 rounded-[40px]"
        ref={sectionRef}
      >
        <div className="flex flex-col h-full md:flex-row items-center justify-between mx-5  ">
        <div className="flex flex-col w-[550px] md:flex-row items-center justify-between gap-6     my-12">
          <div className="flex flex-col items-center md:items-start w-full    md:w-full">
            <h5 className="mb-3 font-bold text-center md:text-left text-[18px]     text-white dark:text-white">
              ECOSYSTEM AND PARTNERS
            </h5>
            <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              An Ecosystem of DeFi Apps
            </h1>
            <h5 className="text-lg md:text-3xl font-semibold text-center md:text-left mt-4 text-white dark:text-white">
              Unlocking Financial Freedom
            </h5>
            <p className="text-sm md:text-lg text-gray-500 text-center md:text-left mt-4">
              A growing number of DApps are collaborating with Layerdapp to
              create a multi-chain DeFi ecosystem
            </p>
          </div>

        
        </div>

        <div className="w-[550px] flex flex-wrap gap-5 overflow-scroll h-[500px] ">
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Polygon</div>
           </div>

           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../arbitrum-logo.webp"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Arbitrum</div>
           </div>

           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../avalanche-logo.webp"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Avalanche</div>
           </div>
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../bnb-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold ">  BNB</div>
           </div>
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../ethereum-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold ">Ethereum</div>
           </div>
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../gnosis-logo.webp"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold ">Gnosis</div>
           </div>

           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../gnosis-logo.webp"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold ">Gnosis</div>
           </div>
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../optimism-logo.webp"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Optimism</div>
           </div>
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Polygon</div>
           </div>

           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Polygon</div>
           </div>

           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Polygon</div>
           </div>
           <div className="w-[160px] h-[200px] px-4 bg-[#020916] flex flex-col justify-between py-4 rounded-[30px]">
              <div className="w-full h-full flex justify-center items-center mb-2 ">
              <img
                    src="../../polygon-logo.png"
                    alt="logo"
                    className="w-[80px]"
                    loading="lazy"
                   
                  />
              </div>
              <div className="w-full h-[56px] bg-[#161E2D] rounded-3xl text-white flex items-center justify-center font-semibold "> Polygon</div>
           </div>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default Ecosystem;
