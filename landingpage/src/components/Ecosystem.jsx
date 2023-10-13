function Ecosystem() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "white",
    marginLeft:"10rem",
    marginTop:"6rem",
    marginBottom:"4rem"
  };
  // const cardStyle = {
  //   backgroundColor: "#fff",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   padding: "15px",
  //   borderRadius: "8px",
  //   boxShadow: "-1px 1px 19px -2px rgba(0, 0, 0, 0.1)",
  //   color: "#24a642de",
  //   height: "120px",
  // };

  // const titleStyle = {
  //   fontSize: "18px",
  //   fontWeight: "bold",
  //   marginBottom: "10px",
  // };
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
  
  const individualTokenStyle = {
    marginRight: "100px", // Adjust the space between tokens as needed
  };
  

  const imageStyle = {
    height: "25px",
    
    marginRight: "15px",
  };
  return (
    
    <div style={containerStyle}>
      <div className="flex justify-between">
      <div className="flex-1">
      <div
        style={{
          textAlign: "center",
         
          marginBottom: "10px",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "27px",
          letterSpacing: "0rem",
          marginLeft: "1.3rem",
          marginTop: "1rem",
          color:'#020916'
        }}
      >
        ECOSYSTEM AND PARTNERS
      </div>
      <div
        style={{
          textAlign: "center",
        
          
          fontFamily: "Poppins",
          fontSize: "35px",
          fontWeight: "600",
          lineHeight: "60px",
          letterSpacing: "0rem",
          background: "linear-gradient(to right, #009ACE, #0C93FA, #2345F0, #3113E9, #3600E7)", WebkitBackgroundClip: "text", color: "transparent" ,
          marginLeft: "1.3rem",
        }}
      >
        An Ecosystem of DeFi Apps
      </div>
      <div
        style={{
          textAlign: "center",
       
          fontFamily: "Poppins",
          fontSize: "30px",
          fontWeight: "600",
          lineHeight: "60px",
          letterSpacing: "0rem",
        
          marginLeft: "1.3rem",
          color:"#020916"

        }}
      >
        Unlocking Financial Freedom
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#768190",
          marginLeft: "1.3rem",
          fontFamily: "Poppins",
        
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "0rem",
        }}
      >
        A growing number of DApps are collaborating with 
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#768190",
          marginLeft: "1.3rem",
          fontFamily: "Poppins",
        
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "0rem",
        }}
      >
       Layerdapp{" "} to create a multi-chain DeFi ecosystem
      </div>
      </div>
      {/* <div
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
   </div> */}
     <div className="flex-2">
<div style={{
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '60px',
  marginLeft:"103px"
}}>
<img
  src="../../uni.png"
  alt="not there"
  style={{
    width: '800px', // Adjust the width in pixels as needed
    height: '300px', // Adjust the height in pixels as needed
  }}
/>

</div>
</div>
</div>

      <div style={containersStyle}>
      <div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(320deg)" }}
    />
    <p style={{ color: "black", fontSize: "15px" }}>BNB</p>
  </div>
</div>
<div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(240deg)" }}
    />
    <p style={{  color: "black",fontSize: "15px" }}>Polygon</p>
  </div>
</div>
<div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(160deg)" }}
    />
    <p style={{  color: "black", fontSize: "15px" }}>Ethereum</p>
  </div>
</div>
<div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(80deg)" }}
    />
    <p style={{   color: "black",fontSize: "15px" }}>Gnosis</p>
  </div>
</div>
<div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(0deg)" }}
    />
    <p style={{  color: "black",fontSize: "15px" }}>Eth</p>
  </div>
</div>
<div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(40deg)" }}
    />
    <p style={{  color: "black",fontSize: "15px" }}>Optimism</p>
  </div>
</div>
<div style={individualTokenStyle}>
  <div style={tokenStyle}>
    <img
      src="https://cdn.instadapp.io/icons/tokens/eth.svg"
      alt="ETH"
      style={{...imageStyle, filter: "brightness(80%) sepia(100%) hue-rotate(280deg)" }}
    />
    <p style={{  color: "black",fontSize: "15px" }}>Eth</p>
  </div>
</div>
</div>
    </div>
  );
}

export default Ecosystem;
