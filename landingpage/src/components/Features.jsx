import { useRef, useEffect, useState } from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";

function Features() {
  const sectionRef = useRef(null);
  
  const [image, setImage] = useState('vault.png'); // Set your default image here
  
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
    <section className="pt-16 bg-offwhite dark:bg-secondary">
      <div className="flex flex-col mx-auto max-w-6xl p-4 section" ref={sectionRef}>
        <div className="self-center font-bold text-4xl relative text-darktext dark:text-white">
          LayerDapp Features
          <img src="../../underline.png" alt="underline image" className="absolute w-[300px] h-auto" />
        </div>
        <div className="flex flex-col items-center justify-center self-center w-full md:w-1/2 mt-4">
          <h2 className="text-center flex-wrap font-semibold text-xl text-darktext dark:text-white">
            What makes Layedapp the preferred choice for customers?.
          </h2>
          <p className="text-center text-graytext text-lg">
            Lorem ipsum dolor sit amet consectetur. Facilisis commodo vulputate
            sagittis fames convallis.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-[5rem] gap-y-10 md:gap-y-20 items-center mt-8">
          <div className="flex items-center justify-center">
            <img src="../../script.png" alt="script" className="brightness-50 sepia -hue-rotate-60" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Create DSA
            </h1>
            <ol className="flex flex-col w-[80%] md:w-full ml-2 md:ml-0">
              <li className="font-normal border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Create multiple accounts
              </li>
              <li className="font-normal border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Add multiple authorities
              </li>
              <li className="font-normal border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Easy account interaction
              </li>
              <li className="font-normal border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Interact with multiple accounts
              </li>
            </ol>
          </div>
          <div className="flex md:hidden items-center justify-center">
            <img src="../../connect.png" alt="script" className="" />
          </div>
          <div className="flex flex-col items-center gap-5 self-center">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-center md:text-right">
              Interact with multiple protocols
            </h1>
            <ol className="text-left md:text-right ml-3 md:ml-0">
              <li className="font-normal border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Enable multiple accounts on protocols.
              </li>
              <li className="font-normal border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Create strategies on protocols.
              </li>
              <li className="font-normal border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Increase capital efficiency with enhanced strategies and
                automation.
              </li>
            </ol>
          </div>
          <div className="md:flex hidden items-center justify-center">
            <img src="../../connect.png" alt="script" className="" />
          </div>
  
          
            
          </div>
        </div>
        <div className="flex flex-col md:items-center mt-10 gap-5">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Diffusion Vaults(Coming Soon)
            </h1>
            
    <div class="container relative max-w-4xl">
        <div class="grid grid-cols-2 mx-10 lg:grid-rows-1 md:grid-rows-2 gap-4">
            <div class="group items-center justify-center relative p-5 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
              <a href="#" class="card__thumb"> 
                <div class="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 
                        24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22
                         L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                 
                    </svg>
                </div>
                </a>
                <div class=" mt-6" id="card__body">
                    <a class="card__title text-2xl font-medium text-black dark:text-white group-hover:text-white transition-all duration-500 ease-in-out" href="/index-law">Strategy Management Layer</a>
                    <p class="card__description text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">We are building strategy management layer that enables strategy manager to create manual/automated strategies using multiple protocols.</p>
                </div>
            </div>
            <div class="group relative p-5 bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out overflow-hidden text-center">
                <div class="w-20 h-20 bg-white text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 
                        15 11 C 15 12.439 14.439 13 13 13 L 13 15 C 13.775751 15 14.436786 14.848831 15 14.587891 L 15 20 L 17 20 
                        L 17 11 L 15 11 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15
                        .5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"></path>
                    </svg>
                </div>
                <div class="mt-6">
                    <a class="text-2xl font-medium text-white transition-all duration-500 ease-in-out" href="/index-law">Logic Layer</a>
                    <p class="text-white/75 transition-all duration-500 ease-in-out mt-3">In short, what you want to do on Defi in a single click.</p>
                </div>
            </div>
            <div class="group relative p-5 bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out overflow-hidden text-center">
                <div class="w-20 h-20 bg-white text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 
                        15 11 C 15 12.439 14.439 13 13 13 L 13 15 C 13.775751 15 14.436786 14.848831 15 14.587891 L 15 20 L 17 20 
                        L 17 11 L 15 11 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15
                        .5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"></path>
                    </svg>
                </div>
                <div class="mt-6">
                    <a class="text-2xl font-medium text-white transition-all duration-500 ease-in-out" href="/index-law">Execution Layer</a>
                    <p class="text-white/75 transition-all duration-500 ease-in-out mt-3">Secret sauce, your strategy get checked and executed here and enables you to use multiple protocols in one transactions.</p>
                </div>
            </div>
          
            <div class="group relative p-5 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 
                        24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22
                         L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                 
                    </svg>
                </div>
                <div class="mt-6">
                    <a class="text-2xl text-black font-medium group-hover:text-white transition-all duration-500 ease-in-out dark:text-white" href="/index-law">
                        Strategy Management Features</a>
                    <p class="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Custom share minting, Automated strategies support, Script logic support, Accurate strategy insights, Multi asset support and special deposit, withdraw and rebalance mechanism.</p>
                </div>
            </div>
        </div>
    </div>
</div>
         
    </section>
  );
}

export default Features;
