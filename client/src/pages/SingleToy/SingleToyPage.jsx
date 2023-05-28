import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'

import './SingleToyPage.css'
import CustomTitle from '../../components/CustomTitle';

const SingleToyPage = () => {
    const toy =useLoaderData();
    const {   
        _id,
        name,
        sellerName,
        sellerEmail,
        subcategory,
        price,
        rating,
        quantity,
        description,
        pictureUrl } =toy;
    console.log(toy);
  return (

    <>
    <CustomTitle title={`${name}`}>

    </CustomTitle>
        <Container className='my-5'>
        <h1 className='text-center'>Toys Details on <strong style={{color : "#617A55"}}> {name}</strong></h1>

            <div className="toy_details d-flex flex-wrap justify-content-between align-items-center ">
                <div className="toy_details_image w-50">
                    <img src={pictureUrl} alt={name} />
                </div>
                <div className="toy_details_info w-50 table-responsive">
                    <Table className='text-start' striped bordered responsive>
                        <tbody>
                            <tr>
                                <th>Product name</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Product ID</th>
                                <td>{_id}</td>
                            </tr>
                            <tr>
                                <th>Product Price</th>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <th>Product Rating</th>
                                <td>{rating}</td>
                            </tr>
                            <tr>
                                <th>Product Quantity</th>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <th>Product Description</th>
                                <td>{description}</td>
                            </tr>
                            <tr>
                                <th>Product Subcategory</th>
                                <td>{subcategory}</td>
                            </tr>
                            <tr>
                                <th>Seller Name</th>
                                <td>{sellerName}</td>
                            </tr>
                            <tr>
                                <th>Seller Email</th>
                                <td>{sellerEmail}</td>
                            </tr>

                        </tbody>

                    </Table>

                </div>

            </div>


    </Container>
    
    </>
  )
}

export default SingleToyPage