import React from "react";
import pickup from "../../assets/image/img3.png";

const HowWorks = () => {
  return (
    <div style={{ background: "#f1f1f1" }} className="py-5">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-4 bg-danger px-3 py-2">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <h2 className="display-5 text-white">PICKUP FOOD</h2>
              </div>
              <div className="col-6">
                <img width={"100%"} src={pickup} alt="" />
              </div>
            </div>
          </div>
          <div
            style={{ background: "#f6f179" }}
            className=" col-12 col-md-4 px-3 py-2"
          >
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <h2 className="display-5 text-danger">GET DELIVERY</h2>
              </div>
              <div className="col-6">
                <img width={"100%"} src={pickup} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  px-3 py-2 bg-white">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <h2 className="display-5 text-success">EXPLORE SHOP</h2>
              </div>
              <div className="col-6">
                <img width={"100%"} src={pickup} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12">
            <h3 className="display-2 text-center">HOW IT WORK</h3>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-4">
            <h3 className="display-2 text-center text-success">1.</h3>
            <h3 className="fs-2 fw-bold text-center">Select Food & Kitchen</h3>
            <p className="text-center fs-5">Lorem ipsum dolor sit amet,
            <br/>consec- tetuer adipisc.</p>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="display-2 text-center text-danger">2.</h3>
            <h3 className="fs-2 fw-bold text-center">Order & Pay</h3>
            <p className="text-center fs-5">Lorem ipsum dolor sit amet,
            <br/>consec- tetuer adipisc.</p>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="display-2 text-center text-warning">3.</h3>
            <h3 className="fs-2 fw-bold text-center ">Pickup or Delivery</h3>
            <p className="text-center fs-5">Lorem ipsum dolor sit amet,
            <br/>consec- tetuer adipisc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
