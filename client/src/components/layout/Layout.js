import React from 'react'
import Banner from './banner/banner'
import Header from './header/header'
import Product from './product/product'
import './style.scss'
const Layout = () => {
    return (
         <div className="layout">
            <Header/>
            <Banner/>
            <Product/>
         </div>
    )
}

export default Layout
