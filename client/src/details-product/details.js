import React, { useEffect, useState } from 'react'
import { useLocation ,useParams} from 'react-router';
import { productApi } from '../api/api/productApi';

const Details = () => {
    const param = useParams();
    const [detailProduct, setDetailProduct] = useState()
    useEffect(() => {
        productApi.detailProduct({id:param.id}).then((res) =>{
            setDetailProduct(res.data.details);
        })
    }, []);
    return (
        <div>
            {detailProduct?.nameProduct}
        </div>
    )
}

export default Details
