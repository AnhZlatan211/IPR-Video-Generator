import React from "react";
import { Link } from "react-router-dom";
import Img2 from "../assets/discord_community.png";
import Img1 from "../assets/human_support.png";

const Support = () => {
  return (
    <div className="container mt-3 mb-5">
      <div className="text-center mb-5">
        <h1 className="text-center display-4 fw-bold mb-5">
          All the help you need,<br/>
          <span style={{ background: "linear-gradient(45deg,#FB4D06, #6E03CB)", backgroundClip: "text", WebkitTextFillColor: "transparent"}}>anywhere you are</span>
        </h1>
      </div>
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card text-center shadow-lg p-4">
              <h2 className="fs-4 fw-semibold">24×7 human support</h2>
              <img
                aria-hidden="true"
                alt="24/7 human support"
                src={Img1}
                crossorigin="anonymous"
                className="rounded-full mb-4"
              />
              <p className="text-muted mt-2">
                We’ve got your back every step of the way, from idea to finished
                video.
              </p>
              <Link to="https://www.facebook.com/groups/381722799734877" className="btn btn-primary w-100 mt-3" target="_blank">
                Contact Support
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-lg p-4">
              <h2 className="fs-4 fw-semibold">Discord community</h2>
              <img
                aria-hidden="true"
                alt="Discord community"
                src={Img2}
                crossorigin="anonymous"
              />
              <p className="text-muted mt-2">Hang out with like-minded creators!</p>
              <Link to="https://discord.gg/r2edSgHs" className="btn btn-primary w-100 mt-3" target="_blank">
                Join Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
