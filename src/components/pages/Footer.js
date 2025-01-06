import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import '../css/Style.css';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={footerStyle} className={`navbar navbar-expand-lg navbar-light bg-${theme}`}>
      <div style={containerStyle}>
        <p>&copy; 2025 Al Mehdi Welfare Association. All Rights Reserved.</p>
        <span>
          <a href="/" style={linkStyle}>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/" style={linkStyle}>
            Terms of Service
          </a>
        </span>
        <div style={{marginTop:'10px'}}>
          <ul style={{ listStyle: 'none', justifyContent:'center', padding: 0, display: 'flex', gap: '15px' }}>
            <li>
              <a href="https://www.facebook.com/Almahdiwelfareassociation" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998'}} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/7051165918" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '20px' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {  
  position:'relative',
  textAlign: 'center',
  padding: '10px 0',
  width: '100%',
  bottom: 0,
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

const containerStyle = {
  margin: '0 auto',
  maxWidth: '960px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

linkStyle.hover = {
  textDecoration: 'underline',
};

