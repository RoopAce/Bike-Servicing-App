import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
Button,
Card,
CardActionArea,
CardActions,
CardContent,
CardMedia,
Container,
IconButton,
List,
ListItem,
ListItemSecondaryAction,
ListItemText,
Typography
} from '@mui/material';
import tire from '../../assets/images/tire.jpg';

const products = [
{
name: 'The Catalyzer',
image: 'https://dummyimage.com/420x260',
category: 'CATEGORY',
price: '$16.00',
},
{
name: 'Shooting Stars',
image: 'https://dummyimage.com/421x261',
category: 'CATEGORY',
price: '$21.15',
},
{
name: 'Neptune',
image: 'https://dummyimage.com/422x262',
category: 'CATEGORY',
price: '$12.00',
},
{
name: 'The 400 Blows',
image: 'https://dummyimage.com/423x263',
category: 'CATEGORY',
price: '$18.40',
},
{
name: 'The Catalyzer',
image: 'https://dummyimage.com/424x264',
category: 'CATEGORY',
price: '$16.00',
},
{
name: 'Shooting Stars',
image: 'https://dummyimage.com/425x265',
category: 'CATEGORY',
price: '$21.15',
},
{
name: 'Neptune',
image: 'https://dummyimage.com/427x267',
category: 'CATEGORY',
price: '$12.00',
},
];

export default function UserSparePart() {
const [cartItems, setCartItems] = useState([]);

const handleDelete = (index) => {
setCartItems(cartItems.filter((_, i) => i !== index));
};

const availableParts = [
{ name: 'Tire', price: 200, img: tire },
{ name: 'Break', price: 250, img: tire },
{ name: 'Clutch', price: 90, img: tire },
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

    <section class="text-gray-600 body-font">
      <div class="container px-1 py-11 mx-auto">
        <div class="flex flex-wrap -m-4">
    
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
             <Card>
               <CardActionArea>
                 <CardMedia
                   component="img"
                   image={tire}
                   alt="Tire"
                   height="200"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     Tire
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                     High quality tire with long durability.
                   </Typography>
                   <Typography variant="body1" color="textPrimary" component="h4">
                     Price: $200
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button
                   size="small"
                   color="primary"
                   startIcon={<AddShoppingCartIcon />}
                   onClick={() => addToCart(availableParts[0])}
                 >
                   Add to cart
                 </Button>
               </CardActions>
             </Card>
           </div>
           <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
             <Card>
               <CardActionArea>
                 <CardMedia
                   component="img"
                   image={tire}
                   alt="Break"
                   height="200"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     Break
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                     High quality break pad for smooth break.
                   </Typography>
                   <Typography variant="body1" color="textPrimary" component="h4">
                     Price: $250
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button
                   size="small"
                   color="primary"
                   startIcon={<AddShoppingCartIcon />}
                   onClick={() => addToCart(availableParts[1])}
                 >
                   Add to cart
                 </Button>
               </CardActions>
             </Card>
           </div>
           <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
             <Card>
               <CardActionArea>
                 <CardMedia
                   component="img"
                   image={tire}
                   alt="Clutch"
                   height="200"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="h2">
                     Clutch
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                     Durable clutch for high performance.
                   </Typography>
                   <Typography variant="body1" color="textPrimary" component="h4">
                     Price: $90
                   </Typography>
                 </CardContent>
               </CardActionArea>
               <CardActions>
                 <Button
                   size="small"
                   color="primary"
                   startIcon={<AddShoppingCartIcon />}
                   onClick={() => addToCart(availableParts[2])}
                 >
                   Add to cart
                 </Button>
               </CardActions>
             </Card>
           </div>
         </div>
       </div>
       </section>
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
       )
       }