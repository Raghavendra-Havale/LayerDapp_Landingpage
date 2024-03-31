import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

import trail from "../assets/bg3.webp";
import trail2 from "../assets/bg2.webp";
import trail3 from "../assets/bg4.webp";

function TopVaults() {
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
    // <section className="pt-10 bg-white dark:bg-darktext">
    //   <div
    //     className="flex flex-col mx-auto max-w-6xl p-4 section"
    //     ref={sectionRef}
    //   >
    //     <div className="self-center  font-bold text-3xl md:text-4xl relative text-darktext dark:text-white">
    //       Top Performing Vaults
    //       <img
    //         src="../../underline.png"
    //         alt="underline image"
    //         className="absolute w-[400px] h-auto"
    //       />
    //     </div>
    //     <div className="flex flex-col items-center justify-center self-center w-full md:w-1/2 mt-4">
    //       <h2 className="text-center flex-wrap font-semibold text-xl text-darktext dark:text-white">
    //       Diffusion Vaults Coming Soon
    //       </h2>
    //       <p className="text-center text-graytext text-lg">
    //       Diffusion Vaults Coming Soon, This is where the top strategies by our experienced partners, partner protocols and Defi strategy managers will show
    //       </p>
    //     </div>
    //     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mt-12">
    //       <Card>
    //         <div className="flex justify-around">
    //           <div className="flex items-center">
    //             <p className="mr-5 text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1 ">
    //               Uniswap-MakerDao
    //             </div>
    //             <div className="text-sm ">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-green-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>

    //       <Card>
    //         <div className="flex justify-around">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //       <Card>
    //         <div className="flex justify-around">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>

    //       <Card>
    //         <div className="flex justify-around">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-green-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //       <Card>
    //         <div className="flex justify-around">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-green-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //       <Card>
    //         <div className="flex justify-around">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-green-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //       <Card>
    //         <div className="flex justify-around ">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-green-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //       <Card>
    //         <div className="flex justify-around ">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //       <Card>
    //         <div className="flex justify-around ">
    //           <div className="flex items-center">
    //             <p className="mr-5  text-gray-500">01</p>
    //             <div className="flex">
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
    //                 }}
    //               />
    //               <img
    //                 src="https://cdn.instadapp.io/icons/tokens/eth.svg"
    //                 className="h-12 -ml-5"
    //                 alt="ETH"
    //                 style={{
    //                   filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div className="flex flex-col ml-4">
    //             <div className="text-base font-bold mb-1">Uniswap-MakerDao</div>
    //             <div className="text-sm">Hedging</div>
    //           </div>

    //           <div className="relative min-h-12">
    //             <div className="absolute top-2 right-0 mt-6">
    //               <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
    //                 0.1%
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //     </div>
    //     <div className="flex justify-center pt-5 pb-6">
    //       <a href="https://v1-frontend-staging.vercel.app" className="" target ="_blank">
    //         <button className="font-medium py-2 px-4 rounded-md bg-btn text-white hover:bg-btn/90">
    //           Create your own vault
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className="py-10 bg-[#151D29]">
      <div className=" mx-auto max-w-7xl flex justify-between items-center mt-[100px] bg-[#151D29]">
        <h1 className="font-poppins text-8xl text-left font-semibold md:text-8xl text-white md:text-left pl-24 pt-24 leading-[120px]  ">
          Diffusion{" "}
          <button className="absolute -ml-20 font-normal text-sm px-3 rounded-full py-[10px]  bg-[#EA2315] ">
            Comming soon
          </button>
          <div style={{ display: "inline-block", marginTop: "40px" }}>
            <span>Vault</span>
          </div>
        </h1>

        <div className="mt-[15%] w-[63%] h-[320px] bg-[#FFFFFF] bg-opacity-5 rounded-3xl bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
              <img src={trail} className="w-full h-full rounded-3xl" />
            </div>

            <div className="absolute backface-hidden w-full h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl shadow-2xl">
              <div className=" mt-8 text-center font-medium text-[24px] text-white pt-10">
                Your playground
              </div>

              <div className="p-6 ">
                <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Create numerous strategies that can be built on top of
                  multiple legacy protocols and create strategies like hedging,
                  leverage and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex justify-between items-center  gap-6  mt-6">
        <div className=" w-[70%] h-[340px] bg-[#FFFFFF] bg-opacity-5 rounded-3xl bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
              <img src={trail2} className="w-full h-full rounded-3xl" />
            </div>

            <div className="absolute backface-hidden w-full h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl shadow-2xl">
              <div className=" mt-8 text-center font-medium text-[24px] text-white pt-10">
                Custom Logic
              </div>

              <div className="p-6 ">
                <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Our contracts can handle your custom logic that you can build
                  using Typescript.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70%] h-[340px] bg-[#FFFFFF] bg-opacity-5 rounded-3xl bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
              <img src={trail3} className="w-full h-full rounded-3xl" />
            </div>

            <div className="absolute backface-hidden w-full h-full bg-[#FFFFFF] bg-opacity-5 rounded-3xl shadow-2xl">
              <div className=" mt-8 text-center font-medium text-[24px] text-white  pt-10">
                Everything Defi
              </div>

              <div className="p-6 ">
                <p className=" leading-[24px] text-[#FFFFFF] text-opacity-70 text-[15px] font-normal mb-4 mt-4 text-center ">
                  Use multiple protocols or choose specific assets, manual or
                  automated build anything you like.
                </p>
              </div>
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
