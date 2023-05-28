import React from 'react'
import Bannar from '../../component/Home/Bannar'
import HowWorks from '../../component/Home/HowWorks'
import Recipe from '../../component/Home/Recipe'
import Chef from '../Chef/Chef'
import Chefs from '../../component/Home/Chefs'
const Home = () => {
 
  return (
    <div>
      <Bannar></Bannar>
      <HowWorks></HowWorks>
      <Chefs></Chefs>
      <Recipe></Recipe>
  
    </div>
  )
}

export default Home