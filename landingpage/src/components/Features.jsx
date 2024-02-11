import { useRef, useEffect } from "react";
import vault from "../assets/vault.webp"
import network from "../assets/people2.webp"
import script from "../assets/script.webp"
function Features() {
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
    <section className="pt-16 bg-offwhite dark:bg-secondary">
      <div
        className="flex flex-col mx-auto max-w-6xl p-4 section"
        ref={sectionRef}
      >
        <div className="self-center font-bold text-4xl relative text-darktext dark:text-white">
          LayerDapp Features
          <img
            src="../../underline.png"
            alt="underline image"
            className="absolute w-[300px] h-auto"
          />
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
            <img
              src={script}
              alt="script"
              className="w-[500px] h-[500px]"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Create DSA
            </h1>
            <ol className="flex flex-col gap-5 w-[80%] md:w-full ml-2 md:ml-0">
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
          <div className="flex flex-col 	gap-y-5 items-center  self-center">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-center md:text-right">
              Interact with multiple protocols
            </h1>
            <ol className="text-left md:text-right ml-3 md:ml-0">
              <li className="font-normal mb-5 border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Enable multiple accounts on protocols.
              </li>
              <li className="font-normal mb-5 border border-graytext py-3 text-center rounded-3xl text-base text-graytext">
                Create strategies on protocols.
              </li>
              <li className="font-normal mb-5 border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Increase capital efficiency with enhanced strategies and
                automation.
              </li>
            </ol>
          </div>
          <div className="md:flex hidden items-center justify-center">
            <img src={network} alt="script" className="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={vault} alt="script" className="" />
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="font-semibold text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Creating Vault
            </h1>
            <ol className="">
              <li className="font-normal mb-5 border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Combine multiple protocols
              </li>
              <li className="font-normal mb-5 border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Create complex and capital efficient strategies using multiple
                protocols
              </li>
              <li className="font-normal mb-5 border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Leverage, hedge and more
              </li>
              <li className="font-normal mb-5 border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Multiple positions using DSA
              </li>
              <li className="font-normal mb-5 border border-graytext py-3 px-1 text-center rounded-3xl text-base text-graytext">
                Track position performance efficiently
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
