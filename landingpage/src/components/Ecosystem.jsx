function Ecosystem() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "white",
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
    height: "120px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  const containersStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vh",
    marginLeft: "1rem",
    marginBottom:"35px",
  };
  const tokenStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const imageStyle = {
    height: "25px",
    
    marginRight: "15px",
  };
  return (
    <div style={containerStyle}>
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "black",
          marginLeft: "1.3rem",
          marginTop: "1rem",
        }}
      >
        ECOSYSTEM AND PARTNERS
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          color: "blue",
          marginLeft: "1.3rem",
        }}
      >
        An Ecosystem of DeFi Apps
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "25px",
          color: "black",
          fontWeight: "bold",
          marginLeft: "1.3rem",
        }}
      >
        Unlocking Financial Freedom
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "black",
          marginLeft: "1.3rem",
        }}
      >
        A growing number of DApps are collaborating with Layerdapp{" "}
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "black",
          marginLeft: "1.3rem",
        }}
      >
        to create a multi-chain DeFi ecosystem
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
      <div style={cardStyle}>
        <div style={titleStyle}>Card 1</div>
        <p>This is the content of Card 1.</p>
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Card 2</div>
        <p>This is the content of Card 2.</p>
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Card 3</div>
        <p>This is the content of Card 3.</p>
      </div>
      <div style={cardStyle}>
        <div style={titleStyle}>Card 1</div>
        <p>This is the content of Card 1.</p>
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Card 2</div>
        <p>This is the content of Card 2.</p>
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Card 3</div>
        <p>This is the content of Card 3.</p>
      </div>
      <div style={cardStyle}>
        <div style={titleStyle}>Card 1</div>
        <p>This is the content of Card 1.</p>
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Card 2</div>
        <p>This is the content of Card 2.</p>
      </div>

      <div style={cardStyle}>
        <div style={titleStyle}>Card 3</div>
        <p>This is the content of Card 3.</p>
      </div>
   </div>
      <div style={containersStyle}>
        <div style={tokenStyle}>
          <img
            src="https://cdn.instadapp.io/icons/tokens/eth.svg"
            alt="ETH"
            style={imageStyle}
          />
          <p style={{ color: "black", fontSize: "15px" }}>BNB</p>
        </div>

        <div style={tokenStyle}>
          <img
            src="https://cdn.instadapp.io/icons/tokens/eth.svg"
            alt="ETH"
            style={imageStyle}
          />
          <p style={{ color: "black", fontSize: "15px" }}>Polygon</p>
        </div>

        <div style={tokenStyle}>
          <img
            src="https://cdn.instadapp.io/icons/tokens/eth.svg"
            alt="ETH"
            style={imageStyle}
          />
          <p style={{ color: "black", fontSize: "15px" }}>Ethereum</p>
        </div>

        <div style={tokenStyle}>
          <img
            src="https://cdn.instadapp.io/icons/tokens/eth.svg"
            alt="ETH"
            style={imageStyle}
          />
          <p style={{ color: "black", fontSize: "15px" }}>Gnosis</p>
        </div>
        <div style={tokenStyle}>
          <img
            src="https://cdn.instadapp.io/icons/tokens/eth.svg"
            alt="ETH"
            style={imageStyle}
          />
          <p style={{ color: "black", fontSize: "15px" }}>Eth</p>
        </div>
        <div style={tokenStyle}>
          <img
            src="https://cdn.instadapp.io/icons/tokens/eth.svg"
            alt="ETH"
            style={imageStyle}
          />
          <p style={{ color: "black", fontSize: "15px" }}>Optimism</p>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
