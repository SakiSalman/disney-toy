import React, { useState } from 'react'
import { BsFillHeartFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';

const RecipeCard = ({data}) => {
  const [liked, setLiked] = useState(false)

  const navigate = useNavigate()
  // Handle Reidrect
  const handleRedirect = () => {
    navigate('/recipe/1')
  }
  // Send data to 
  const likeRecepe = (id) => {

    let items = []
    items.push(id)
    localStorage.setItem('liked', JSON.stringify(items))
    setLiked(true)
    toast('Recipe is Added To Favourite!', 'sucss')
    
      
  }
  return (
    <>
      {
        data && <div className="card position-relative recipe-card" >

          <LazyLoad>

          <img style={{
    height: "300px",
    width: '100%',
    objectFit: 'cover'
}} onClick={handleRedirect} className='card-img' src={data.photo} alt="" />

          </LazyLoad>
       
        <div className="card-body">
          <h5 className='text-center'>{data.name}</h5>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <div  className="chef-area d-flex gap-1 align-items-center">
            <Link to={'/chef/1'} className='text-decoration-none text-dark'><img style={{width : '25px', height: '25px', borderRadius : '100%', objectFit : 'cover'}} src="https://st.depositphotos.com/1518767/4293/i/950/depositphotos_42930411-stock-photo-concentrated-male-chef-garnishing-food.jpg" alt="" /><span className='text-decoration-none'>Hanry Follie</span></Link>
            
          </div>
          {
            !liked && <div  className="chef-Like d-flex gap-1 align-items-center" onClick={() => likeRecepe(data.id)}>
            <BsFillHeartFill className='text-dark'></BsFillHeartFill>
            <span>Like</span>
          </div>
          }
          {
            liked && <div  className="chef-Like d-flex gap-1 align-items-center">
            <BsFillHeartFill className='text-danger'></BsFillHeartFill>
            
          </div>
          }
        </div>
        <Link  to={`/recipe/${data.id}`} className='view-recipe-btn btn btn-dark btn-md w-50 position-absolute top-50 ' style={{left : '70px'}}>View Recipe</Link>
      </div>
      }
    </>
  )
}

export default RecipeCard