import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from '../../../assets/image/silde1.jpeg'
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "./style.scss";
// import "swiper/css/pagination"
SwiperCore.use([Autoplay, Pagination, Navigation])
const Banner = () => {
    return (
        <div>
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
        <SwiperSlide><img src="https://i.pinimg.com/originals/2f/88/0e/2f880ef2e1761ec234bf68cba9e7f3bb.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://taoanhonline.com/wp-content/uploads/2019/08/hinh-nen-1920x1080-165-1.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/2d/5a/b1/2d5ab14f89532f6529fb2cf0f0cf4f3c.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://taoanhonline.com/wp-content/uploads/2019/08/hinh-nen-1920x1080-10-1.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="http://photo.techrum.vn/images/2018/07/21/xkT4E.jpg"></img></SwiperSlide>
        <SwiperSlide><img src="https://img.thuthuat123.com/uploads/2019/10/17/hinh-nen-full-hd-toi-mau_105723431.jpg"></img></SwiperSlide>
    </Swiper>
        </div>
    )
}

export default Banner
