import React from "react";
import RecipeCard from "../Recipe/RecipeCard";
import { useContext } from "react";
import { AuthContext } from "../../context/authProvider/AuthProvider";
import { Puff } from "react-loader-spinner";
const Recipe = () => {
  const { recipe, loading } = useContext(AuthContext);

  return (
    <section style={{ padding: "100px 0px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="display-4 text-center fw-bold">ALL RECIPE</h2>
          </div>
          
        </div>
        <div className="row py-5">

          {
            loading && <div style={{width : '100%', height : '100vh', display : 'flex', justifyContent:'center', alignItems : 'center'}}>
            <Puff
      height="80"
      width="80"
      radius={1}
      color="#ffd662"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperclassName=""
      visible={true}
    />
        </div>
          }
            {recipe && recipe.slice(0, 8).map((data, index) => {
                return (
                  <div className="col-12 col-md-3 mb-2">
                    <RecipeCard
                    key={index}
                      data={data}
                    ></RecipeCard>
                  </div>
                );
              })}
          </div>
      </div>
    </section>
  );
};

export default Recipe;
