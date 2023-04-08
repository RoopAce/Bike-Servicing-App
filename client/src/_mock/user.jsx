import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [
  {
    id: 1,
    avatarUrl: "/assets/images/avatars/avatar_1.jpg",
    name: "Aman Oli",
    phone: "9860960606",
    birthdate:"01-02-2001",
    email: "Aman@gmail.com",
    address: "banasthali",
  },
  {
    id: 2,
    avatarUrl: "/assets/images/avatars/avatar_2.jpg",
    name: "Jane Doe",
    phone: "555-555-5555",
    birthdate:"01-02-2005",
    email: "jane.doe@example.com",
    address: "456 Oak St, Anytown USA",
  },
  // Add more user objects as needed...
];

export default users;
