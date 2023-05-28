import React, { useState } from "react";
import DetailsBannar from "../../component/Bannar/DetailsBannar";
import ChefCard from "../../component/Chef/ChefCard";
import IngradientCard from "../../component/Recipe/ingradientCard";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [singelData, setSingelData] = useState({
    item : '',
    chef : '',
    success : false
  })

  // get data with loading
  useEffect(() => {
    axios.get(`https://hungry-sakisalman.vercel.app/recepe/${id}`)
    .then(res => {

      if (res.data.error) {
        return navigate('/404')
      }
      setSingelData(res.data);
    })
    .catch()



  }, [])
//    
  return (
    <>
    
    {
      singelData.item ? <div>
      <DetailsBannar title={'Recipe Details'}></DetailsBannar>
      <section className="deatils-area">
        <div className="container">
          <div className="row py-3">
            <div className="col-12 col-md-8">
              <div className="racepe-image">
                <img
                  width={"100%"}
                  height={"500px"}
                  style={{ objectFit: "cover" }}
                  src={singelData.item.photo}
                  alt=""
                />
                <div className="recipe-content py-3">
                  <h2>{singelData?.item?.name}</h2>
                </div>
                <div className="recipe-content py-3">
                  <h2>Instructions</h2>
                </div>
                <div className="instraction-area">
                 {
                  singelData?.item?.instructions.map((data, index) => {
                     return  <div key={index} className="instraction ">
                     <div className="counter">
                       <span>{index + 1}</span>
                     </div>
                     <div className="instaction-content shadow-sm">
                       <p>{data}</p>
                     </div>
                   </div>
                   })
   
                 }
                 
                 
                </div>
   
   
   
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="sidebar-area sticky-md-top">
   
                   {/* ingradiant */}
   
                
                   <IngradientCard data={singelData?.item?.ingredients}></IngradientCard>
   
                <ChefCard data={singelData.chefs}>
                <div className="card-footer">
                 <Link to={`/chef/${singelData.chefs.id}`} className="btn btn-md w-100 btn-warning">
                   Explore Chef
                 </Link>
               </div>
                </ChefCard>
   
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> : <></>
    }
    
 
 </>
  );
};

export default RecipeDetails;
