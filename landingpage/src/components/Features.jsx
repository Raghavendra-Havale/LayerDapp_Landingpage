function Features() {
  return (
    <section className="pt-16 bg-offwhite dark:bg-secondary">
      <div className="flex flex-col mx-auto max-w-6xl p-4">
        <h5 className="text-center text-lg font-normal text-darktext dark:text-white">
          FEATURES
        </h5>
        <div className="flex flex-col items-center justify-center self-center w-[558px]">
          <h2 className="text-center flex-wrap font-semibold text-2xl text-darktext dark:text-white">
            What makes Layedapp the preferred choice for customers?.
          </h2>
          <p className="text-center text-graytext text-lg">
            Lorem ipsum dolor sit amet consectetur. Facilisis commodo vulputate
            sagittis fames convallis.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-[5rem] gap-y-20 items-center mt-8">
          <div className="flex items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-graytext/30"></span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="font-semibold text-4xl text-darktext bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Create DSA
            </h1>
            <ol className="list-decimal">
              <li className="font-normal text-base text-darktext dark:text-white">
                Create multiple accounts
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Add multiple authorities
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Easy account interaction
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Interact with multiple accounts
              </li>
            </ol>
          </div>
          <div className="flex md:hidden items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-graytext/30"></span>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h1 className="font-semibold text-4xl text-darktext bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center md:text-right">
              Interact with multiple protocols
            </h1>
            <ol className="text-left md:text-right">
              <li className="font-normal text-base text-darktext dark:text-white">
                Enable multiple accounts on protocols.
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Create strategies on protocols.
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Increase capital efficiency with enhanced strategies and
                automation.
              </li>
            </ol>
          </div>
          <div className="md:flex hidden items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-graytext/30"></span>
          </div>
          <div className="flex items-center justify-center">
            <span className="w-[250px] h-[250px] rounded-full bg-graytext/30"></span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="font-semibold text-4xl text-darktext bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Creating Vault
            </h1>
            <ol className="list-decimal ml-2 md:ml-0">
              <li className="font-normal text-base text-darktext dark:text-white">
                Combine multiple protocols
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Create complex and capital efficient strategies using multiple
                protocols
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Leverage, hedge and more
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
                Multiple positions using DSA
              </li>
              <li className="font-normal text-base text-darktext dark:text-white">
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
