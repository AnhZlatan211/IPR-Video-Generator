import React from "react";
import Support from "./Support";
import Pricing from "./Pricing";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center min-vh-100 text-center mt-4">
        <h1 className="display-3 fw-bold">
          Bring your{" "}
          <span
            className="text-primary"
            style={{
              background: "linear-gradient(90deg, #ff007a, #ff8c00)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ideas to life
          </span>
        </h1>
        <p className="mt-3 text-secondary">
          Unlock your creativity and turn any idea into a full-length video. Let
          your imagination take center stage!
        </p>
        <Link to="/generator" className="btn btn-primary mt-4 px-4 py-3 fw-bold rounded-pill">
          Try Video Generator
        </Link>
        <p className="mt-2 text-muted small">No credit card needed</p>
        <div className="ratio ratio-16x9 w-75 h-75 bg-white d-flex align-items-center justify-content-center mt-4">
            <video title="vid" className="object-fit-cover rounded-5" autoPlay muted loop>
              <source src="https://assets-static.invideo.io/files/Stock_Footage2x_V2_78c7e1c798.mp4" type="video/mp4"/>
            </video>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center fw-bold display-6">
          Smart{" "}
          <span
            style={{
              background: "linear-gradient(45deg,#1676FC, #1B2224)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Online Maker
          </span>
        </h2>
        <p className="text-center text-muted">HUGE Features</p>
        <div className="row g-4 mt-4">
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/901/901002.png"
                alt="Intelligent Icon"
                class="mx-auto mb-3 w-25 h-25"
              />
              <h3 className="fs-5 fw-semibold">Intelligent</h3>
              <p className="text-muted">
                Automatically analyze footage for editing, transitions, and even
                music.
              </p>
              <Link className="text-primary text-decoration-none">&rarr;</Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3607/3607951.png"
                alt="Visualization Icon"
                class="mx-auto mb-3 w-25 h-25"
              />
              <h3 className="fs-5 fw-semibold">Visualization</h3>
              <p className="text-muted">
                Easily customize pre-made videos to match your brand and style.
              </p>
              <Link className="text-primary text-decoration-none">&rarr;</Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1601/1601913.png"
                alt="Creativity Icon"
                class="mx-auto mb-3 w-25 h-25"
              />
              <h3 className="fs-5 fw-semibold">Creativity</h3>
              <p className="text-muted">
                Edit with features like stitching, merging, and layering.
              </p>
              <Link className="text-primary text-decoration-none">&rarr;</Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm p-4 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2881/2881031.png"
                alt="Flexible Icon"
                class="mx-auto mb-3 w-25 h-25"
              />
              <h3 className="fs-5 fw-semibold">Flexible</h3>
              <p className="text-muted">
                Access projects from anywhere with an internet connection.
              </p>
              <Link className="text-primary text-decoration-none">&rarr;</Link>
            </div>
          </div>
        </div>
      </div>
      <Support />
      <Pricing />
    </div>
  );
};

export default Home;
