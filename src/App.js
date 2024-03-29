import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Discription';
import Image from './components/Image';
import product from './product';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const firstName = "Med Amine";

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Image image={product.image} />
      <Card.Body>
        <Card.Title><Name name={product.name} /></Card.Title>
        <Card.Text>
        <Description description={product.description} />
        </Card.Text>
        <Button variant="primary"><Price price={product.price} /> DTN</Button>
      </Card.Body>
    </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Your Image" />}
    </div>
  );
};

export default App;

