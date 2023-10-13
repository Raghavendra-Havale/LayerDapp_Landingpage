import React, { useState } from "react";

function TopVaults() {
  return (
    <section className="pt-12 pb-20 bg-white">
      <div className="mx-auto max-w-6xl p-4 flex flex-col items-center">
        <div className="pb-5  font-bold text-4xl relative w-full">
          Top Performing Vaults
          <img
            src="../../underline.png"
            alt="underline image"
            className="absolute w-[400px] mt-1 h-auto"
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            width: "100%",
            // justifyContent: "center",
            // margin: "0 auto",
            // maxWidth: "1200px",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(0deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#020916",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#02850F",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "hue-rotate(320deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#EA2315",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#02850F",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(0deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#02850F",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#EA2315",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(0deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#EA2315",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#020916",
                    marginBottom: "2px",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#EA2315",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  02
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(0deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#02850F",
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
                <p
                  style={{
                    marginLeft: "0.2px",
                    fontWeight: "bold",
                    color: " #A7B5C4",
                  }}
                >
                  01
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "0.2rem",
                      filter: "brightness(80%) sepia(100%) hue-rotate(320deg)",
                    }}
                  />
                  <img
                    src="https://cdn.instadapp.io/icons/tokens/eth.svg"
                    className="h-12"
                    alt="ETH"
                    style={{
                      marginLeft: "-20px",
                      filter: "brightness(80%) sepia(100%) hue-rotate(120deg)",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "2px",
                    color: "#020916",
                  }}
                >
                  Uniswap-MakerDao
                </div>
                <div style={{ fontSize: "0.8rem", color: "#020916" }}>
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
                      backgroundColor: "#02850F",
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
          <a href="https://v1-frontend-staging.vercel.app" className="">
            <button
              className="font-bold py-2 px-4 rounded-md bg-blue-500 hover:text-white"
              style={{ backgroundColor: "#1869F4" }}
            >
              Launch App
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopVaults;

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
