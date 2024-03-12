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

//google map
import EmbedMap from "../components/embedmap"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/sub.module.scss"  
import ContactArea from "../components/contactArea"

const Feature = (props) => {

    return (
        <Layout>
            <Seo title="会社案内" description="柳川芳鉄工所｜会社案内" />
            <div className={style.main}>

                <div className={style.subtitle}>
                    <h1>ABOUT US</h1>
                    <div className={style.txtArea}>会社案内</div>
                </div>

                <div className={style.subContent}>

                    <div className={style.mission}>
                        <h2>代表メッセージ</h2>
                        <p>この度は株式会社柳川芳鉄工所のホームページにお越しいただきありがとうございます。<br/>我が社は昭和21年甲府市に柳川芳鉄工所として開業いたしました。以来ボイラー及び圧力容器の製造及び据付工事を行ってまいりました。長年培ってきました経験と技術により沢山の取引先よりご愛顧いただいております。ますます機械化が進む現代、機械だけではできない人の手に頼らなければならない物づくりこだわり、これからもより良い製品を製造するために社員一丸なお一層精進し、お客様のニーズに柔軟に対応し、信頼される会社作りに努めてまいりたいと思います。</p>
                        <div className={style.rightTxt}>代表取締役社長 柳川芳彦</div>
                    </div>

                    <h2>会社概要</h2>
                    <div className={style.outline}>
                        <div className={style.materialName}>会社名</div><div>株式会社柳川芳鉄工所</div>
                        <div className={style.materialName}>本社所在地</div><div>山梨県中巨摩郡昭和町築地新居1683</div>
                        <div className={style.materialName}>電話番号</div><div>055-275-5141</div>
                        <div className={style.materialName}>FAX番号</div><div>055-275-5143</div>
                        <div className={style.materialName}>創業</div><div>昭和21年(1946年)10月</div>
                        <div className={style.materialName}>資本金</div><div>1000万円</div>
                        <div className={style.materialName}>事業内容</div><div>圧力容器・配管・架台・その他鉄鋼製品諸々の製作及び据付工事・検査・補修等</div>
                        <div className={style.materialName}>取引銀行</div><div>山梨中央銀行昭和支店</div>
                        <div className={style.materialName}>仕入先（順不同）</div><div>阪和工材株式会社<br/>三浦工業株式会社<br/>株式会社北海<br/>アイテック株式会社　他</div>
                    </div>

                    <h2>沿革</h2>
                    <div className={style.outline}>
                        <div className={style.materialName}>昭和21年 10月</div><div>甲府市相生町に「柳川芳鉄工所」を設立</div>
                        <div className={style.materialName}>昭和34年　8月</div><div>労働省ボイラー製造許可を受ける</div>
                        <div className={style.materialName}>昭和35年　1月</div><div>労働省圧力容器製造許可を受ける</div>
                        <div className={style.materialName}>昭和35年　2月</div><div>「株式会社 柳川丸芳鉄工所」に改組</div>
                        <div className={style.materialName}>昭和43年　4月</div><div>名称を「株式会社 柳川芳鉄工所」に改称</div>
                        <div className={style.materialName}>昭和55年 11月</div><div>現在地に本社工場を移設</div>
                    </div>

                    <h2>アクセス</h2>
                    <div className={style.gmap} id={"access"}>
                        <EmbedMap><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.970567987655!2d138.5186057!3d35.6279079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bf6df5f096f9d%3A0xdf6342c1b8234fb!2z77yI5qCq77yJ5p-z5bed6Iqz6YmE5bel5omA!5e0!3m2!1sja!2sjp!4v1710222709157!5m2!1sja!2sjp" className={style.gmapInner} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></EmbedMap>
                    </div>

                </div>
                

               
                <ContactArea/>

            </div>


        </Layout>
    )
}

export default Feature

