import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './toysModal.css'
import { useContext, useState } from 'react';
import { authContext } from '../../providers/authprovider/AuthProvider';
import { ToastContext } from '../../providers/authprovider/SweetToast';
import Swal from 'sweetalert2';

const MyVerticallyCenteredModal = ({show,toyid,toy,onHide,myToys,setMyToys}) => {
  const {user}=useContext(authContext);
  const {updateToast}=useContext(ToastContext)
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const pictureUrl = form.pictureUrl.value;
    const updateToy = {
        name,
        sellerName,
        sellerEmail,
        subcategory,
        price,
        rating,
        quantity,
        description,
        pictureUrl
    }
    //update the data to the server
    updateToast()
    .then((result) => {
      console.log(result);
      if (result.isConfirmed) {
          Swal.fire(
              'Updated!',
              'Your Toy has been updated.',
              'success'
              )
              fetch(`http://localhost:5000/toys/${toyid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateToy)
    })
    .then(res => res.json())
    .then(data => {
        form.reset();
        onHide();
    })

          }
          
      }
  )
    
}

  return (
<Modal  show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update {name} Toy</Modal.Title>
      </Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmitUpdate}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" defaultValue ={toy?.name} />
      </Form.Group>
      <Form.Group controlId="sellerName">
        <Form.Label>Seller Name:</Form.Label>
        <Form.Control type="text" name="sellerName" defaultValue={user?.name} />
      </Form.Group>
      <Form.Group controlId="sellerEmail">
        <Form.Label>Seller Email:</Form.Label>
        <Form.Control type="email" name="sellerEmail" defaultValue={user?.email} />
      </Form.Group>
      <Form.Group controlId="subcategory">
        <Form.Label>Subcategory:</Form.Label>
        <Form.Control type="text" name="subcategory" defaultValue={toy.subcategory}/>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number" name="price" defaultValue={toy.price} />
      </Form.Group>
      <Form.Group controlId="rating">
        <Form.Label>Rating:</Form.Label>
        <Form.Control type="number" name="rating" defaultValue={toy.rating} />
      </Form.Group>
      <Form.Group controlId="quantity">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control type="number" name="quantity" defaultValue={toy.quantity}/>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" name="description" defaultValue={toy.description} />
      </Form.Group>
      <Form.Group controlId="pictureUrl">
        <Form.Label>Picture URL:</Form.Label>
        <Form.Control type="text" name="pictureUrl" defaultValue={toy.pictureUrl}/>
      </Form.Group>
      <Button style={{backgroundColor: "#617A55" ,borderRadius:"4px"}}  className='my-3 mx-auto w-100' type="submit">Submit</Button>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default MyVerticallyCenteredModal