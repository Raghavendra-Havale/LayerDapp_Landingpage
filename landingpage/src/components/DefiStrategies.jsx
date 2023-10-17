function DefiStrategies() {
  return (
    <section className="pt-28 pb-10 bg-offwhite dark:bg-secondary">
      <div className="mx-auto max-w-6xl p-4 flex flex-col items-center">
        <div className="flex items-center justify-center w-[610px]">
          <h2 className="text-center font-semibold text-4xl text-darktext dark:text-white break-normal">
            <span className="relative">
              Create Countless DeFi strategies
              <img
                src="../../underline.png"
                alt="underline image"
                className="absolute w-[300px] h-auto"
              />
            </span>{" "}
            all in one transaction
          </h2>
        </div>
        <div className="w-full mt-20 relative">
          <img
            src="../../Frame.png"
            alt="frame"
            className="flex justify-self-start w-[80%] h-auto dark:hidden"
          />
          <img
            src="../../Frame-2.png"
            alt="frame"
            className="hidden justify-self-start w-[80%] h-auto dark:flex"
          />
          <img
            src="../../absolute-frame.png"
            alt="absolute frame"
            className="absolute w-[30%] h-auto top-1/2 right-0 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
}

export default DefiStrategies;
