
import React, { useState, useEffect } from 'react';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Grid, Container } from '@mui/material';

import { MdAccountCircle, MdBuild, MdAttachMoney, MdDirectionsBike } from "react-icons/md";


import { Box, Card, CardContent } from "@mui/material";
import { TextField, Button, IconButton } from '@mui/material';
import { MdEdit, MdDelete } from 'react-icons/md';

// import PieChart from '../pages/PieChart'
import { FaUser, FaList, FaTwitter, FaShare } from "react-icons/fa";

import { Typography, } from '@mui/material';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { useLocation } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

const initialFormState = { name: "", address: "", number: "" };

const data = [
  { name: 'Group A', value: 134 },
  { name: 'Group B', value: 87 },
  { name: 'Group C', value: 125 },
  { name: 'Group D', value: 36 },
];

const customers = [
  { name: 'John', address: '123 Main St', number: '555-1234' },
  { name: 'Jane', address: '456 Elm St', number: '555-5678' },
  { name: 'Bob', address: '789 Oak St', number: '555-9012' },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// components
// import Iconify from '../components/iconify';
// sections

// ----------------------------------------------------------------------

export default function DashboardPage() {
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
        location?.state?.userType === "Admin" ?
          <>hello</>
          :
          <Container maxWidth="xl">
            <Box className="col main pt-5 mt-3">
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "success.main", color: "white" }}>
                    <CardContent sx={{ bgcolor: "#57b960" }}>
                      <div className="rotate">
                        <MdDirectionsBike size={35} />
                      </div>
                      <Typography variant="h4 " sx={{ textTransform: "uppercase" }}>
                        Bikes Serviced
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        134
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "error.main", color: "white" }}>
                    <CardContent sx={{ bgcolor: "error.dark" }}>
                      <div className="rotate">
                        <MdAccountCircle size={35} />
                      </div>
                      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                        Customers
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        87
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "info.main", color: "white" }}>
                    <CardContent sx={{ bgcolor: "info.dark" }}>
                      <div className="rotate">
                        <MdBuild size={35} />
                      </div>
                      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                        Services
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        125
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xl={3} sm={6}>
                  <Card sx={{ height: "88%", bgcolor: "warning.main", color: "white" }}>
                    <CardContent>
                      <div className="rotate">
                        <MdAttachMoney size={35} />
                      </div>
                      <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                        Revenue
                      </Typography>
                      <Typography variant="h2" sx={{ fontSize: "4rem" }}>
                        $36,000
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table sx={{ minWidth: 650 }} aria-label="dashboard table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dashboard</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">This Month</TableCell>
                    <TableCell align="right">Last Month</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Bikes Serviced
                    </TableCell>
                    <TableCell align="right">200</TableCell>
                    <TableCell align="right">50</TableCell>
                    <TableCell align="right">75</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Customers
                    </TableCell>
                    <TableCell align="right">150</TableCell>
                    <TableCell align="right">35</TableCell>
                    <TableCell align="right">50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Services
                    </TableCell>
                    <TableCell align="right">300</TableCell>
                    <TableCell align="right">70</TableCell>
                    <TableCell align="right">100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Revenue Generated
                    </TableCell>
                    <TableCell align="right">$15,000</TableCell>
                    <TableCell align="right">$3,500</TableCell>
                    <TableCell align="right">$5,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Container>
              <Box className="col main pt-5 mt-3">
                <Typography variant="h3" sx={{ mb: 3 }}>
                  Dashboard
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Add Customer
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
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customers.map((customer, index) => (
                          <TableRow key={index}>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                            <TableCell>{customer.number}</TableCell>
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
          </Container>

      }

    </>
  );
}
