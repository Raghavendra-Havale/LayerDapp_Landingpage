function Ecosystem() {
  return (
    <div className="flex flex-col text-white ml-10 mt-24 mb-16 relative">
      <div className="flex-1">
        <div className="mb-5 font-bold text-1xl ml-4 text-blue-900">
          ECOSYSTEM AND PARTNERS
        </div>
        <div className="font-bold text-4xl ml-4 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent">
          An Ecosystem of DeFi Apps
        </div>
        <div className="text-3xl ml-4 font-bold mt-4 text-blue-900">
          Unlocking Financial Freedom
        </div>
        <div className="text-lg ml-4 text-gray-500">
          A growing number of DApps are collaborating with Layerdapp to create
        </div>
        <div className="text-lg ml-4 text-gray-500">
          a multi-chain DeFi ecosystem to create a multi-chain DeFi ecosystem
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <img src="../../uni.png" alt="not there" className="w-120 h-78" />
      </div>

      <div className="flex items-center  ml-4 mb-[5rem]">
        <div className="flex items-center ml-[2rem] mt-[5rem]">
          <div className="h-6 w-6 filter brightness-80 sepia-100 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
          <p className="ml-2 text-black text-base">Gnosis</p>
        </div>

        <div className="flex items-center ml-[2rem] mt-[5rem]">
          <div className="h-6 w-6 filter brightness-80 sepia-100 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
          <p className="ml-2 text-black text-base">Optimism</p>
        </div>

        <div className="flex items-center ml-[2rem] mt-[5rem]">
          <div className="h-6 w-6 filter brightness-80 sepia-100 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
          <p className="ml-2 text-black text-base">Eth</p>
        </div>
        <div className="flex items-center ml-[2rem] mt-[5rem]">
          <div className="h-6 w-6 filter brightness-80 sepia-100 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
          <p className="ml-2 text-black text-base">Optimism</p>
        </div>

        <div className="flex items-center   ml-[2rem] mt-[5rem]">
          <div className="h-6 w-6 filter brightness-80 sepia-100 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
          <p className="ml-2 text-black text-base">Polygon</p>
        </div>
        <div className="flex items-center  ml-[2rem] mt-[5rem]">
          <div className="h-6 w-6 filter brightness-80 sepia-100 rounded-full bg-gradient-to-r from-pink-500 to-green-500" />
          <p className="ml-2 text-black text-base">Ethereum</p>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
