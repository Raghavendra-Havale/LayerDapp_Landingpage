import React from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
function Community() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const sectionStyle = {
    width: "48%",
    // marginRight:"5rem"
  };
  const lightButtonStyle = {
    backgroundColor: "#1869F4",
    color: "#070707",
    opacity: "50%",
    padding: "10px 20px",
    margin: "0 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const iconStyle = {
    fontSize: "13px",

    color: "blue",
  };
  const containersStyle = {
    display: "flex",
    marginBottom: "30px",
    marginTop: "20px",
  };
  const cardStyle = {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "-1px 1px 19px -2px rgba(0, 0, 0, 0.1)",
    color: "#24a642de",
    height: "140px",
    width: "550px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };
  const buttonStyle = {
    backgroundColor: "#1869F4",
    color: "#ffffff",
    padding: "10px 20px",
    margin: "0 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div style={{ textAlign: "center", marginTop: "6rem" }}>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: "40px",
          fontWeight: "600",
          lineHeight: "30px",
          letterSpacing: "0rem",
          color: "#020916",
        }}
      >
        For{" "}
        <span
          style={{
            background:
              "linear-gradient(to right, #009ACE, #0C93FA, #2345F0, #3113E9, #3600E7)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          The Community
        </span>{" "}
        by
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: "40px",
          fontWeight: "600",
          lineHeight: "30px",
          letterSpacing: "0rem",
          paddingTop: "20px",

          background:
            "linear-gradient(to right, #009ACE, #0C93FA, #2345F0, #3113E9, #3600E7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        The Community
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "0rem",
          paddingTop: "20px",
          color: "#768190",
        }}
      >
        Discover top-notch strategies handpicked for
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "0rem",
          // paddingTop: "20px",
          color: "#768190",
        }}
      >
        you by the community
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={containerStyle}>
          <div style={sectionStyle}>
            <img
              src="../../Frame 251.png"
              alt="underline image"
              style={{ width: "350px", height: "620px" }}
              className="absolute ml-64 mt-12"
            />
          </div>

          <div style={sectionStyle}>
            <div
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "30px",
                letterSpacing: "0rem",
                paddingTop: "3rem",
                marginRight: "28rem",
                marginBottom: "3rem",
              }}
            >
              What the community says
            </div>
            <div>
              <div
                style={{
                  ...cardStyle,
                  marginBottom: "20px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <img
                    src="../../circle.png"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <div style={{ ...titleStyle, color: "gray" }}>
                      Full Name
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "blue",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      <BiLogoDiscordAlt style={iconStyle} /> Username
                    </div>
                  </div>
                </div>
                <p>
                  This is the content of the card. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  ...cardStyle,
                  marginBottom: "20px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <img
                    src="../../circle.png"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <div style={{ ...titleStyle, color: "gray" }}>
                      Full Name
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "blue",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      <BiLogoDiscordAlt style={iconStyle} /> Username
                    </div>
                  </div>
                </div>
                <p>
                  This is the content of the card. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div>
              <div
                style={{
                  ...cardStyle,
                  marginBottom: "20px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <img
                    src="../../circle.png"
                    alt="Profile"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <div style={{ ...titleStyle, color: "gray" }}>
                      Full Name
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "blue",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      <BiLogoDiscordAlt style={iconStyle} /> Username
                    </div>
                  </div>
                </div>
                <p>
                  This is the content of the card. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div style={containersStyle}>
              <a href="https://app.algosage.io/" className="">
                <button style={buttonStyle}>Create Strategy</button>
              </a>

              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  style={{
                    ...lightButtonStyle,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiLogoDiscordAlt style={{ marginRight: "8px" }} />
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
