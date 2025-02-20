import React from "react";
import Support from "./Support";
import Pricing from "./Pricing";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Home = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center min-vh-100 text-center mt-4 pb-5">
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
        <Link to="/generator" className="btn btn-primary mt-4 px-4 py-3 fw-bold rounded-pill link-1">
          Try Video Generator
        </Link>
        <p className="mt-2 text-muted small">No credit card needed</p>
        <div className="ratio ratio-16x9 w-75 h-75 bg-white d-flex align-items-center justify-content-center mt-4">
          <video
            title="vid"
            className="object-fit-cover rounded-5"
            autoPlay
            muted
            loop
          >
            <source
              src="https://assets-static.invideo.io/files/Stock_Footage2x_V2_78c7e1c798.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center min-vh-100 text-center p-5">
        <h1 className="display-3 fw-bold">
          Convert{" "}
          <span
            className="text-primary"
            style={{
              background: "linear-gradient(45deg,#1779FB, #5CCA7E)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            JSON to video!
          </span>
        </h1>
        <p className="mt-3 text-secondary">
          A video creation API to boost your video automation
        </p>
        <Link to="/json-to-video" className="btn btn-primary mt-4 px-4 py-3 fw-bold rounded-pill link-2">
          Try For Free
        </Link>
        <p className="mt-2 text-muted small">No credit card needed</p>
        <div className="container">
          <div className="shadow-lg bg-dark mt-3 p-5 d-flex flex-row gap-5 rounded-3">
            <div className="col-md-6">
              <h3 className="fw-bolder text-white">JSON</h3>
              <textarea
                className="form-control bg-white text-black"
                rows={12}
                readOnly
                defaultValue={`{
  "resolution": "full-hd",
  "quality": "high",
  "scenes": [
    {
      "comment": "Scene #1",
      "transition": {
        "style": "circleopen",
        "duration": 1.5
      },
      "elements": [
        {
          "type": "image",
          "src": "https://assets.json2video.com/assets/images/london-01.jpg",
          "duration": 10
        }
      ]
    },
    {
      "comment": "Scene #2",
      "transition": {
        "style": "wipeup",
        "duration": 1.5
      },
      "elements": [
        {
          "type": "image",
          "src": "https://assets.json2video.com/assets/images/london-02.jpg",
          "duration": 10
        }
      ]
    },
    {
      "comment": "Scene #3",
      "transition": {
        "style": "fade",
        "duration": 1.5
      },
      "elements": [
        {
          "type": "image",
          "src": "https://assets.json2video.com/assets/images/london-03.jpg",
          "duration": 10
        }
      ]
    }
  ]
}`}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bolder text-white">Simple London slideshow</h3>
              <div style={{aspectRatio:"" }}></div>
              <video
                title="video"
                style={{ height: "300px", objectFit: "cover"}}
                className="rounded-2"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src="https://assets.json2video.com/tutorial/image-4.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
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

      <div className="container py-5 mb-5">
        <h2 className="text-center display-4 fw-bold mb-4">
          What our
          <span
            style={{
              background: "linear-gradient(45deg,#1779FB, #5CCA7E)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            customers say
          </span>
        </h2>
        <p className="text-center text-muted mb-5">
          People love how great our product works and how we're always there to
          help
        </p>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <p className="text-muted mb-3">
                "This is a brilliant idea, a time saver. I can be endlessly
                creative with this great service. It's awesome."
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt="Ryan Hoover"
                  className="rounded-circle me-3 w-25 h-25"
                />
                <div>
                  <div className="fw-semibold">Nguyen Duy Anh Zlatan</div>
                  <div className="text-muted small">Developer</div>
                </div>
              </div>
              <span className="text-muted small">17 January 2024</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <p className="text-muted mb-3">
                "The editor is easy to use, very similar to Capcut and simple
                enough to integrate into the backend."
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
                  alt="Halem Wendersson"
                  className="rounded-circle me-3 w-25 h-25"
                />
                <div>
                  <div className="fw-semibold">Kiet Dau Dinh</div>
                  <div className="text-muted small">Developer</div>
                </div>
              </div>
              <span className="text-muted small">20 February 2024</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <p className="text-muted mb-3">
                "Very useful service and great support team."
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
                  alt="John Allison"
                  className="rounded-circle me-3 w-25 h-25"
                />
                <div>
                  <div className="fw-semibold">Than Thuong</div>
                  <div className="text-muted small">No-code developer</div>
                </div>
              </div>
              <span className="text-muted small">28 October 2024</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <p className="text-muted mb-3">
                "I have so many ideas running through my head right now of use
                cases I can do with your API using Bubble.io."
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png"
                  alt="Jesus Vazquez"
                  className="rounded-circle me-3 w-25 h-25"
                />
                <div>
                  <div className="fw-semibold">Nguyen Nam Anh</div>
                  <div className="text-muted small">No-code developer</div>
                </div>
              </div>
              <span className="text-muted small">17 January 2024</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <p className="text-muted mb-3">
                "The possibilities with VideoGen are endless. The templates are
                super easy to set up and incredibly versatile."
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18951/18951533.png"
                  alt="Mike Mathisen"
                  className="rounded-circle me-3 w-25 h-25"
                />
                <div>
                  <div className="fw-semibold">Polo Din Poc Nho</div>
                  <div className="text-muted small">Creator of ProductHunt</div>
                </div>
              </div>
              <span className="text-muted small">15 April 2024</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <p className="text-muted mb-3">
                "Love the tool and love the support from the team. The best of
                VideoGen is how easy it is to create new video!"
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1308/1308845.png"
                  alt="Borja Palasá"
                  className="rounded-circle me-3 w-25 h-25"
                />
                <div>
                  <div className="fw-semibold">Ibrahimovic</div>
                  <div className="text-muted small">No-code & AI YouTuber</div>
                </div>
              </div>
              <span className="text-muted small">21 October 2024</span>
            </div>
          </div>
        </div>
      </div>

      <Pricing />
    </div>
  );
};

export default Home;
