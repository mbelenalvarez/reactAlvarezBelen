import React, { useRef } from 'react';
import CardItem from './CardItem';

const Item = ({ item }) => {
  const cardRef = useRef(null);

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
          <Card.Text>{item.price}</Card.Text>
          <Card.Text>{item.category}</Card.Text>
        </Card.Body>
    
      </CardItem>
    </div>
  );
};

export default Item;

