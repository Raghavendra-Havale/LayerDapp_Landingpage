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
          <div className="flex items-center justify-center mt-4">
            <img src={image} alt="script" className="" style={{ height: '40rem', width: '32rem', borderRadius: "15px" }} />
          </div>
          <div className="flex flex-col md:items-start gap-5">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Diffusion Vaults(Coming Soon)
            </h1>
            <div className="flex flex-col" id="outer">
              <div class="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] transition-transform hover:-translate-x-3" onMouseOver={() => {setImage('phone.jpg')}}>
                <div class="flex flex-row gap-3">
                  <div class="p-1">
                    <img src="./bnb-logo.png" alt="" width={83} height={40} id="vault-img" />
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-blue-600 font-bold text-xl md:text-sm lg:text-base xl:text-lg">
                      Strategy Management Layer
                    </h3>
                    <p class="flex-shrink-0 text-darktext dark:text-graytext text-sm md:text-base lg:text-lg xl:text-xl">
                      We are building strategy management layer that enables strategy manager to create manual/automated strategies using multiple protocols
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] transition-transform hover:-translate-x-3" onMouseOver={() => {setImage('phone.jpg')}}>
                <div class="flex flex-row gap-3">
                  <div class="p-1">
                    <img src="./bnb-logo.png" alt="" width={32} height={40} id="vault-img" />
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-blue-600 font-bold text-xl md:text-sm lg:text-base xl:text-lg">
                      Logic Layer
                    </h3>
                    <p class="flex-shrink-0 text-darktext dark:text-graytext text-sm md:text-base lg:text-lg xl:text-xl">
                      In short, what you want to do on Defi in a single click
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] transition-transform hover:-translate-x-3" onMouseOver={() => {setImage('phone.jpg')}}>
                <div class="flex flex-row gap-3">
                  <div class="p-1">
                    <img src="./bnb-logo.png" alt="" width={70} height={40} id="vault-img" />
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-blue-600 font-bold text-xl md:text-sm lg:text-base xl:text-lg">
                      Execution Layer
                    </h3>
                    <p class="flex-shrink-0 text-darktext dark:text-graytext text-sm md:text-base lg:text-lg xl:text-xl">
                      Secret sauce, your strategy get checked and executed here and enables you to use multiple protocols in one transactions
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-secondary rounded-lg p-4 mb-4 flex flex-col gap-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,0.1)] transition-transform hover:-translate-x-3" onMouseOver={() => {setImage('phone.jpg')}}>
                <div class="flex flex-row gap-3">
                  <div class="p-1">
                    <img src="./bnb-logo.png" width={100} height={40} alt="" />
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-blue-600 font-bold text-xl md:text-sm lg:text-base xl:text-lg">
                      Strategy Management Features
                    </h3>
                    <p class="flex-shrink-0 text-darktext dark:text-graytext text-sm md:text-base lg:text-lg xl:text-xl">
                      Custom share minting, Automated strategies support, Script logic support, Accurate strategy insights, Multi asset support and special deposit, withdraw and rebalance mechanism
                    </p>
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

export default Features;
