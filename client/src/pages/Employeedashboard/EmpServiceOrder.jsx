
import React, { useState, useEffect } from 'react';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Grid, Container } from '@mui/material';

import { Box, Card, CardContent } from "@mui/material";
import { TextField, Button, IconButton } from '@mui/material';
import { MdEdit, MdDelete } from 'react-icons/md';

// import PieChart from '../pages/PieChart'


import { Typography, } from '@mui/material';

import { useLocation } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


const initialFormState = { name: "", address: "", number: "", location: "", sparepart: "" };

// components
// import Iconify from '../components/iconify';
// sections

// ----------------------------------------------------------------------

export default function EmpServiceOrder() {
  const location = useLocation();
  console.log("/Hello", location);

  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCustomer({ ...currentCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    setCustomers([...customers, currentCustomer]);
    setCurrentCustomer(initialFormState);
  };

  const handleDelete = (index) => {
    setCustomers(customers.filter((customer, i) => i !== index));
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentCustomer(customers[index]);
  };

  const handleUpdateCustomer = () => {
    const updatedCustomers = customers.map((customer, i) =>
      i === customers.indexOf(currentCustomer) ? currentCustomer : customer
    );
    setCustomers(updatedCustomers);
    setCurrentCustomer(initialFormState);
    setIsEditing(false);
  };

  // const[record,setRecord] = useState([])

  // const getData = () =>
  // {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(res=>setRecord(res))
  // }

  // useEffect(() => {
  //    getData();
  // },) 
  return (
    <>
      {
      
            <Container>
              <Box className="col main pt-5 mt-3">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Order
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Add Order
                  </Typography>
                  <form>
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      value={currentCustomer.name}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      name="address"
                      label="Address"
                      variant="outlined"
                      fullWidth
                      value={currentCustomer.address}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      name="number"
                      label="Number"
                      variant="outlined"
                      fullWidth
                      value={currentCustomer.number}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      name="sparepart"
                      label="Spare Part"
                      variant="outlined"
                      fullWidth
                      value={currentCustomer.sparepart}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      name="location"
                      label="Location"
                      variant="outlined"
                      fullWidth
                      value={currentCustomer.location}
                      onChange={handleInputChange}
                      sx={{ mb: 2 }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={isEditing ? handleUpdateCustomer : handleAddCustomer}
                      sx={{ mr: 2 }}
                    >
                      {isEditing ? "Update" : "Add"}
                    </Button>
                    {isEditing && (
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setCurrentCustomer(initialFormState);
                          setIsEditing(false);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </form>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Customers
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Address</TableCell>
                          <TableCell>Number</TableCell>
                          <TableCell>Spare Part</TableCell>
                          <TableCell>Location</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customers.map((customer, index) => (
                          <TableRow key={index}>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                            <TableCell>{customer.number}</TableCell>
                            <TableCell>{customer.sparepart}</TableCell>
                            <TableCell>{customer.location}</TableCell>

                            <TableCell>
                              <IconButton aria-label="edit" onClick={() => handleEdit(index)}>
                                <MdEdit />
                              </IconButton>
                              <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                                <MdDelete />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>

                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </Container>
          

      }

    </>
  );
}
