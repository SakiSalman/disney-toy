import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SingleToy.css'
import { FaStar } from "react-icons/fa";

const SingleToy = ({ toys }) => {

  const {
    _id,
    pictureUrl,
    name,
    subcategory,
    price,
    rating,
    sellerName
    
  } = toys;
  
  
  return (
    <>
    
    {
      toys &&   <Card className="my-3">

      <div className="cardImg" style={{backgroundColor: "#FFF8D6"}} >
      <Card.Img  variant="top" src={pictureUrl} alt={name} />
      </div>
      
      <Card.Body>
  
        <Card.Title> <h5>{name}</h5> </Card.Title>
        <div className="price_ratting d-flex justify-content-between">
        <Card.Text> <h6>{subcategory}</h6> </Card.Text>
        <Card.Text> <h6>{sellerName}</h6> </Card.Text>
          </div>
  
          <div className="price_ratting d-flex justify-content-between">
          <Card.Text> <strong>${price}</strong> </Card.Text>
          <Card.Text> <strong className="d-flex align-items-center"> <FaStar className="me-1" style={{color : "gold"}}></FaStar>{rating}
          </strong> </Card.Text>
          </div>
        <Link className="text-decoration-none" style={{color : "#617A55"}} to={`/toys/${_id}`}>View Details</Link>
      </Card.Body>
    </Card>
}
    </>
  );
};

export default SingleToy;
