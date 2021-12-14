import  React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input, TextField } from '@mui/material';
import './style.scss'
export  const CreateProduct = () =>{
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
 const [image, setImage]= useState('')
 const [imagePreviewUrl, setImagePreviewUrl]= useState('')
  const handleClose = () => {
    setOpen(false);
  };
  const onChangeImage= ()=>{

  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tạo sản phẩm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="dialog-content">
            <Input
             onChange={onChangeImage}
             className="item-input"
             name="" 
             label="Ảnh sản phẩm"
             type="file"/>
            
            <TextField
            in
            className="item-input"
             name="" 
             label="Tên sản phẩm"/>
            <TextField name="" 
            className="item-input"
            label="Giá  sản phẩm"/>
            <TextField name="" 
            className="item-input"
            label="Trạng thái"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleClose} autoFocus>
            Tạo sản phẩm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}