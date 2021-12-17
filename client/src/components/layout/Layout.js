import React from 'react'
import Banner from './banner/banner'
import Header from './header/header'
import Product from './product/product'
import Snowfall from 'react-snowfall'
import './style.scss'
const Home = () => {
    return (
         <div className="layout">
            <Header/>
            <Banner/>
            <Product/>
         </div>
    )
}

export default Home
