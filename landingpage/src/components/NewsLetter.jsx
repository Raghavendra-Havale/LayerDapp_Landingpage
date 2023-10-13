
import { BiLogoGithub } from 'react-icons/bi';
import  { BiLogoDiscordAlt } from 'react-icons/bi'; 
import { RiTwitterXFill } from 'react-icons/ri';
function NewsLetter() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  };
  const iconStyle = {
   
    fontSize: '40px', 
    marginRight: '10px',
    marginTop: '80px',
    marginBottom:'80px',
    color:'black'
  };
  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    width: '350px', 
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#1869F4',
    color: 'white',
    padding: '10px 15px',
    fontSize: '12px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px', 
    marginLeft: '10px',
    marginTop: '20px',
  };

  return (
    <div >
      <div style={{ textAlign: 'center', fontSize: '18px' ,background: "linear-gradient(to right, #009ACE, #0C93FA, #2345F0, #3113E9, #3600E7)", WebkitBackgroundClip: "text", color: "transparent" }}>
        Join Our Newsletter
      </div>
      <div style={{ textAlign: 'center', color:'#667085', fontSize: '15px' }}>
        We will send you a nice letter once per week. No spam.
      </div>
      <div style={containerStyle}>
        <label htmlFor="email" style={{ display: 'block', marginTop: '20px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',borderRadius:'10px' }}>
        
          <input
            type="email"
            id="email"
            name="email"
            style={inputStyle}
            placeholder="Enter your email"
          />
        </label>
        <button style={buttonStyle}>Subscribe</button>
      </div>
      <div style={containerStyle}>
      < RiTwitterXFill style={iconStyle} />
      <BiLogoGithub style={iconStyle} />
      < BiLogoDiscordAlt style={iconStyle} />
      </div>
    
      
    </div>
  );
}

export default NewsLetter;
