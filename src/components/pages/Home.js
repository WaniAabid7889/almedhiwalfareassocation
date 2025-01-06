import React from "react";
import mission from "../images/mission.webp";
import '../css/Style.css';
export default function Home() {
  return (
    <>
      <div class="hero-section">
         {/* <h1>Welcome to Al Mehdi Welfare Association</h1> */}
      </div>

      <div class="container py-5">
        {/* <div className="marq">
          <marquee>
            At Al Mehdi Welfare Association, we aim to improve the lives of
            underprivileged individuals through healthcare, education, and
            humanitarian aid. Join us in making a difference!🔔🆕
          </marquee>
        </div> */}

        <div class="row">
          <div class="col-md-6">
            <h2 class="title py-3">
              <span style={{fontSize:"30px" ,color:'#007bff', textAlign:'justify'}}>Our Mission :</span>
            </h2>
            <p>
              At <b style={{color: "#007bff"}}>Al Mehdi Welfare Association</b>, we
              aim to improve the lives of underprivileged individuals through
              healthcare, education, and humanitarian aid.
              <br />
              <b>We are a non-governmental organization</b>
              <ul>
                <li>
                  Improve the lives of underprivileged individuals through
                  accessible healthcare.{" "}
                </li>
                <li>
                  Empower communities with quality education and skill
                  development
                </li>
                <li>
                  Provide humanitarian aid and support during crises and
                  emergencies
                </li>
                <li>
                  Advocate for social justice and equal opportunities for all
                </li>
              </ul>
              Join us in making a difference and building a brighter future for
              those in need!
            </p>
          </div>
          <div class="col-md-6">
            <img src={mission} alt='Mission Images' className="img-fluid rounded" style={{
                height:'380px',width:'100%'
            }} />
          </div>
        </div>
      </div>
    </>
  );
}
