import React, { useEffect, useState, useContext } from "react";
import CryptoJS from "crypto-js";
import "../css/Donation.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./ThemeContact";

const SECRET_KEY = "RU9w4VO4BpHuype7K0rhuUj3IXGAToCm";


function decryptData(encryptedData, secretKey) {
  console.log(encryptedData, secretKey);

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    if (bytes.sigBytes > 0) {
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    }
  } catch (error) {
    throw new Error("decryption failed invalid key");
  }
}



async function fetchAndDecryptData(response) {
  try {
    const data = await response.json();
    console.log("data=>", data.order);
    if (data.success !== true) throw new Error("Invalid response status.");

    return decryptData(data.order, SECRET_KEY);
  } catch (error) {
    console.error("Decryption failed:", error.message);
    return null;
  }
}


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const Razorpay = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    address: "",
  });

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then((res) => {
      if (!res) console.error("Failed to load Razorpay script");
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));
  };

  const handlePayment = async () => {
    const { name, email, phone, amount, address } = formData;

    if (!name || !email || !phone || !amount || !address) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3200/donate/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Number(amount) }),
        }
      );

      console.log(response);

      const resultedData = await fetchAndDecryptData(response);
      console.log("return data=>", typeof resultedData);

      const result = JSON.parse(resultedData);
      console.log(result);
      if (!result) throw new Error("Failed to fetch or decrypt data.");

      const options = {
        key: "rzp_test_zm4RYlIpCHv5Zi",
        amount: result.amount,
        currency: result.currency,
        name: "Al Mehdi Welfare Association",
        description: "Donation Payment",
        order_id: result.id,
        handler: (response) => {
          toast.success("Payment successfully completed!");
          insertDonation(response);
        },
        prefill: { name, email, contact: phone },
        notes: { address },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => toast.error("Payment failed."));
      rzp.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const insertDonation = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3200/donate/insert-donation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            razorpay_order_id: data.razorpay_order_id,
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_signature: data.razorpay_signature,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to record donation.");
      toast.success("Donation successfully recorded. Thank you!");
    } catch (error) {
      console.error("Error inserting donation:", error);
      toast.error("Failed to record your donation.");
    }
  };

  
  return (
    <>
      <div
        className={`form-container d-flex justify-content-center bg-${theme}`}
      >
        <form className="form-class">
          <h2 className={`card-title ${theme === "light" ? "light-mode" : "dark-mode"}`} style={{ color: "#007bff" }}>
            Make a Donation
          </h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              style={{
                backgroundColor: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "black" : "white",
                
              }}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{
                backgroundColor: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "black" : "white",
                
              }}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={{
                backgroundColor: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "black" : "white",
                
              }}
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              style={{
                backgroundColor: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "black" : "white",
                
              }}
              value={formData.amount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="address"
              placeholder="Address"
              style={{
                backgroundColor: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "black" : "white",
                
              }}
              rows="4"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="button" className="submit-btn" onClick={handlePayment}>
            Donate Now
          </button>
          <div className="form-footer">
            <p>
              Thank you for your generosity!{" "}
              <NavLink to="/donationPage">Learn more</NavLink> about how your
              donations help.
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Razorpay;
