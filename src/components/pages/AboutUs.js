import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import '../css/AboutUs.css';
import { ThemeContext } from './ThemeContact';
const AboutUs = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div>
      {/* Hero Section */}
      <section className="aboutUs-section mt-5">
        <h3>Welcome to Al Mehdi Welfare Association</h3>
      </section>

      {/* Mission, Vision, and Values */}
      <div className={`aboutUs-container`}>
        <div className={`aboutUs-card bg-${theme}`}>
          <h3 className="aboutUs-card-title">Our Vision:</h3>
          <p style={{
                color: theme === "light" ? "black" : "white",
          }}>
            To create a world where everyone has access to basic necessities, opportunities for growth, and the chance to live with dignity.
          </p>
        </div>
        <div className={`aboutUs-card bg-${theme}`}>
          <h3 className="aboutUs-card-title">Our Mission:</h3>
          <ul style={{
                color: theme === "light" ? "black" : "white",
          }}>
            <li>Support education for underprivileged children.</li>
            <li>Provide healthcare assistance.</li>
            <li>Deliver food and shelter to vulnerable populations.</li>
            <li>Promote volunteerism and social awareness.</li>
          </ul>
        </div>
        <div className={`aboutUs-card bg-${theme}`}>
          <h3 className="aboutUs-card-title">Our Values:</h3>
          <ul style={{
                color: theme === "light" ? "black" : "white",
          }}>
            <li><strong>Compassion:</strong> Addressing the needs of the less fortunate.</li>
            <li><strong>Integrity:</strong> Ensuring transparency.</li>
            <li><strong>Collaboration:</strong> Working together for shared goals.</li>
            <li><strong>Empowerment:</strong> Helping individuals improve their lives.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <section className="aboutUs-cta">
        <h3 style={{ color: " #007bff" }}>Join Us Today!</h3>
        <p>
          Together, we can create lasting change in our communities. Contact us to learn more or contribute to our cause.
        </p>
        <Link className="aboutUs-button" to="/contact">Contact Us</Link>
      </section>
    </div>
  );
};

export default AboutUs;
