import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="container mt-3 mb-5">
      <h1 className="text-center display-4 fw-bold mb-5">
        The right plans, <br />
        <span style={{ background: "linear-gradient(45deg,#FB4D06, #6E03CB)", backgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          for the right price
        </span>
      </h1>
      <div className="row justify-content-center g-4">
        <div className="col-md-3">
          <div className="card shadow-sm border">
            <div className="card-body">
              <h2 className="h5">Free</h2>
              <p className="h4 fw-bold">
                0 VND<span className="fs-6">/month</span>
              </p>
              <Link className="btn btn-dark w-100">Try for free</Link>
              <ul className="list-unstyled mt-3">
                <li>10 mins/wk of AI generation</li>
                <li>iStock</li>
                <li>Generative credits</li>
                <li>10 GB storage</li>
                <li>4 exports/wk with invideo logo</li>
                <li>2.5M+ standard media</li>
                <li>voice clones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border">
            <div className="card-body">
              <h2 className="h5">Plus</h2>
              <p className="h4 fw-bold">
                30.000 VND<span className="fs-6">/month</span>
              </p>
              <select className="form-select mt-2">
                <option>ADD ONS</option>
                <option>1x Boost, 60s Generative</option>
              </select>
              <Link className="btn btn-primary w-100 mt-3">Get Plus</Link>
              <p className="text-muted fs-6 mt-2">*Billed $336 yearly</p>
              <ul className="list-unstyled mt-3">
                <li>50 mins/mo of AI generation</li>
                <li>80/mo iStock</li>
                <li>60s Generative credits</li>
                <li>100 GB storage</li>
                <li>Unlimited exports</li>
                <li>2 voice clones</li>
                <li>Upto 1 user</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border">
            <div className="card-body">
              <h2 className="h5">Max</h2>
              <p className="h4 fw-bold">
                50.000 VND<span className="fs-6">/month</span>
              </p>
              <select className="form-select mt-2">
                <option>ADD ONS</option>
                <option>1x Boost, 60s Generative</option>
              </select>
              <Link className="btn btn-primary w-100 mt-3">Get Max</Link>
              <p className="text-muted fs-6 mt-2">*Billed $576 yearly</p>
              <ul className="list-unstyled mt-3">
                <li>Play soccer with AnhZlatan</li>
                <li>Play badminton with KietDinh</li>
                <li>60s Generative credits</li>
                <li>400 GB storage</li>
                <li>Unlimited exports</li>
                <li>5 voice clones</li>
                <li>Upto 1 user</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border position-relative">
            <div className="card-body">
              <h2 className="h5">Generative</h2>
              <p className="h4 fw-bold">
                100.000 VND<span className="fs-6">/month</span>
              </p>
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                Best Value
              </span>
              <select className="form-select mt-2">
                <option>ADD ONS</option>
                <option>1x Boost, 15m Generative</option>
              </select>
              <Link className="btn btn-primary w-100 mt-3">Get Generative</Link>
              <p className="text-muted fs-6 mt-2">*Billed $1152 yearly</p>
              <ul className="list-unstyled mt-3">
                <li>Play soccer with AnhZlatan</li>
                <li>Play badminton with KietDinh</li>
                <li>15m Generative credits</li>
                <li>400 GB storage</li>
                <li>Unlimited exports</li>
                <li>5 voice clones</li>
                <li>Upto 1 user</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
