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
import p6 from "../images/banner6.png"



const SwiperLoop = (props) => {

    return (
        <div className={style.swiperWrap}>
            <div><img src={p1} alt="javascript"/></div>
            <div><img src={p2} alt="javascript"/></div>
            <div><img src={p3} alt="javascript"/></div>
            <div><img src={p4} alt="javascript"/></div>
            <div><a href="https://bni.jp/ja/jci" target="_blank"><img src={p6} alt="javascript"/></a></div>
            {/* <Swiper
                loop={true}
                //loopedSlides={7}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 4
                    },
                    640: {
                        slidesPerView: 4
                    },
                }}
                autoplay={{ "delay": 1, "disableOnInteraction": false, reverseDirection:false}} 
                speed={6000}
                freeMode={false}
                //fill={"column"}                
                allowTouchMove={false}
                keyboard={{enabled: false}}
                //modules={[Autoplay]} 
                
                className={style.swiperloop}
            >
                <SwiperSlide><img src={p1} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p2} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p3} alt="javascript"/></SwiperSlide>
                <SwiperSlide><img src={p4} alt="javascript"/></SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default SwiperLoop