

function Footer() {
  const footerStyle = {
   
    color: '#d35555',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const linkContainerStyle = {
    display: 'flex',
    marginLeft: 'auto', 
  };

  const linkStyle = {
    // color: '#fff',
     
    marginRight: '10px',
  };

  const hrStyle = {
    width: '100%',
    borderTop: '1px solid #7d7474',
    margin: '3px 0',
  };

  return (
    <div >
      <hr style={hrStyle}></hr>
      <div style={footerStyle}>
        <div>
          &copy; 2023 Layerdapp. All rights reserved
        </div>
        <div style={linkContainerStyle}>
          <span style={linkStyle}>
            <a href="#" style={linkStyle}>
              Terms
            </a>
          </span>
          <span style={linkStyle}>
            <a href="#" style={linkStyle}>
              Privacy
            </a>
          </span>
          <span style={linkStyle}>
            <a href="#" style={linkStyle}>
              Cookies
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
