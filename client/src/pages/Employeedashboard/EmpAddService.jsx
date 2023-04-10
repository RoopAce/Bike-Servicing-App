import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function EmpAddService() {
  const [serviceRequests, setServiceRequests] = useState([
    { id: 1, name: 'Bike tune-up', status: 'In progress', notes: 'Customer prefers a lighter saddle' },
    { id: 2, name: 'Flat tire repair', status: 'Complete', notes: 'Replaced inner tube' },
    { id: 3, name: 'Chain replacement', status: 'Pending', notes: '' },
  ]);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editServiceRequest, setEditServiceRequest] = useState(null);

  const handleEditClick = (serviceRequest) => {
    setEditServiceRequest(serviceRequest);
    setEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setEditServiceRequest(null);
    setEditDialogOpen(false);
  };

  const handleSave = () => {
    // Save changes to the service request
    setServiceRequests(serviceRequests.map((serviceRequest) => {
      if (serviceRequest.id === editServiceRequest.id) {
        return editServiceRequest;
      } else {
        return serviceRequest;
      }
    }));
    setEditServiceRequest(null);
    setEditDialogOpen(false);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {serviceRequests.map((serviceRequest) => (
            <TableRow key={serviceRequest.id}>
              <TableCell>{serviceRequest.id}</TableCell>
              <TableCell>{serviceRequest.name}</TableCell>
              <TableCell>{serviceRequest.status}</TableCell>
              <TableCell>{serviceRequest.notes}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditClick(serviceRequest)}>
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={editDialogOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Service Request</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editServiceRequest ? editServiceRequest.name : ''}
            onChange={(e) =>
              setEditServiceRequest({
                ...editServiceRequest,
                name: e.target.value,
              })
            }
            fullWidth
            margin="dense"
          />
          <TextField
            label="Status"
            value={editServiceRequest ? editServiceRequest.status : ''}
            onChange={(e) =>
              setEditServiceRequest({
                ...editServiceRequest,
                status: e.target.value,
              })
            }
            fullWidth
            margin="dense"
          />
          <TextField
            label="Notes"
            value={editServiceRequest ? editServiceRequest.notes : ''}
            onChange={(e) =>
              setEditServiceRequest({
                ...editServiceRequest,
                notes: e.target.value,
              })
            }
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
