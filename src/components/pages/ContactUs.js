import React, { useState, useContext } from "react";
import "../css/ContactUs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./ThemeContact";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3200/donate/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Enquiry has been successfully submitted!");
        setFormData({ name: "", email: "", phone: "", address: "" });
      } else {
        toast.error("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <section className="contact-header">
        <p>
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
      </section>

      <div className="container container1">
        <div className={`column bg-${theme}`}>
          <h3 style={{ color: " #007bff" }}>Get in Touch</h3>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value.replace(/[^a-zA-Z\s]/g, ""), // Allows only letters and spaces
                })
              }
              className="input form-control"
              aria-label="Your Name"
              required
              minLength={3} // Minimum 3 characters
              maxLength={50} // Maximum 50 characters
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input form-control"
              aria-label="Your Email"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => {
                const phone = e.target.value;
                if (/^\d{0,10}$/.test(phone)) {
                  // Allows up to 10 digits
                  setFormData({ ...formData, phone });
                }
              }}
              className="input form-control"
              aria-label="Your Phone Number"
              required
              maxLength={10} // Restricts to 10 characters
            />

          
            <textarea
              name="address"
              placeholder="Your Message"
              rows="4"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="input textarea form-control"
              aria-label="Your Message"
              required
              minLength={10} // Minimum 10 characters
              maxLength={200} // Maximum 200 characters
            ></textarea>
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>

        <div className={`column bg-${theme}`}>
          <h3 style={{ color: " #007bff" }}>Find Us</h3>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d395.44281358273304!2d74.6245913785118!3d34.207105279087045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1734933563263!5m2!1sen!2sin"
            width="600"
            height="450"
            className="map"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="container mb-4">
        <div className="card-container">
          <div className={`card bg-${theme}`}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ color: "#007bff", fontSize: "30px", margin: "10px" }}
            />
            <h3 style={{ color: " #007bff" }}>Our Address</h3>
            <p>Rakhi Shilvath Shiganpora Sumbal Sonawari J&K</p>
          </div>

          <div className={`card bg-${theme}`}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#007bff", fontSize: "30px", margin: "10px" }}
            />
            <h3 style={{ color: " #007bff" }}>Email Us</h3>
            <p>almehdiwelfareassociation14@gmail.com</p>
          </div>

          <div className={`card bg-${theme}`}>
            {/* <i className="fas fa-phone icon"></i> */}
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#007bff", fontSize: "30px", margin: "10px" }}
            />
            <h3 style={{ color: " #007bff" }}>Call Us</h3>
            <p>+91 7051165918 | 6006727007</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
