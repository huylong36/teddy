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
        <SwiperSlide><img src="https://image.vtc.vn/resize/th/upload/2020/12/14/chuc-mung-giang-sinh-1200x800-22113811.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src={Banner2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Banner3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Banner4} alt=""/></SwiperSlide>
    </Swiper>
    )
}

export default Banner
