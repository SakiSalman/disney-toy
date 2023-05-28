import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SingleToy from './SingleToy';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Toys = () => {
  const [toys, setToys] = useState([]);

  const [buttonShow,setButtonsShow]=useState('d-block')


  useEffect(() => {
    fetch('http://localhost:5000/toys?limit=10')
      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.log(error));
  }, []);

  const handleViewAllToys=()=>{
    fetch('http://localhost:5000/toys')
    .then(response => response.json())
    .then(data => {
      setToys(data);
      setButtonsShow('d-none')
    })
    .catch(error => {
      console.log(error);
    });
  }
  // const setSortOrder = (event) => {
  //   if(event.target.value === 'asc') {
  //     fetch('http://localhost:5000/toys?sort=price&order=asc')
  //       .then(response => response.json())
  //       .then(data => setToys(data))
  //       .catch(error => console.log(error));
  //   } else if(event.target.value === 'desc') {
  //     fetch('http://localhost:5000/toys?sort=price&order=desc')

  //       .then(response => response.json())
  //       .then(data => setToys(data))
  //       .catch(error => console.log(error));
  //   }
  // };
  const setSortOrder = (event) => {
    //short circuiting
    let order;
    if(event.target.value === 'asc') {
      order = 'asc';
    } else if(event.target.value === 'desc') {
      order = 'desc';
    } else {
      return;
    }
    fetch(`http://localhost:5000/toys?sort=price&order=${order}`)

      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.log(error));

  };



  const handleSearchInputChange = (e) => {
    console.log(e.target.value);
    fetch(`http://localhost:5000/toys?search=${e.target.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setToys(data);
    })
    .catch(error => console.log(error));
  };

  return (
    <>
        <Container className='my-5'>
          <Row>
            <div className="sorting_search d-flex justify-content-between flex-wrap">
            <div>
            <h4>Sort Order</h4>
            <select onChange={setSortOrder}>
              <option value="">Select</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
            <div>
            <h4>Toy Search</h4>
              <input type="text" onChange={handleSearchInputChange} placeholder="Search by toy name" />
            </div>
            </div>
            {
            toys.map((toy) => {
                {
                    return (<Col key={toy.id}  md={3}><SingleToy toys={toy} /></Col>)
                }
            })
            }
            <Button  style={{backgroundColor: "#617A55" ,borderRadius:"4px" , margin: "20px 0px"}} className={buttonShow} onClick={handleViewAllToys}>View More</Button>
          </Row>
        </Container>
    </>
  )
}

export default Toys