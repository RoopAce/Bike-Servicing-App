import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  ListItemSecondaryAction, IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import tire from '../../assets/images/tire.jpg';

export default function UserSparePart() {
  const [cartItems, setCartItems] = useState([]);


    const handleDelete = (index) => {
      setCartItems(cartItems.filter((_, i) => i !== index));
    };

  
  const availableParts = [
    { name: 'Tire', price: 200, img: 'https://via.placeholder.com/150' },
    { name: 'Break', price: 250, img: 'https://via.placeholder.com/150' },
    { name: 'Clutch', price: 90, img: 'https://via.placeholder.com/150' },
  ];

  const addToCart = (part) => {
    setCartItems([...cartItems, part]);
  };

  const totalCost = cartItems.reduce((total, part) => total + part.price, 0);

  return (
    <>
      <Helmet>
        <title>RoopAce</title>
      </Helmet>

      <Container>
        <Typography variant="h4" gutterBottom>
          Spare Part
        </Typography>
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {availableParts.map((part, index) => (
            <Card key={index} sx={{ maxWidth: 150, m: '1rem' }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={tire} alt={part.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {part.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${part.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => addToCart(part)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      </Container>

      <Container maxWidth="sm" className="mx-auto py-6" sx={{ backgroundColor: '#f5f5f5', borderRadius: 4, padding: 4 }}>
  <div style={{ width: '100%' }}>
    <Typography variant="h6" component="h2" gutterBottom className="text-center mt-8">
      Cart
    </Typography>
    {cartItems.length > 0 ? (
      <List>
        {cartItems.map((part, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${part.name} - $${part.price}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    ) : (
      <Typography variant="subtitle1" color="text.secondary" className="text-center">
        Your cart is empty
      </Typography>
    )}
    <Typography variant="h6" component="p" gutterBottom className="text-center mt-8">
      Total: ${totalCost}
    </Typography>
  </div>
</Container>







    </>
  );
}
