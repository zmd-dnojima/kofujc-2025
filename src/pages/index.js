import * as React from "react"
import { Link, graphql } from "gatsby" 
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Keyboard, FreeMode, EffectCards, Thumbs } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/index.module.scss"  
import ContactArea from "../components/contactArea"

const Index = (props) => {

    const singleColumnBlog = [];

    return (
        <Layout>
            <Seo title="一般社団法人甲府青年会議所 2025年度 - Here We Go! ～その一歩で君が変わる、まちが変わる～" description="一般社団法人甲府青年会議所 2025年度 | ホーム" />
            <div className={style.main}>


                <div className={style.mainVisual}>
                <div className={style.mainVisualInner}>
                    <div className={style.mainImg}>
                        <div className={style.mainImgInner}>
                            {/* <StaticImage src="../images/mainImg.png" alt="main" placeholder="blurred" quality ={90}  /> */}
                            {/* <StaticImage className={style.sp} src="../images/top_sp.jpg" alt="main" placeholder="blurred" quality ={90} /> */}
                        </div>
                        
                    </div>
                </div>
                </div>

                <div className={style.news}>
                    <div className={style.subtitle}><span>NEWS</span><br/>新着情報｜活動報告</div>
                    <div className={style.morebutton}><Link to="/articles">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                    <div className={style.gridArea}>
                        <div className={style.blogArea}>
                            {/* tagをworks、記事数を4つに絞る */}
                            {(() => {
                                const allBlog = [];
                                const showBlogNum = 4;
                                var blogAddNum = 0;
                                
                                for(var i in props.data.allMicrocmsArticles.edges){
                                    
                                    allBlog.push(props.data.allMicrocmsArticles.edges[i])
                                    blogAddNum +=1
                                    if(blogAddNum > showBlogNum){
                                        break
                                    }
                                    singleColumnBlog.push(allBlog[i])
                                }
                            })()}
                                                
                            {
                                singleColumnBlog.map((novel, index) =>(
                                    <Link to={novel.node.articlesId} key={index}>
                                        <div className={style.blogCard}>                            
                                            {/* <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div> */}
                                            <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div></div>
                                            <div className={style.blogTags}>#{novel.node.category[0].name}</div>  
                                            
                                            <h3>{novel.node.title}</h3>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                </div>

                

                
                

                
                <ContactArea/>

            </div>{/* </main> */}
        </Layout>
    )
}

export default Index


export const query = graphql` 
    query MyQuery {
        allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
        edges {
            node {
                articlesId
                title
                body
                eventDate
                category {
                    name
                }
                mainImage {
                    url
                }
            }
        }
        }
    }
  `  