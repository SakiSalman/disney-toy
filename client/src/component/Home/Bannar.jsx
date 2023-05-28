import React from "react";
import bannarImg from '../../assets/image/slider.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";



const Bannar = () => {
  return (
    <>
    <Swiper 
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    
    >

    <SwiperSlide>
    <section className="home-bannr d-flex align-items-center">
       <div className="container">
       <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <h3>GET FRESHLY COOKED</h3>
            <h1>HOME FOOD AT YOUR DOORSTEP</h1>
            <p>For Fresh & Delicious home Food</p>
            <button>View Recipe</button>
          </div>
          <div className="col-12 col-md-6">
            <img width={"100%"} src={bannarImg} alt="" />
          </div>
        </div>
       </div>
      </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="home-bannr d-flex align-items-center">
       <div className="container">
       <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <h3>ON TIME DELIVEY</h3>
            <h1>FAST DEIVERY AT YOUR DOORSTEP</h1>
            <p>For Fresh & Delicious home Food</p>
            <button>View Recipe</button>
          </div>
          <div className="col-12 col-md-6">
            <img width={"100%"} src={'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/11/about-you_250x250.jpg'} alt="" />
          </div>
        </div>
       </div>
      </section>
    </SwiperSlide>
    <SwiperSlide>
    <section className="home-bannr d-flex align-items-center">
       <div className="container">
       <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <h3>GET HOT OFFER</h3>
            <h1>HOME FOOD AT YOUR DOORSTEP</h1>
            <p>For Fresh & Delicious home Food</p>
            <button>View Recipe</button>
          </div>
          <div className="col-12 col-md-6">
            <img width={"100%"} src={'https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/img_1.png'} alt="" />
          </div>
        </div>
       </div>
      </section>
    </SwiperSlide>

    </Swiper>
     
    </>
  );
};

export default Bannar;
