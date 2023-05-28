import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ children, data }) => {
  return (
    <>
      {data && (
        <div>
          <div className="card shadow-sm py-3">
            <LazyLoad className="mx-auto">
              <img
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "100%",
                  margin: "auto",
                }}
                src={data.image}
                alt=""
                className="card-img"
              />
            </LazyLoad>

            <div className="card-body">
              <ul className="list-group ">
                <li className=" d-flex justify-content-between bg-warning align-items-center border-bottom ps-2">
                  <span className="list-item-right bg-warning">Name :</span>
                  <span className="list-item-left w-50 h-100 bg-white d-inline-block py-2 text-end px-2">
                    {data.name}
                  </span>
                </li>
                <li className=" d-flex justify-content-between bg-warning align-items-center border-bottom ps-2">
                  <span className="list-item-right bg-warning">
                    Years of Experience :
                  </span>
                  <span className="list-item-left w-50 h-100 bg-white d-inline-block py-2 text-end px-2">
                    {data.years_of_experience} Years
                  </span>
                </li>
                <li className=" d-flex justify-content-between bg-warning align-items-center border-bottom ps-2">
                  <span className="list-item-right bg-warning">Recipes :</span>
                  <span className="list-item-left w-50 h-100 bg-white d-inline-block py-2 text-end px-2">
                    {data.num_recipes} +
                  </span>
                </li>
                <li className=" d-flex justify-content-between bg-warning align-items-center border-bottom ps-2">
                  <span className="list-item-right bg-warning">Likes :</span>
                  <span className="list-item-left w-50 h-100 bg-white d-inline-block py-2 text-end px-2">
                    {data.likes}
                  </span>
                </li>
              </ul>
              
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ChefCard;
