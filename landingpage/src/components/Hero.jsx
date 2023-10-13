import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative background-img w-full h-[900px] -top-[100px]">
      <div className="mx-auto max-w-6xl p-4 pt-[150px] ">
        <div className="flex  gap-7">
          <div className="">
            <h1 className="text-5xl font-semibold">
              {`DeFi's Command Center for Seamless Strategy Execution`}
            </h1>
            <p className="mt-4">
              Layerdapp: Elevate Your DeFi Adventure. Dive deep into the web3
              realm, effortlessly bridging diverse protocols. Transform
              intricate strategies into intuitive actions, and unlock a world of
              decentralized opportunities with unparalleled precision and
              security.
            </p>
            <div className="flex items-center gap-3 mt-11">
              <a href="https://twitter.com/LayerDapp" className="">
                <RiTwitterXFill className="text-3xl" />
              </a>
              <a href="https://discord.gg/eDwnvCc8nB" className="">
                <FaDiscord className="text-3xl" />
              </a>
              <a href="" className="">
                {" "}
                <FaGithub className="text-3xl" />
              </a>
            </div>
            <a href="https://v1-frontend-staging.vercel.app" className="">
              <button className="bg-btn px-[150px] py-4 text-white rounded-xl mt-9">
                Launch App
              </button>
            </a>
          </div>
          <div className="flex items-start w-full h-full">
            <img src="../../LAYER DAPP 3 1.png" className="" />
          </div>
        </div>
        <div className="absolute flex items-center justify-between bottom-0 bg-white/10 w-full mx-auto max-w-6xl p-10 rounded-lg border border-white/50 bg-gradient-to-r from-btn/40 via-transparent to-transparent">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-darktext font-bold text-5xl">$329.66M</h3>
            <p className="text-graytext font-semibold text-base">
              TVL of protocol
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-darktext font-bold text-5xl">2.25B</h3>
            <p className="text-graytext font-semibold text-base">
              Protocols Used
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-darktext font-bold text-5xl">2.25B</h3>
            <p className="text-graytext font-semibold text-base">
              Users all over the world
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-darktext font-bold text-5xl">$130.04M</h3>
            <p className="text-graytext font-semibold text-base">
              Volume pushed through app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
