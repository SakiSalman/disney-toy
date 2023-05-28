import React from "react";

const IngradientCard = ({ data }) => {
  return (
   <>

   {
    data &&  <div className="mb-3 ">
    <div className="card shadow-sm py-3 bg-light-green">
      <div className="card-header">
        <h5>Ingredients</h5>
      </div>

      <ul className="list-group my-2">
      {
        data.map((item, index)=> {
          return <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <>
            
            <li style={{textTransform: 'capitalize'}} className="list-group-item d-flex justify-content-between align-items-center bg-dark-green">
              {key}
            <span className="badge bg-warning rounded-pill text-dark">
            {value}
            </span>
          </li>
            </>
          ))}
        </div>
        })
    }
        
       
      </ul>
    </div>
  </div>
   }
   </>
  );
};

export default IngradientCard;
