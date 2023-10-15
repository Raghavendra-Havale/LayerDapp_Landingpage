const Card = ({ children }) => (
  <div
    style={{
      backgroundColor: "#FAFAFA",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // marginLeft: "22px",
      //  marginRight:'15px',
      padding: "15px",
      marginTop: "18px",
      borderRadius: "8px",
      // boxShadow: "-1px 1px 19px -2px rgba(0, 0, 0, 0.1)",
      color: "#24a642de",
      width: "350px",
      height: "120px",
    }}
  >
    {children}
  </div>
);

function TopVaults() {
  return (
    <div>
      <div className="  font-bold text-4xl relative ml-[12rem] pt-[6rem]">
        Top Performing Vaults
        <img
          src="../../underline.png"
          alt="underline image"
          className="absolute w-[400px] h-auto"
        />
      </div>
      <div className="grid grid-cols-3 gap-15 justify-center mx-auto max-w-1200 ml-[5rem]">
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
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

        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
            </div>

            <div className="relative min-h-12">
              <div className="absolute top-2 right-0 mt-6">
                <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
            </div>

            <div className="relative min-h-12">
              <div className="absolute top-2 right-0 mt-6">
                <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
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
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
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
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
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
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
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
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
            </div>

            <div className="relative min-h-12">
              <div className="absolute top-2 right-0 mt-6">
                <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-around mt-6">
            <div className="flex items-center">
              <p className="ml-1  text-gray-500">01</p>
              <div className="flex">
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                  }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12 -ml-5"
                  alt="ETH"
                  style={{
                    filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-base font-bold mb-1 text-[#020916]">
                Uniswap-MakerDao
              </div>
              <div className="text-sm text-[#020916]">Hedging</div>
            </div>

            <div className="relative min-h-12">
              <div className="absolute top-2 right-0 mt-6">
                <button className="bg-red-600 text-white px-2 py-1 rounded-full text-xs w-7 h-7 flex items-center justify-center">
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-center mt-3 mb-3">
        <button className="font-bold py-2 px-4 rounded-md bg-btn text-white hover:bg-btn/90">
          Launch App
        </button>
      </div>
    </div>
  );
}

export default TopVaults;
