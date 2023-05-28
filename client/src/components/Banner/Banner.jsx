import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Banner = () => {
  return (
    <div>
         <section className="home-bannr d-flex align-items-center" style={{backgroundImage : "url(https://lumiere-a.akamaihd.net/v1/images/au_homepage_gotgvol3_hero_r_2_b4a59f53.jpeg?region=0,0,2400,1002&width=1536)", backgroundSize:"cover", backgroundPosition: "center center", backgroundRepeat:'no-repeat', height : '85vh'}}>
       <div className="container">
       <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
           
            <h1 className='text-white'>Disney Worlds</h1>
            <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis illo, cupiditate facere deserunt tempora accusamus asperiores </p>
           
            <button className='btn btn-danger btn-lg'>View More</button>
          </div>
          <div className="col-12 col-md-6">
            
          </div>
        </div>
       </div>
      </section>
    </div>
  )
}

export default Banner