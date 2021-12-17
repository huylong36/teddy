import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from '../../../assets/image/silde1.jpeg'
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "./style.scss";
import Container from '@mui/material/Container';
// import "swiper/css/pagination"
import Banner1 from '../../../assets/image/banner1.gif'
import Banner2 from '../../../assets/image/banner2.png'
import Banner3 from '../../../assets/image/banner3.png'
import Banner4 from '../../../assets/image/banner4.png'
SwiperCore.use([Autoplay, Pagination, Navigation])
const Banner = () => {
    return (
        <Container >
        <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={true}
        pagination={{
            clickable: true,
            dynamicBullets:true
        }}
        navigation={true}
        className="mySwiper"
        loop={true}
        
    >
        <SwiperSlide><img src={Banner1}/></SwiperSlide>
        <SwiperSlide><img src={Banner2}/></SwiperSlide>
        <SwiperSlide><img src={Banner3}/></SwiperSlide>
        <SwiperSlide><img src={Banner4}/></SwiperSlide>
    </Swiper>
        </Container>
    )
}

export default Banner
