import React, { useEffect, useState, useContext } from "react";
import "../css/Donation.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./ThemeContact";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
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

  const insertDonation = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3200/donate/insert-donation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            amount: formData.amount,
            address: formData.address,
            razorpay_order_id: data.razorpay_order_id,
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_signature: data.razorpay_signature,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to insert donation:", errorData);
        alert(`Error: ${errorData.error || "Something went wrong!"}`);
        return;
      }

      const result = await response.json();
      console.log("Donation inserted successfully:", result);
      alert("Thank you! Your donation has been successfully recorded.");
    } catch (error) {
      console.error("Error inserting donation record:", error);
      alert("Failed to record your donation. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Razorpay script loaded successfully");
    };

    script.onerror = () => {
      console.error("Failed to load Razorpay script");
    };
  }, []);

  const handlePayment = async () => {
    const { name, email, phone, amount, address } = formData;

    if (amount > 0) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay failed to load!!");
        return;
      }
    }
    if (typeof Razorpay === "undefined") {
      alert(
        "Razorpay SDK is not loaded. Please check your script or internet connection."
      );
      return;
    }

    if (!name || !email || !phone || !amount || !address) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3200/donate/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Number(amount),
          }),
        }
      );

      const result = await response.json();
      if (result.success) {
        const options = {
          key: "rzp_test_zm4RYlIpCHv5Zi",
          amount: result.order.amount,
          currency: result.order.currency,
          name: "AL Medhi Welfare Association",
          description: "Donation Payment",
          order_id: result.order.id,
          handler: function (response) {
            toast.success(`Payment successfully`);
            insertDonation(response);
          },
          prefill: {
            name: name,
            email: email,
            contact: phone,
          },
          notes: {
            address: formData.address,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
          toast.success(`Payment failed`);
        });
        rzp.open();
      } else {
        toast.error("order status false");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <>
      <div
        className={`form-container d-flex justify-content-center bg-${theme}`}
      >
        <form className="form-class">
          <h2 className="card-title" style={{ color: " #007bff" }}>
            Make a Donation
          </h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value.replace(/[^a-zA-Z\s]/g, ""),
                })
              }
              required
              minLength={3}
              maxLength={30}
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Phone Input */}
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => {
                const phone = e.target.value;
                if (/^\d{0,10}$/.test(phone)) {
                  setFormData({ ...formData, phone });
                }
              }}
              maxLength={10}
              required
            />
          </div>

          {/* Donation Amount Input */}
          <div className="form-group">
            <input
              type="number"
              name="amount"
              placeholder="Enter an amount"
              value={formData.amount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  amount: e.target.value < 0 ? 0 : e.target.value,
                })
              }
              min={1}
              required
            />
          </div>

          {/* Address Input */}
          <div className="form-group">
            <textarea
              rows="4"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
              minLength={10}
              maxLength={200}
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
