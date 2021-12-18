import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const EditProduct = () => {
    const product = useSelector(state => state.createProduct)
    console.log('product' , product);
    return (
        <div>
            aaaaaaaa
        </div>
    )
}

export default EditProduct
