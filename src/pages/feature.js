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

import * as style from "../styles/sub.module.scss"  
import ContactArea from "../components/contactArea"

const Feature = (props) => {

    return (
        <Layout>
            <Seo title="柳川芳鉄工所の強み" description="柳川芳鉄工所の強み" />
            <div className={style.main}>

                <div className={style.subtitle}>
                    <h1>FEATURE</h1>
                    <div className={style.txtArea}>柳川芳鉄工所の強み</div>
                </div>

                <div className={style.subContent}>

                    <div className={style.mission}>
                        <h2>基本理念</h2>
                        <p>弊社は昭和21年 設立して以来、ボイラー・圧力容器の製造を中心に75年以上にわたり山梨県の産業を支え続けてきました。時代の変化とともに様々なニーズに答え続け培ってきた技術力を、未来に向けて更に進化していくことを目標としております。</p>
                    </div>

                    <h2>事業内容</h2>
                    <div className={style.grid_1clm_altimg}>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/feature01.jpg" alt="feature01" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>容器 製作</div>
                                <p>厚生労働省認可のボイラー・圧力容器製造工場として長年にわたり営業してきた経験がございますので、様々な設計・条件の容器の製作を行うことができます。もちろん普通ボイラー溶接士の有資格者もおりますので確かな品質をお約束いたします。ご要望の容量や圧力を元に設計をすることもいたします。また、オイルタンクなど消防申請が必要になるものも多数製造経験がございますので、まずはご相談くださいませ。</p>
                            </div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.txtbox}>
                                <div className={style.title}>配管・炉体製作</div>
                                <p>TN-P等ステンレス溶接の専門級の資格を持つ確かな知識と技術を持つ職人が多数在籍しておりますので、給排水・蒸気用の配管はもちろんサニタリー配管など細やかな溶接も可能です。※サニタリー配管は溶接部の電解研磨まで行います。また、ボイラー・タンク製造の技術から1000A以上の大型配管や炉体の製作も可能です。</p>
                            </div>
                            <div className={style.imgbox}><StaticImage src="../images/feature02.jpg" alt="feature02" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/feature03.jpg" alt="feature01" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>架台・ステージ・その他 製作</div>
                                <p>単純な門型・三角ブラケットの量産や、機器や容器用の架台はもちろんプラント仕様のステージ・歩廊・階段や耐荷重計算された蓋類など各種製作据付を行います。またご要望に応じて強度計算も行いますのでまずはご相談くださいませ。※建築レベルの相談は設計事務所など専門機関へ相談します。</p>
                            </div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.txtbox}>
                                <div className={style.title}>ボイラー等 設置工事</div>
                                <p>ボイラー製造の経験に基づき、現在では大手ボイラーメーカーの代理店としての営業もしておりますので、ご要望に応じてボイラーの選定のお手伝いから行います。もちろん現地確認をして必要な架台・配管・煙道・タンク等のプランニングから設計・製作・各種据付接続工事まで一貫して行います。</p>
                            </div>
                            <div className={style.imgbox}><StaticImage src="../images/feature04.jpg" alt="feature02" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/feature05.jpg" alt="feature01" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>各種検査・書類作成</div>
                                <p>ご要望に応じて各種検査を行います。
                                <br/>・耐圧 / 気密検査（水圧・ガスなどにて）
                                <br/>・浸透探傷試験　※自社に有資格者あり
                                <br/>・超音波・レントゲン検査　※社外機関に依頼
                                <br/>・寸法検査（ｷｰｴﾝｽ ﾜｲﾄﾞｴﾘｱ三次元測定機 WM-3500 所有）
                                <br/>※上記にないものもご相談ください。
                                </p>
                            </div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.txtbox}>
                                <div className={style.title}>塗装・仕上げ等</div>
                                <p>ご要望に応じて各種仕上げ作業をいたします。
                                <br/>・炭素鋼製品の塗装仕上げ
                                <br/>錆止め塗装仕上げ / 耐熱塗装仕上げ 等
                                <br/>・ステンレス製品の焼け取り仕上げ
                                <br/>塗りつけ/吹付けによる酸洗い仕上げ
                                <br/>電解研磨
                                <br/>※焼付け塗装については社外に依頼して行います。
                                <br/>また、小規模な研磨は社内にて行いますが大型容器の研磨は社外依頼になりますが対応いたしますのでご相談ください。
                                </p>
                            </div>
                            <div className={style.imgbox}><StaticImage src="../images/feature06.jpg" alt="feature02" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                        </div> 
                    </div>

                    <h2>設備紹介</h2>
                    <div className={style.grid_2clm} id={"facility"}>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-001.jpg" alt="ok-001" placeholder="blurred" quality ={90} layout="fullWidth"/></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>シャーリング</div>
                                <div className={style.cap}>相澤鉄工所 / A3-620</div>    
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-002.jpg" alt="ok-002" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>シャーリング</div>
                                <div className={style.cap}>萩原機械製作所</div>    
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-003.jpg" alt="ok-003" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>バンドソー</div>
                                <div className={style.cap}>大東精機 / ST4060H</div>    
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-004.jpg" alt="ok-004" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>バンドソー</div>
                                <div className={style.cap}>大東精機 / ST4565</div>    
                            </div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-005.jpg" alt="ok-005" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>油圧プレス</div>
                                <div className={style.cap}>佐々木油機工業/SBC-410</div>      
                            </div>
                        </div>
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-006.jpg" alt="ok-006" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>油圧プレス</div>
                                <div className={style.cap}>松田製作所 / C-47</div>     
                            </div>
                        </div>  
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-008.jpg" alt="ok-008" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>中型５種切断複合機</div>
                                <div className={style.cap}>昭和精工 / CL65</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-009.jpg" alt="ok-009" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ホール盤</div>
                                <div className={style.cap}>日立工機 / DD-4300</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-010.jpg" alt="ok-010" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ホール盤</div>
                                <div className={style.cap}>北川 / KDS-360</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-011.jpg" alt="ok-011" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ホール盤</div>
                                <div className={style.cap}>鈴太製作所/SB-2300</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-012.jpg" alt="ok-012" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ベンディングロール</div>
                                <div className={style.cap}>神崎工業/TAH-03AT</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-014.jpg" alt="ok-014" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ベンディングロール</div>
                                <div className={style.cap}>神崎工業/TAH-03AT</div>     
                            </div>
                        </div> 
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-021.jpg" alt="ok-014" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ベンディングロール</div>
                                <div className={style.cap}>松本機械/MBR-1050-3BH</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-015.jpg" alt="ok-015" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>高速切断機</div>
                                <div className={style.cap}>日立工機/CC16SB</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-016.jpg" alt="ok-016" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>旋盤</div>
                                <div className={style.cap}>和研機工/KSL-5M</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-017.jpg" alt="ok-017" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>卓上電気グラインダ</div>
                                <div className={style.cap}>日立工機/GT26SK</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-018.jpg" alt="ok-018" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>油圧プレス</div>
                                <div className={style.cap}>佐々木油機工業/SMB-100</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-019.jpg" alt="ok-019" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>プラズマ切断機</div>
                                <div className={style.cap}>Panasonic/YP-060PF3</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/ok-020.jpg" alt="ok-020" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>溶接機各種</div>
                                <div className={style.cap}>アーク・半自動・TIG溶接機等</div>     
                            </div>
                        </div>   
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/kk-001.jpg" alt="kk-001" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ﾜｲﾄﾞｴﾘｱ三次元測定機</div>
                                <div className={style.cap}>KEYENCE/WM-3000</div>     
                            </div>
                        </div>  
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/kk-002.jpg" alt="kk-002" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>電解研磨機</div>
                                <div className={style.cap}>ケミカル山本/ｴﾚｸﾄﾛｼｬｲﾅｰW</div>     
                            </div>
                        </div>  
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/kk-003.jpg" alt="kk-003" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>パンチャー</div>
                                <div className={style.cap}>Ogura等</div>     
                            </div>
                        </div>  
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/kk-004.jpg" alt="kk-004" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ポジショナー</div>
                                <div className={style.cap}>マツモト機械</div>     
                            </div>
                        </div>    
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/gk-001.jpg" alt="gk-001" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>現場用TIG溶接機</div>
                                <div className={style.cap}>DAIHEN/TIG MINI200PⅡ</div>     
                            </div>
                        </div>  
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/gk-002.jpg" alt="gk-002" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>ｴﾝｼﾞﾝ溶接機</div>
                                <div className={style.cap}>ﾃﾞﾝﾖｰ/ﾆｭｰｴｰﾌﾞﾙ200</div>     
                            </div>
                        </div>  
                        <div className={style.gridbox}>
                            <div className={style.imgbox}><StaticImage src="../images/gk-003.jpg" alt="gk-003" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                            <div className={style.txtbox}>
                                <div className={style.title}>パイプマシン</div>
                                <div className={style.cap}>REX/N80AⅢ</div>     
                            </div>
                        </div>    
                    </div>

                </div>
                

               
                <ContactArea/>

            </div>


        </Layout>
    )
}

export default Feature

