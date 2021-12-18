import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const EditProduct = () => {
    const state = useSelector(state => state.product)
    const user = useSelector(state => state.user)
    console.log('state' , state);
    console.log('user' , user);
    return (
        <div>
            aaaaaaaa
        </div>
    )
}

export default EditProduct
