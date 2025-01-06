import React, { useContext } from "react";
import "../css/Gallery.css";
import { ThemeContext } from "./ThemeContact";

const images = [
  { src: require("../images/1.jpg"), alt: "Gallery 1" },
  { src: require("../images/2.jpg"), alt: "Gallery 2" },
  { src: require("../images/5.jpg"), alt: "Gallery 5" },
  { src: require("../images/3.jpg"), alt: "Gallery 3" },
  { src: require("../images/6.jpg"), alt: "Gallery 6" },
  { src: require("../images/7.jpg"), alt: "Gallery 7" },
  { src: require("../images/9.jpg"), alt: "Gallery 9" },
  { src: require("../images/10.jpg"), alt: "Gallery 10" },
];

const achievements = [
  {
    image: require("../images/award1.png"),
  },
];

export default function Gallery() {
  const { theme } = useContext(ThemeContext);
  const sectionStyle = {
    padding: "2rem",
    textAlign: "center",
    color: "#007bff",
  };

  return (
    <div className="container mt-2">
      <div className="achievements-section mt-4">
        <div style={sectionStyle}>
          <h3>Our Achievements</h3>
        </div>
        
        <div className="row">
          <div className="col-lg-5">
          {achievements.map((achievement, index) => (
              <div className={`achievement-card bg-${theme}`} key={index}>
                <img
                  src={achievement.image}
                  alt={achievement.title || "Achievement"}
                  className="achievement-image"
                />
              </div>
            ))}
          </div>
          <div className="col-lg-7">
          <h3 style={{ color: "#007bff" }}>Best Community Service Award</h3>
            <b>Year: 2024</b>
            <p style={{ textAlign: "justify" }}>
              This prestigious accolade marks a significant milestone in the
              journey of Al Mehdi Welfare Organization. It was awarded in
              recognition of our unwavering commitment to uplifting communities
              and making a meaningful impact through our humanitarian efforts.
            </p>
          </div>
        </div> 

        <div style={sectionStyle} className="mt-4">
          <h3>Explore Moments Captured During Our Events And Activities</h3>
        </div>
        <div className="gallery-grid mt-3">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
