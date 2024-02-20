import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import { useInView } from "react-intersection-observer"
import * as Scroll from 'react-scroll'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import YouTube from '@u-wave/react-youtube';

import Layout from "../components/layout"
import Seo from "../components/seo"

import fujiIcon from "../images/fuji.svg"
import fujiIcon2 from "../images/fuji_white.svg"  
import image01 from "../images/mock2.png"  
import checkIcon from "../images/check.svg"  
import mailIcon from "../images/mail.svg"


import * as style from "../styles/works.module.scss"  

const Works = (props) => {

    const swiperRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };

    return (
        <Layout>
            <Seo title="ZMD｜WORKS" description="WORKS一覧ページ" />

            
            <div className={style.subHdr}>
                <div className={style.subHdrInner}>    
                <h1 className={style.subTitle}><img src={fujiIcon2} alt="javascript"/><span>WORKS</span>制作事例</h1>
                </div>
            </div>
            
            <div className={style.contentWrap}>
              <div className={style.worksArea}>
                  <h3>WEB制作事例</h3>
                  <div className={style.underConstruction}>現在作成中です</div>
                  

                  <div className={style.moviesArea}>
                    <h3>動画制作事例</h3>
                    <div className={style.videoArea}>
                        <Swiper
                            slidesPerView={1} 
                            spaceBetween={30} 
                            initialSlide={1}
                            centeredSlides={true}
                            centerInsufficientSlides={false}
                            modules={[Pagination]} 
                            loop={true}
                            //navigation={{clickable: true}}
                            //pagination={{ clickable: true }}
                            className={style.swiperArea} 
                            onBeforeInit={(swiper) => {
                              swiperRef.current = swiper;
                            }}
                        >
                            <SwiperSlide ><div><YouTube video="iTQREEYLnHQ" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="F0cwZ_mbXds" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="5-Z8__5UHgo" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="BlO6d57JGIU" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="q2yNhyGjaZ8" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="YRhtwoBsoGc" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="HuFmdd4i72w" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="HSeimhhGWcw" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="FL8_IGGH9Ts" muted  className={style.youtubeArea}/></div></SwiperSlide>
                            <SwiperSlide ><div><YouTube video="FL8_IGGH9Ts" muted  className={style.youtubeArea}/></div></SwiperSlide>
                        </Swiper>
                        <div className={style.bnBtn}>
                          <div className={style.swiperBtnPrev} onClick={() => swiperRef.current?.slidePrev()} ></div>
                          <div className={style.swiperBtnNext} onClick={() => swiperRef.current?.slideNext()} ></div>
                        </div>
                    </div>
                  </div>
                      
              </div>
            </div>
        </Layout>
    )
}

export default Works

