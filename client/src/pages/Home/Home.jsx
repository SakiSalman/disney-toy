import React from 'react'
import { Container } from 'react-bootstrap'
import GallerySection from '../../components/GallerySection/GallerySection'
import ShopByCategory from '../../components/SjopByCategory/ShopByCategory'
import Banner from '../../components/Banner/Banner'
import Testimonial from '../../components/Testimonial/Testimonial'
import CustomTitle from '../../components/CustomTitle'

function Home() {
  return (

    <>
    <CustomTitle title={'Home'}></CustomTitle>
     <Banner></Banner>
     <Container>
     
     <ShopByCategory></ShopByCategory>
     <GallerySection></GallerySection>
     <Testimonial></Testimonial>
   </Container>
    </>
   
  )
}

export default Home