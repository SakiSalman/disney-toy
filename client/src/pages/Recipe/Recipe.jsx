import React, { useContext } from 'react'
import DetailsBannar from '../../component/Bannar/DetailsBannar'
import RecipeCard from '../../component/Recipe/RecipeCard'
import { AuthContext } from '../../context/authProvider/AuthProvider';
import { Puff } from 'react-loader-spinner';

const Recipe = () => {
  const { recipe } = useContext(AuthContext);

  return (
    <div>
      
      <DetailsBannar title={'All Recipes'}></DetailsBannar>

      <div className="container py-5">
        <div className="row">
          {
            !recipe &&  <div style={{width : '100%', height : '300px', display : 'flex', justifyContent:'center', alignItems : 'center'}}>
            <Puff
      height="80"
      width="80"
      radius={1}
      color="#ffd662"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperclassName=""
      visible={true}
    >
    </Puff>
    </div>
          }
        {recipe &&
              recipe.map((data, index) => {
                return (
                  <div className="col-md-3 mb-2">
                    <RecipeCard
                    key={index}
                      data={data}
                    ></RecipeCard>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  )
}

export default Recipe