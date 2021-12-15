import { Grid,Container, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productApi } from '../../../api/api/productApi'
import { numberFormat } from '../../../utils/format'
import './style.scss'
const Product = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        productApi.getAllProduct().then((res)=>{
            setProduct(res.data.products);
        })
    },[])
    return (
        <div style={{marginTop:'50px'}}>
            <Container maxWidth="lg" >
            <Grid container spacing={{ xs: 2, md:5 }} item>
            {
                product.map((item) => (
                    <Grid className="item-product" key={item._id} md={3} sm={6} xs={12} spacing={{ xs: 2, md: 3 }} p={2} item>
                    <Link to={"/product-detail/" +item._id}>
                        <Paper>
                            <Grid className="total__item__product" p={{md:2}} item>
                                <div className="img__product"><img src={item.imageProduct} alt="lo"/></div>
                                <Typography fontWeight="600" marginBottom={1} className="name__product">{item.nameProduct}</Typography>
                                <Typography marginBottom={1} className="status__produc">{item.statusProduct}</Typography>
                                <div className="price__product">{numberFormat.format(item.priceProduct)}&nbsp;&#273;</div>
                            </Grid>
                        </Paper>
                    </Link>
                    </Grid>
                ))
            }
            </Grid>
            </Container>
        </div>
    )
}

export default Product
