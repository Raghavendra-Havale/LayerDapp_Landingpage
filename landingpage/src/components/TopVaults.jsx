import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";

function TopVaults() {
  const sectionRef = useRef(null);
  const [cards, setCards] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const containerRef = useRef(null);

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

    const interval = setInterval(() => {
      const container = document.getElementById("card-container");
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }, 10);
  }, []);


  return (
    <section className="pt-10 bg-white dark:bg-darktext">
      <div
        className="flex flex-col mx-auto max-w-6xl p-4 section"
        ref={sectionRef}
      >
        <div className="self-center  font-bold text-3xl md:text-4xl relative text-darktext dark:text-white">
          Top Performing Vaults
          <img
            src="../../underline.png"
            alt="underline image"
            className="absolute w-[400px] h-auto"
          />
        </div>
        <div
       id="card-container"
      className="max-w-screen overflow-hidden p-4 mt-5"
      style={{ height: "150px", whiteSpace: "nowrap", WebkitOverflowScrolling: "auto" }}
    >
      
        {cards.map((card, index) => (
          <div key={index} className="inline-block mr-5" style={{ animation: "scroll 40s linear infinite" }}>
            <Card>
              <div className="flex justify-around">
                <div className="flex items-center">
                  <p className="mr-5 text-gray-500">{index}</p>
                  <div className="flex">
                    <img
                      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                      className="h-12"
                      alt="ETH"
                      style={{
                        filter:
                          "brightness(80%) sepia(100%) hue-rotate(320deg)",
                      }}
                    />
                    <img
                      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                      className="h-12 -ml-5"
                      alt="ETH"
                      style={{
                        filter:
                          "brightness(80%) sepia(100%) hue-rotate(120deg)",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col ml-4">
                  <div className="text-base font-bold mb-1 ">
                    Uniswap-MakerDao
                  </div>
                  <div className="text-sm ">Hedging</div>
                </div>

                <div className="relative min-h-12">
                  <div className="absolute top-2 right-0 mt-6">
                    <button className="bg-green-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
                      0.1%
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      
    </div>



        <div className="flex justify-center pb-6">
          <a href="https://v1-frontend-staging.vercel.app" className="" target ="_blank">
            <button className="font-medium py-2 px-4 rounded-md bg-btn text-white hover:bg-btn/70">
              Create your own vault
            </button>
          </a>
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
