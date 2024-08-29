import React from "react"; 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Wii from '../assets/Consoles/Wii-U.png';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Wii} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;