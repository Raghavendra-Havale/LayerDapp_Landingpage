import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import "./TopVaults.css"

import BGRing from "../assets/BGRing.png";
import vault1 from "../assets/vault1.png";
import vault2 from "../assets/vault2.png";
import vault3 from "../assets/vault3.png";
import vault4 from "../assets/vault4.png";



function TopVaults() {
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
    <section className="pt-20 bg-[#151D29]">



      <img
        src={BGRing}
        className="absolute h-[full] w-[full] top-[3650px]"
      />

      <div className=" mx-auto max-w-[1340px] flex justify-between items-center mt-[100px] bg-[#020916]/40 gap-8  rounded-2xl z-[1000] p-10 backdrop-blur-sm">


        <div className="font-poppins text-[66px] text-left font-semibold  text-white z-10 pl-4 w-[44%] tracking-tight"
        ref={animatedDivRef} >
          Diffusion Vault
          <button className="absolute -ml-20  font-normal text-sm px-3 rounded-full py-[10px]  bg-[#EA2315] ">
            Coming soon
          </button>
          <p className="text-2xl font-extralight tracking-normal text-white z-10">Diffusion Vaults are playground to use multiple protocols together to create structured products </p>
        </div>


        <div className="w-[60%] flex flex-col justify-between items-center">

        <div className="p-5 w-full h-[240px] rounded-3xl flex justify-between items-center bg-[#020916]">
          <div className="w-[48%] flex flex-col justify-between items-start p-1">
            <img src={vault1} alt="Vault 1" className="w-[11%] ml-2 rounded-full"/>
            <p className="font-light text-base text-white leading-6 mt-4">Integration with plugins and automation to enable easy creation and management of strategies</p>
          </div>

          <div className="h-[180px] border"></div>

          <div className="w-[48%] flex flex-col justify-between items-start  ml-4">
            <img src={vault2} alt="Vault 2" className="w-[8%] ml-2 rounded-full"/>
            <p className="font-light text-base text-white leading-6 mt-4">Enable custom share minting and performance fee to extend your strategies to public</p>
          </div>

      </div>




          <div className="p-5 w-full rounded-3xl flex justify-between items-center bg-[#020916] mt-6">

            <div className="w-[48%] flex flex-col justify-between items-start p-1 ">
              <img src={vault3} alt="err" className="w-[19%] ml-2 rounded-full"/>
              <p className="font-light text-base text-white leading-6 mt-4">If you always thought of using Uniswap and AAVE together at one place and putting idle assets in AAVE till your buying order gets triggered this is what you need</p>
            </div>

            <div className="h-[180px] border"></div>

            <div className="w-[48%] flex flex-col h-[180px]  items-baseline  ml-4 ">
            <img src={vault4} alt="err" className="w-[16%] mr-4 rounded-full"/>
              <p className="font-light text-base text-white leading-6 mt-5">It gives you access to create custom logic and automated strategy</p>
            </div>
          </div>

        </div>


      </div>

    </section>
  );
}

export default TopVaults;

function Card({ children }) {
  return (
    <div className="bg-[#fafafa] dark:bg-white/10 flex flex-col items-center p-7 rounded-lg  text-darktext dark:text-white">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.func,
};


