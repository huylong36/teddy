import { Input, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";
import { useSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../../api/api/productApi";
import EditProduct from "../../editProduct/editProduct";
import Header from "../layout/header/header";
import { createProductRd } from "./createProductSlice";
import "./style.scss";
export const CreateProduct = () => {
  const [open, setOpen] = React.useState(false);

  const [imageSelected, setImageSelected] = useState("");
  const [listImage, setListImage] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () =>{
    setOpen(true)
  }
  const create = useSelector(state => state.create)
  console.log('create' , create);
  const nameProduct = useRef();
  const priceProduct = useRef();
  const statusProduct = useRef();
  const {enqueueSnackbar} = useSnackbar()
  const dispatch = useDispatch()
  const onChangListImage = (files) =>{
    const formData = new FormData();
    for (let index = 0; index < files.length; index++) {
      formData.append("file", files[index]);
      formData.append("upload_preset", "m4jso0bw");
    }
    Axios.post("https://api.cloudinary.com/v1_1/dwn6likgj/image/upload", formData)
      .then((res) => {
        const newList = [...listImage];
        newList.push(res.data.url);
        setListImage(newList)
        
      })
      .catch((error) => {});
  }

  const onChangeImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "m4jso0bw");
    Axios.post("https://api.cloudinary.com/v1_1/dwn6likgj/image/upload", formData)
      .then((res) => {
        setImageSelected(res.data.url)
      })
      .catch((error) => {});
  };
  const createProduct = async () =>{
      const createItemProduct = {
        nameProduct: nameProduct.current.value,
        imageProduct:imageSelected,
        statusProduct:statusProduct.current.value,
        priceProduct:priceProduct.current.value,
        listImage:listImage,
      }
      console.log(listImage);
      if(createItemProduct.nameProduct === '' || createItemProduct.statusProduct === '' ||createItemProduct.priceProduct === '' , createItemProduct.imageProduct===''){
        enqueueSnackbar('Nhập đủ thông tin' , {variant:'error'})
        return;
      }else{
        enqueueSnackbar('Tạo sản phẩm thành công' , {variant:"success"})
      }
      try {
        const dataProduct = await productApi.product(createItemProduct)
        dispatch(createProductRd(dataProduct.data.newProduct))
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
    <Header/>
      <Button onClick={() => handleOpen()}>Tạo sản phẩm</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Tạo sản phẩm"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="dialog-content"
          >
            <Input
              onChange={(event) => {
                onChangeImage(event.target.files);
               
              }}
              className="item-input"
              name=""
              label="Ảnh sản phẩm"
              type="file"
              required
            />
            <input
            onChange={(event) => {
              onChangListImage(event.target.files);
            }}
            className="item-input"
            name=""
            label="Ảnh sản phẩm"
            type="file"
            required
            multiple

          />
            <TextField className="item-input" name="nameProduct" label="Tên sản phẩm" inputRef={nameProduct}/>
            <TextField className="item-input" name="priceProduct" label="Giá sản phẩm" inputRef={priceProduct} />
            <TextField className="item-input" name="statusProduct" label="Trạng thái" inputRef={statusProduct}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={() => createProduct()}>
            Tạo sản phẩm
          </Button>
        </DialogActions>
      </Dialog>
      <EditProduct/>
    </div>
  );
};
