import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/authProvider/AuthProvider'
import ChefCard from '../Chef/ChefCard'
import { Link } from 'react-router-dom'
import { Puff } from 'react-loader-spinner'

const Chefs = () => {
    const {chef, loading} = useContext(AuthContext)

    return (
        <div>    
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                <h2 className="display-4 text-center fw-bold">ALL CHEFS</h2>
                </div>
            </div>
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

export default Chefs