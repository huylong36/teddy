import {
  Input,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
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
  const handleOpen = () => {
    setOpen(true);
  };
  const create = useSelector((state) => state.create);
  console.log("create", create);
  const nameProduct = useRef();
  const priceProduct = useRef();
  const statusProduct = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const onChangListImage = (files) => {
    const formData = new FormData();
    for (let index = 0; index < files.length; index++) {
      formData.append("file", files[index]);
      formData.append("upload_preset", "m4jso0bw");
    }
    Axios.post(
      "https://api.cloudinary.com/v1_1/dwn6likgj/image/upload",
      formData
    )
      .then((res) => {
        const newList = [...listImage];
        newList.push(res.data.url);
        setListImage(newList);
      })
      .catch((error) => {});
  };

  const onChangeImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "m4jso0bw");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dwn6likgj/image/upload",
      formData
    )
      .then((res) => {
        setImageSelected(res.data.url);
      })
      .catch((error) => {});
  };
  const createProduct = async () => {
    const createItemProduct = {
      nameProduct: nameProduct.current.value,
      imageProduct: imageSelected,
      statusProduct: statusProduct.current.value,
      priceProduct: priceProduct.current.value,
      listImage: listImage,
    };
    console.log(listImage);
    if (
      (createItemProduct.nameProduct === "" ||
        createItemProduct.statusProduct === "" ||
        createItemProduct.priceProduct === "",
      createItemProduct.imageProduct === "")
    ) {
      enqueueSnackbar("Nh???p ????? th??ng tin", { variant: "error" });
      return;
    } else {
      enqueueSnackbar("T???o s???n ph???m th??nh c??ng", { variant: "success" });
    }
    try {
      const dataProduct = await productApi.product(createItemProduct);
      dispatch(createProductRd(dataProduct.data.newProduct));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />

      <Button onClick={() => handleOpen()}>T???o s???n ph???m</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"T???o s???n ph???m"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="dialog-content"
          >
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Input
                      onChange={(event) => {
                        onChangeImage(event.target.files);
                      }}
                      className="item-input"
                      name=""
                      label="???nh s???n ph???m"
                      type="file"
                      required
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      onChange={(event) => {
                        onChangListImage(event.target.files);
                      }}
                      className="item-input"
                      name=""
                      label="C??c ???nh li??n quan"
                      type="file"
                      required
                      multiple
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField
                      className="item-input"
                      name="nameProduct"
                      label="T??n s???n ph???m"
                      inputRef={nameProduct}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      className="item-input"
                      name="priceProduct"
                      label="Gi?? s???n ph???m"
                      inputRef={priceProduct}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField
                      className="item-input"
                      name="statusProduct"
                      label="Tr???ng th??i"
                      inputRef={statusProduct}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hu???</Button>
          <Button onClick={() => createProduct()}>T???o s???n ph???m</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
