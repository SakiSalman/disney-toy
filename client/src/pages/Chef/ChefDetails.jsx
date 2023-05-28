import React, { useContext, useEffect } from 'react'
import DetailsBannar from '../../component/Bannar/DetailsBannar'
import ChefCard from '../../component/Chef/ChefCard'
import RecipeCard from '../../component/Recipe/RecipeCard'
import { AuthContext } from '../../context/authProvider/AuthProvider'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const ChefDetails = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const { recipe } = useContext(AuthContext);
  const [recep, setRecep] = useState()
  const [chef, setChef] = useState({})
   // get data with loading
   useEffect(() => {
    axios.get(`https://hungry-sakisalman.vercel.app/chef/${id}`)
    .then(res => {

      if (res.data.error) {
        console.log(res.data.error);
       return navigate('/404')
      }
      setChef(res.data.chefs);
      setRecep(res.data.recepe)
    })
    .catch()

  }, [])
  return (
    <>
    {
      chef && recep && <div>
      <DetailsBannar title={"Chef's Details"}></DetailsBannar>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <ChefCard data={chef}>
              <div className="row p-3">
                <div className="col-12">
                  <h5>Description</h5>
                  <p>{chef.description}</p>
                </div>
              </div>
            </ChefCard>
          </div>
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col">
                <h4>{chef.name}'s Recipes : <span className='text-danger'>{recep.length}</span> </h4>
      
              </div>
            </div>
            <div className="row">
              {
                 recep && recep.map((data, index) => {
      
      
      
                  return <div key={index} className="col-md-4 mb-2">
                  <RecipeCard data={data}></RecipeCard>
                </div>
                 })
              }
            
             
              
            </div>
          </div>
        </div>
      </div>
      
          </div>
    }
    </>
  )
}

export default ChefDetails

/**
 *     
 */