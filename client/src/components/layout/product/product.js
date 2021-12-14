import { Grid,Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productApi } from '../../../api/api/productApi'
import './style.scss'
const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        productApi.getAllProduct().then((res)=>{
            setProduct(res.data.products);
        })
    },[])
    return (
        <Container>
        <Grid container>
           {
            product.map((item) => (
                <Grid className="item-product" key={item._id} md={3}>
                   <Link to={"/product-detail/" +item._id}>
                        <div className="total__item__product">
                            <div className="name__product">{item.nameProduct}</div>
                            <div className="img__product"><img src={item.imageProduct} alt="image"/></div>
                            <div className="des__product">{item.descriptionProduct}</div>
                            <div className="size__product">{item.sizeProduct}</div>
                            <div className="price__product">{item.priceProduct}</div>
                        </div>
                   </Link>
                </Grid>
              ))
           }
        </Grid>
        </Container>
    )
}

export default Product
