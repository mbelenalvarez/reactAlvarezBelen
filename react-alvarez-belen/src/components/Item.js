import React, { cardRef } from 'react';
import CardItem from './CardItem';
import { Card } from '@mui/material'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

  return (
    <div>
      <CardItem ref={cardRef} style={{ maxWidth: '300px' }}>
        <Card.Img
          style={{
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          variant="top"
          src={item.image}
          alt={item.Title}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Price: ${item.price}</Card.Text>
          <Link className='btn btn-primary' to={`$(item.id)`}> View details </Link>
        </Card.Body>
    
      </CardItem>
    </div>
  );
};

export default Item;

