import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UpdateDialog({openProp,handleCloseProp,title}) {
    return (
        <Dialog open={openProp} onClose={handleCloseProp}>
        <DialogTitle>Update Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {title}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Text"
            type="text"
            fullWidth
            multiline={TextField}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
        <Button  onClick={handleCloseProp}>Cancel</Button>
        </DialogActions>
      </Dialog>
    )
}