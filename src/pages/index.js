import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
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

import slogan from '../images/slogan.svg'

const Index = (props) => {

    const singleBlog = [];
    const singleBlog_banner = [];
    const search = useLocation().search;
    const query3 = queryString.parse(search);

    return (
        <Layout>
            <Seo title="一般社団法人甲府青年会議所 2025年度 - Here We Go! ～その一歩で君が変わる、まちが変わる～" description="一般社団法人甲府青年会議所 2025年度 | ホーム" />
            <div className={style.main}>


                <div className={style.mainVisual}>
                
                    <div className={style.mainImg}>
                        <div className={style.mainImgInner}>
                            {/* <StaticImage src="../images/mainImg.png" alt="main" placeholder="blurred" quality ={90}  /> */}
                            {/* <StaticImage className={style.sp} src="../images/top_sp.jpg" alt="main" placeholder="blurred" quality ={90} /> */}
                        </div>  
                    </div>
                </div>

                <div className={style.bannerArea}>
                    <div className={style.bg}></div>
                    <div className={style.contentWrap}>
                    
                        <div className={style.blogArea}>
                            {(() => {
                                const allBlog_banner = [];
                                const showBlogNum_banner = 4;
                                var blogAddNum_banner = 0;
                                
                                for(var i in props.data.allMicrocmsArticles.edges){
                                    
                                    allBlog_banner.push(props.data.allMicrocmsArticles.edges[i])
                                    
                                    if(allBlog_banner[i].node.category[0].tag == "banner" ) {
                                        blogAddNum_banner +=1
                                        if(blogAddNum_banner > showBlogNum_banner){
                                            break
                                        }
                                        singleBlog_banner.push(allBlog_banner[i])
                                    }
                                }
                            })()}             
                            {
                                singleBlog_banner.map((novel, index) =>(
                                    <Link to={novel.node.articlesId} key={index}>
                                        <div className={style.blogCard}>                            
                                            {/* <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div> */}
                                            <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.bannerImage.url} alt="card-image" className={style.cardImg} /></div></div>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                </div>

                <div className={style.news}><div className={style.contentWrap}>
                    <div className={style.newsTitle}>
                        <div className={style.subtitle}><span>NEWS</span><br/>新着情報｜活動報告</div>
                        <div className={style.morebutton}><Link to="/articles">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                    </div>
                    
                    <div className={style.gridArea}>
                        <div className={style.blogArea}>
                            {/* tagをworks、記事数を4つに絞る */}
                            {(() => {
                                const allBlog = [];
                                const showBlogNum = 4;
                                var blogAddNum = 0;
                                
                                for(var i in props.data.allMicrocmsArticles.edges){
                                    
                                    allBlog.push(props.data.allMicrocmsArticles.edges[i])
                                    
                                    if(allBlog[i].node.category[0].tag != "banner" && allBlog[i].node.category[0].tag != "page" ) {
                                        blogAddNum +=1
                                        if(blogAddNum > showBlogNum){
                                            break
                                        }
                                        singleBlog.push(allBlog[i])
                                        console.log(allBlog[i].node.category)
                                    }
                                }
                            })()}             
                            {
                                singleBlog.map((novel, index) =>(
                                    <Link to={novel.node.articlesId} key={index}>
                                        <div className={style.blogCard}>                            
                                            {/* <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div> */}
                                            <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div></div>
                                            <div className={style.blogTags}>#{novel.node.category[0].name}</div>  
                                            <div className={style.blogTitle}>{novel.node.title}</div>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                    
                </div></div>

                <div className={style.rijicho}>
                    <div className={style.contentWrap}>
                            <div className={style.inner}>
                                <div className={style.slogan}><img src={slogan} alt="javascript" /></div>
                                <div>ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。ここに理事長所信が入ります。</div>
                                <div className={style.rijichoName}>一般社団法人甲府⻘年会議所<br/>第〇〇代理事長 萩原 亮</div>
                                <div className={style.btn}><Link to="/">理事長所信</Link></div>
                            </div>
                    </div>
                </div>

                <div className={style.aboutus}><div className={style.contentWrap}>
                    <div className={style.subtitle}><span>ABOUT US</span><br/>一般社団法人甲府青年会議所とは</div>
                    
                    <div className={`${style.aboutusBtns} ${style.brsp}`}>
                        <div className={style.aBtn}>
                            <Link to="/officers">
                                <StaticImage src="../images/a1_sp.jpg" alt="理事役員紹介" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>理事役員紹介</span>2025年度の活動を担う、〇〇名の理事役員を紹介します。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/sougoukeikaku2021">
                                <StaticImage src="../images/a2_sp.jpg" alt="総合計画2021" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>総合計画2021</span>中長期計画である総合計画2021は、2025年度に4年目を迎えます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/history">
                                <StaticImage src="../images/a3_sp.jpg" alt="これまでの活動" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>これまでの活動</span>2024年以前のホームページをご覧いただけます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/senior">
                                <StaticImage src="../images/a4_sp.jpg" alt="シニアクラブ" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>シニアクラブ</span>甲府青年会議所シニアクラブの情報はこちら</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                    </div>

                    <div className={`${style.aboutusBtns} ${style.brpc}`}>
                        <div className={style.aBtn}>
                            <Link to="/officers">
                                <StaticImage src="../images/a1.jpg" alt="理事役員紹介" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>理事役員紹介</span>2025年度の活動を担う、〇〇名の理事役員を紹介します。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/sougoukeikaku2021">
                                <StaticImage src="../images/a2.jpg" alt="総合計画2021" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>総合計画2021</span>中長期計画である総合計画2021は、2025年度に4年目を迎えます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/history">
                                <StaticImage src="../images/a3.jpg" alt="これまでの活動" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>これまでの活動</span>2024年以前のホームページをご覧いただけます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/senior">
                                <StaticImage src="../images/a4.jpg" alt="シニアクラブ" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>シニアクラブ</span>甲府青年会議所シニアクラブの情報はこちら</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                    </div>
                    
                </div></div>

                <ContactArea/>

                <div className={style.cardWrap}>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner1.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner2.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner3.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner4.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner5.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                </div>

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
                    tag
                }
                mainImage {
                    url
                }
                bannerImage {
                    url
                }
            }
        }
        }
    }
  `  