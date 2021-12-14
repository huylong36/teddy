import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import { blogApi } from '../../../api/api/blogApi'
import { TextField } from '@mui/material';
import './style.scss'
const Blog = () => {
    useEffect(() => {
        blogApi.createBlog().then((res)=>{
            console.log('res' ,res.data.posts);
        })
    }, )
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Create Posts
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Create Posts"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <Card className="create-posts">
                    <TextField  required={true} name="username" label="Name Post" variant="outlined" />
                    <TextField  required={true} name="username" label="Description" variant="outlined" />
                    <TextField  required={true} name="username" label="Status" variant="outlined" />
                    <TextField  required={true} name="username" label="URL" variant="outlined" />
                </Card>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default Blog
