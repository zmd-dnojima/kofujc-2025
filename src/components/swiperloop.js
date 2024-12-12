import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"


//swiper
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import * as style from "../styles/swiperLoop.module.scss"

import p1 from "../images/banner1.jpg"  
import p2 from "../images/banner2.jpg"  
import p3 from "../images/banner3.jpg"  
import p4 from "../images/banner4.jpg"
import p5 from "../images/banner5.jpg"  



const SwiperLoop = (props) => {

    return (
        <div className={style.swiperWrap}>
            <Swiper
                loop={true}
                //loopedSlides={7}
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 5
                    },
                    640: {
                        slidesPerView: 3
                    },
                }}
                autoplay={{ "delay": 1, "disableOnInteraction": false, reverseDirection:false}} 
                speed={6000}
                freeMode={false}
                //fill={"column"}                
                allowTouchMove={false}
                keyboard={{enabled: false}}
                modules={[Autoplay]} 
                
                className={style.swiperloop}
            >
                <SwiperSlide><img src={p1} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p2} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p3} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p4} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p5} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p1} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p2} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p3} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p4} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p5} alt="javascript"/></SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default SwiperLoop