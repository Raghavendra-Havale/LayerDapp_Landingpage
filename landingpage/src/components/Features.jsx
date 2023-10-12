function Features() {
  return (
    <section className="-mt-24 pt-28 bg-offwhite">
      <div className="flex flex-col mx-auto max-w-6xl p-4">
        <h5 className="text-center text-lg font-normal text-darktext">
          FEATURES
        </h5>
        <div className="flex flex-col items-center justify-center self-center w-[558px]">
          <h2 className="text-center flex-wrap font-semibold text-2xl text-darktext">
            What makes Layedapp the preferred choice for customers?.
          </h2>
          <p className="text-center text-graytext text-lg">
            Lorem ipsum dolor sit amet consectetur. Facilisis commodo vulputate
            sagittis fames convallis.
          </p>
        </div>
        <div className="grid auto-cols-max grid-flow-col gap-x-20 overflow-auto text-sm font-medium mt-14 no-scrollbar">
          <div className="flex gap-5 items-start">
            <span className="w-[150px] h-[150px] rounded-full bg-graytext/30"></span>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-4xl text-darktext">
                Create DSA
              </h1>
              <ol>
                <li className="font-normal text-base text-darktext">
                  Create multiple accounts
                </li>
                <li className="font-normal text-base text-darktext">
                  Add multiple authorities
                </li>
                <li className="font-normal text-base text-darktext">
                  Easy account interaction
                </li>
                <li className="font-normal text-base text-darktext">
                  Interact with multiple accounts
                </li>
              </ol>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <span className="w-[150px] h-[150px] rounded-full bg-graytext/30"></span>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-4xl text-darktext">
                Interact with multiple protocols
              </h1>
              <ol>
                <li className="font-normal text-base text-darktext">
                  Enable multiple accounts on protocols
                </li>
                <li className="font-normal text-base text-darktext">
                  Create strategies on protocols
                </li>
                <li className="font-normal text-base text-darktext">
                  Increase capital efficiency with enhanced strategies and
                  automation
                </li>
              </ol>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <span className="w-[150px] h-[150px] rounded-full bg-graytext/30"></span>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold text-4xl text-darktext">
                Creating Vault
              </h1>
              <ol>
                <li className="font-normal text-base text-darktext">
                  Combine multiple protocols
                </li>
                <li className="font-normal text-base text-darktext">
                  Create complex and capital efficient strategies using multiple
                  protocols
                </li>
                <li className="font-normal text-base text-darktext">
                  Leverage, hedge and more
                </li>
                <li className="font-normal text-base text-darktext">
                  Multiple positions using DSA
                </li>
                <li className="font-normal text-base text-darktext">
                  Track position performance efficiently
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
