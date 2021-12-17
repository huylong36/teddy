import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useParams } from "react-router";
import { productApi } from "../api/api/productApi";
import Bocqua from "../assets/image/bocqua.png";
import Giaohang from "../assets/image/giaohang.png";
import Giatgau from "../assets/image/giatgau.png";
import Nengau from "../assets/image/nengau.png";
import Tangthiep from "../assets/image/tangthiep.png";
import Header from "../components/layout/header/header";
import { numberFormat } from '../utils/format'
import "./style.scss";

const Details = () => {
  const param = useParams();
  const [detailProduct, setDetailProduct] = useState();
  useEffect(() => {
    productApi.detailProduct({ id: param.id }).then((res) => {
      setDetailProduct(res.data.details);
      console.log(res.data.details);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Grid className="bar-details" item>
            <Grid>
              <img src={Bocqua} alt="z" />
              <div>BỌC QUÀ QUÁ RẺ</div>
            </Grid>
            <Grid>
              <img src={Giaohang} alt="z" />
              <div>GIAO HÀNG TẬN NHÀ</div>
            </Grid>
            <Grid>
              <img src={Tangthiep} alt="z" />
              <div>TẶNG THIỆP MIỄN PHÍ</div>
            </Grid>
            <Grid>
              <img src={Giatgau} alt="z" />
              <div>GIẶT GẤU BÔNG</div>
            </Grid>
            <Grid>
              <img src={Nengau} alt="z" />
              <div>NÉN NHỎ GẤU</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item md={6}>
            <Carousel className="carousel-custom">
              {detailProduct?.listImage.map((value) => (
                <div>
                  <img src={value} alt="slide" />
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item md={6} pl={2}>
            <Typography>{detailProduct?.nameProduct}</Typography>
            <TableContainer component={Paper} className="custom-table">
            <Table >
              <TableHead>
                <TableRow className="custtom-th">
                  <TableCell>Giá bán</TableCell>
                  <TableCell>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>{numberFormat.format(detailProduct?.priceProduct)}&nbsp;&#273;</TableCell>
                <TableCell>{detailProduct?.statusProduct}</TableCell>
              </TableBody>
            </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Details;
