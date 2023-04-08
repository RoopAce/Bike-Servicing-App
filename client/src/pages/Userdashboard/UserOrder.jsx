import React from 'react'
import { useState } from 'react';
import { Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';




export default function UserOrder() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', date: '2022-01-01', total: 100 },
    { id: 2, customerName: 'Jane Doe', date: '2022-01-02', total: 200 },
    { id: 3, customerName: 'Bob Smith', date: '2022-01-03', total: 300 },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');

  const handleEditClick = (id) => {
    const orderToEdit = orders.find((order) => order.id === id);
    setEditingId(id);
    setCustomerName(orderToEdit.customerName);
    setDate(orderToEdit.date);
    setTotal(orderToEdit.total);
  };

  const handleDeleteClick = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId !== null) {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.id === editingId) {
            return { ...order, customerName, date, total };
          }
          return order;
        })
      );
      setEditingId(null);
    } else {
      setOrders((prevOrders) => [
        ...prevOrders,
        { id: prevOrders.length + 1, customerName, date, total },
      ]);
    }
    setCustomerName('');
    setDate('');
    setTotal('');
  };

  return (
   <>

    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5" gutterBottom>
          Orders
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Customer Name"
                variant="outlined"
                fullWidth
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Total"
                variant="outlined"
                fullWidth
                type="number"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                {editingId !== null ? 'Save Changes' : 'Add Order'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      </Grid>

      <Grid item xs={12}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  startIcon={<Edit />}
                  onClick={() => handleEditClick(order.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained" href="#contained-buttons"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => handleDeleteClick(order.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
   </>
  )
}

