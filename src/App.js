import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Gallery  from "./components/pages/Gallery";
import Footer from './components/pages/Footer';
import DonationPage from './components/pages/DonationPage';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Razorpay from "./components/pages/Razorpay";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import ThemeContact from "./components/pages/ThemeContact";


function App() {
  return (
    <Router>
    <ThemeContact>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/razorpay" element={<Razorpay />} />
        <Route path="/donationPage" element={<DonationPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
   
        
      </Routes>
      <Footer/>
    </ThemeContact>
    </Router>
  );
}

export default App;
