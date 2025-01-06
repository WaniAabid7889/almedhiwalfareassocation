import React from "react";

export default function Services() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4 title">
        <span>What We Do.!</span>
      </h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Healthcare</h4>
              <p className="card-text">
                Providing free medical camps and essential health services to
                those in need.
              </p>
              <button className="btn btn-outline-primary">click here</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Education</h4>
              <p className="card-text">
                Offering scholarships and educational programs for children and
                adults.
              </p>
              <button className="btn btn-outline-primary">click here</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Relief Work</h4>
              <p className="card-text">
                Delivering aid to communities affected by natural disasters and
                crises.
              </p>
              <button className="btn btn-outline-primary">click here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
