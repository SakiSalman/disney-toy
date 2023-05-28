import React, { useEffect, useState } from 'react';
import './ShopByCategory.css';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import SingleToy from '../toys/SingleToy';

const ShopByCategory = () => {

    const [toyData, setToyData] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState('Language Toys');
  
    useEffect(() => {
      fetch('http://localhost:5000/toys')
        .then(response => response.json())
        .then(data => setToyData(data))
        .catch(error => console.log(error));
    }, []);
  
    const subcategories = [...new Set(toyData.map(toy => toy.subcategory))];
    // console.log(subcategories);

    subcategories.splice(subcategories.indexOf(''), 1);
  
    const handleTabClick = subcategory => {
      setSelectedSubcategory(subcategory);
      console.log(subcategory);
    };
  
    const filteredToys = toyData.filter(toy =>
      selectedSubcategory ? toy.subcategory === selectedSubcategory : {}
    );


  return (

    <>
      {
        toyData && toyData.length > 0 ? <div>
        <div className="tabContainer mt-5">
          {subcategories.map(subcategory => (
            <button
              key={subcategory}
              onClick={() => handleTabClick(subcategory)}
              className={selectedSubcategory === subcategory ? 'active' : ''}
            >
              {subcategory}
            </button>
          ))}
        </div>
        <div>
        <Container>
            <Row className='d-flex justify-content-center'>
  
              {
              filteredToys.map((toy) => {
                  {
                      return (<Col key={toy.id} md={3}><SingleToy toys={toy} /></Col>)
                  }
              })
              }
            </Row>
          </Container>
        </div>
      </div> : <div className='text-center'>
                <p>Toys is Loading ...</p>
        <Spinner className='text-center' animation="border" variant="warning" />

      </div>
      }
      
    
    </>
  );
};

export default ShopByCategory;
