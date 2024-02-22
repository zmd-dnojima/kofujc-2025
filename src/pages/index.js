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
            <Seo title="柳川芳鉄工所" description="柳川芳鉄工所の公式ホームページです" />
            <div className={style.main}>
                <div className={style.mainVisual}>
                    <div className={style.txtArea}>
                        <h1>継承<span>と</span>飛翔</h1>
                        <h5>重ねた歴史を土台に、更に遠くへ</h5> 
                    </div>
                    <StaticImage className={style.pc} src="../images/top.jpg" alt="main" placeholder="blurred" quality ={90} layout="fullWidth" />
                    <StaticImage className={style.sp} src="../images/top_sp.jpg" alt="main" placeholder="blurred" quality ={90} layout="fullWidth" />
                </div>

                <div className={style.feature}>
                    <div className={style.subtitle}><span>FEATURE</span>柳川芳鉄工所の強み</div>

                    <div className={style.gridArea}>
                        <div className={style.txtbox}>
                            <h3>山梨の産業を支え続けた<br/>技術をその先へ</h3>
                            <div>弊社は昭和21年 設立して以来、ボイラー・圧力容器の製造を中心に75年以上にわたり山梨県の産業を支え続けてきました。<br/>
                            時代の変化とともに様々なニーズに答え続け培ってきた技術力を未来に向けて更に磨き、進化していくことを目標としております。</div>
                            <div className={style.morebutton}><Link to="/feature">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                        </div>
                        <div className={style.imgbox}>
                            <StaticImage src="../images/p1.jpg" alt="p1" placeholder="blurred" quality ={90} />
                        </div>
                    </div>
                    <div className={style.feature_img}>
                        <div className={style.feature_img01}><StaticImage src="../images/p2.jpg" alt="p1" placeholder="blurred" quality ={90} /></div>
                        <div className={style.feature_img02}><StaticImage src="../images/p3.png" alt="p1" placeholder="blurred" quality ={90} /></div>
                        </div>
                    
                    <div className={style.skewbg}></div>
                    
                </div>

                <div className={style.facility}>
                    <div className={style.subtitle}><span>FACILITY</span>設備紹介</div>

                    <div className={style.gridArea}>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/facility01.jpg" alt="p1" placeholder="blurred" quality ={90} layout="fullWidth"/></div>
                            <div className={style.txtbox}>
                                <div className={style.facTitle}>設備名01</div>
                                <div>弊社は昭和21年 設立して以来、ボイラー・圧力容器の製造を中心に75年以上にわたり山梨県の産業を支え続けてきました。<br/>
                                時代の変化とともに様々なニーズに答え続け培ってきた技術力を未来に向けて更に磨き、進化していくことを目標としております。</div>    
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/facility02.jpg" alt="p1" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.facTitle}>設備名02</div>
                                <div>弊社は昭和21年 設立して以来、ボイラー・圧力容器の製造を中心に75年以上にわたり山梨県の産業を支え続けてきました。<br/>
                                時代の変化とともに様々なニーズに答え続け培ってきた技術力を未来に向けて更に磨き、進化していくことを目標としております。</div>    
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/facility03.jpg" alt="p1" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.facTitle}>設備名03</div>
                                <div>弊社は昭和21年 設立して以来、ボイラー・圧力容器の製造を中心に75年以上にわたり山梨県の産業を支え続けてきました。<br/>
                                時代の変化とともに様々なニーズに答え続け培ってきた技術力を未来に向けて更に磨き、進化していくことを目標としております。</div>    
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/facility04.jpg" alt="p1" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.facTitle}>設備名04</div>
                                <div>弊社は昭和21年 設立して以来、ボイラー・圧力容器の製造を中心に75年以上にわたり山梨県の産業を支え続けてきました。<br/>
                                時代の変化とともに様々なニーズに答え続け培ってきた技術力を未来に向けて更に磨き、進化していくことを目標としております。</div>    
                            </div>
                        </div>    
                    </div>
                    <div className={style.morebutton}><Link to="/feature#facility">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                </div>

                <div className={style.aboutus}>
                    <div className={style.subtitle}><span>ABOUT US</span>会社案内</div>

                    <div className={style.gridArea}>
                        
                        <div className={style.imgbox}>
                            <StaticImage src="../images/p4.png" alt="p4" placeholder="blurred" quality ={90} />
                        </div>
                        <div className={style.txtbox}>
                            <div>山梨県中巨摩郡昭和町にある釜無工業団地内に所在する昭和21年設立の鉄工所です。<br/><br/>
                                古くはボイラー製造を行っており、現在は鉄鋼製容器全般・熱交換器・配管・炉体・架台等、様々な鉄工用品の製造を行っております。<br/><br/>
                                また、管工事業の建設業許可を頂いておりまして製造から据付工事まで一貫して行うことも可能です。
                                急なトラブル対応にも柔軟に対応いたしますので、お気軽にお問い合わせくださいませ。</div>
                                <div className={style.morebutton}><Link to="/aboutus">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                        </div>
                    </div>
                    <div className={style.skewbg}></div>
                </div>

                <ContactArea/>

                <div className={style.news}>

                    <div className={style.gridArea}>
                        <div className={style.subtitle}><span>NEWS</span>お知らせ</div>
                        <div className={style.morebutton}><Link to="/articles">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                        <div className={style.blogArea}>
                            {/* tagをworks、記事数を3つに絞る */}
                            {(() => {
                                const allBlog = [];
                                const showBlogNum = 2;
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
                                            <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div>
                                            <h3>{novel.node.title}</h3>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                    

            
                    


                </div>

            </div>


        </Layout>
    )
}

export default Index


export const query = graphql` 
    query MyQuery {
        allMicrocmsArticles {
        edges {
            node {
                articlesId
                title
                body
                eventDate
                
            }
        }
        }
    }
  `  