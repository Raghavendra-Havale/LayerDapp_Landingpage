const Card = ({ children }) => (
  <div
    style={{
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "22px",
      //  marginRight:'15px',
      padding: "15px",
      marginTop: "18px",
      borderRadius: "8px",
      boxShadow: "-1px 1px 19px -2px rgba(0, 0, 0, 0.1)",
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
    <div >
      <div className="p-4 shadow-lg  font-bold text-4xl relative">
        Top Performing Vaults
        <div className="absolute bottom-0 left-4 h-2 w-[25rem] bg-blue-800"></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginLeft: "0.2px", fontWeight: "bold" }}>01</p>
              <div style={{ display: "flex" }}>
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "0.2rem" }}
                />
                <img
                  src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                  className="h-12"
                  alt="ETH"
                  style={{ marginLeft: "-20px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                Uniswap-MakerDao
              </div>
              <div style={{ fontSize: "0.8rem", color: "#ca2828" }}>
                Hedging
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "50px" }}>
              <div
                style={{
                  position: "absolute",
                 
                  top: 0,
                  right: 0,
                  marginTop: "2.3rem",
                  zIndex: 1,
                }}
              >
                <button
                  style={{
                    backgroundColor: "#08400e",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "0.6rem",
                    alignItems: "center",
                    display: "flex",
                    justifySelf: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  0.1%
                </button>
              </div>
            </div>
          </div>
        </Card>







       
       
      
     
      </div>
      <div className="flex justify-center mt-3 mb-3">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
  Launch App
</button>

      </div>
    </div>
  );
}

export default TopVaults;
