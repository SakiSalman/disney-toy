import React from "react";

const DetailsBannar = ({title}) => {
  const heading = title || 'Deatils'
  return (
    <section className="datails-bannar d-flex justify-content-center align-items-center">
      <div className="row justify-content-center align-items-center">
        <div className="col d-flex justify-content-center align-items-center">
          <h1>{heading}</h1>
        </div>
      </div>
    </section>
  );
};

export default DetailsBannar;
