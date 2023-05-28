import React from 'react'
import DetailsBannar from '../../component/Bannar/DetailsBannar'
import ChefCard from '../../component/Chef/ChefCard'
import { useContext } from 'react'
import { AuthContext } from '../../context/authProvider/AuthProvider'
import { Link } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'

const Chef = () => {
const {chef, loading} = useContext(AuthContext)


  return (
    <div>
      
    <DetailsBannar title={'All Chefs'}></DetailsBannar>

    <div className="container py-5">
      <div className="row">
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
        {
          chef && chef.map((data, index) => {
            return <div className="col-12 col-md-4 mb-2">
            <ChefCard data={data}>
            <Link to={`/chef/${data.id}`} className="btn btn-md mx-auto w-50 btn-warning">
                   Explore Chef
                 </Link>
            </ChefCard>
          </div>
          })
        }
        
       
        
      </div>
    </div>
  </div>
  )
}

export default Chef