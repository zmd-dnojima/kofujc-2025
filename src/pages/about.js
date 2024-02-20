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

import Layout from "../components/layout"
import Seo from "../components/seo"

import fujiIcon2 from "../images/fuji_white.svg"  
import page02Img from "../images/graph.png"  
import checkIcon from "../images/check.svg"  
import aboutImg from "../images/portfolio.jpg"
import about01 from "../images/about01.jpg"  
import about02 from "../images/about02.svg"  
import about03 from "../images/about03.svg"  

import * as style from "../styles/about.module.scss"  


const Index = (props) => {

    return (
        <Layout>
            <Seo title="Zero Mountain Design" description="ZMD(Zero Mountain Design)｜Aboutページ" />
            

            <div className={style.contentWrap}>

                <div className={style.subHdr}>
                    <div className={style.subHdrInner}>    
                        <h1 className={style.subTitle}><img src={fujiIcon2} alt="javascript"/><span>ABOUT</span>ZMDについて</h1>
                    </div>
                </div>

                <div className={style.subContentWrap}>
                    <div className={style.subContentTitle}>Mission</div>
                    <div className={style.subContentGrid}>
                        <div className={`${style.gridA} ${style.subContentTxt}`}>
                            <h2>WEBメディアで山梨県のローカルビジネスに活気を。</h2>
                        </div>
                        <div className={`${style.gridB} ${style.subContentTxt}`}>
                            <p>
                            ローカルビジネスは地域になくてはならない存在です。整体医院・接骨院などの治療院、美容室やエステ、ネイルなどのサロン、歯科医院、クリニック、工務店、不動産、ハウスクリーニング、弁護士や税理士、司法書士といった士業関係、カフェやレストラン、居酒屋といった飲食店など。
                            訪れるお客様は、お近くに住んでいる住民がほとんどです。<br/><br/>
                            ではどのように彼らはお店を探し、多くの同業他社から一つ、あなたのお店を選ぶのでしょうか。家から一番近いから。友人の紹介で。家にチラシが入っていたから。目立つ看板で知っていたから。<br/><br/>
                            このように(オフライン)であなたのお店を知り選ぶ方もいれば、Google mapやポータルサイトでの口コミの評価が高かったから。検索したら一番上に出てきたから。SNSのフォロワー数が多かったから。好きな芸能人が宣伝してたから。youtubeの広告で流れて知ったからなど。(オンライン)上でお店の情報を得て訪れる方もいます。<br/><br/>
                            <span>私は(オンライン)での集客を専門知識を持ってお手伝いいたします。</span><br/><br/>
                            ホームページのアクセス数、コンバージョン率(成約率)を分析しPDCAを回したり、適切なタイミングでのリスティング広告掲載をご提案したり、動画広告やLPサイトを制作したり、検索時多くの方に見てもらうためにSEO対策したり。専門的な用語が並びましたが、新規顧客獲得のため、既存顧客へのリテンションマーケティングに(オフライン)では手の届かないところにアプローチできます。<br/><br/>
                            山梨県は2年連続転入超過になるなど、移住先としても人気があります。かという私も2019年に東京から移住してきました。(オンライン)に力をいれるお店はそんな方といち早く接点を持つことができます。家から一番近くても、少し離れたお店の評価が高かったらあなたはどうしますか？検索したらホームページがなく、別のお店は誠実で好感のもてるデザインのホームページがあったら、同じ距離、料金体系の場合どちらを選びますか？<br/><br/>
                            私は、山梨県が好きです。(オンライン)の力は地方創生や地元活性化の役に立てると信じています。
                            </p>  
                        </div>
                        <div className={style.subContentImg}><img src={about01} alt="javascript"/></div>
                    </div> 
                </div>  

                <div className={style.subContentWrap}>
                    <div className={style.subContentTitle}>Vision</div>
                    <div className={style.subContentGrid}>
                        <div className={`${style.gridA} ${style.subContentTxt}`}>
                            <h2>顧問税理士のように企業がWebコンサルタントを雇うことを当たり前にする。</h2>
                        </div>
                        <div className={`${style.gridB} ${style.subContentTxt}`}>
                            <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>WEB担当者を雇い月々給料を支払うより、プロの外部WEBコンサルタントを1/3以下ほどの金額で依頼するほうが金銭面で有利。</p></div>
                            <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>他業種の知見や同業種の経験を活かすことができる。</p></div>
                            <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>WEBの知識全般（ディレクション、デザイン、コーディング、マーケティング）を持つため、個々で担当者を雇うより効率がいい。</p></div>
                            <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>ホームページやLPの制作依頼をするときに、WEBデザイナーに頼むより事業概要やターゲットを深く理解しているコンサルタントに依頼したほうが、意図を汲んで制作するため楽。</p></div>
                            <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>比較的安価なホームページ制作会社の場合、制作意図や背景に深く入り込まない（ヒアリングのための時間捻出が予算的に難しい）ため、期待以上のものになりにくいが、WEBコンサルタントであれば制作した後の分析・改善まで対応しているため効果が現れやすい。</p></div>
                            <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>平均アクセス数、コンバージョン率を上げるためPDCAを回す試みは一制作会社は普通対応していない。</p></div>
                        </div>
                        <div className={style.subContentImg}><img src={about02} alt="javascript"/></div>
                    </div> 
                    
                </div>

                <div className={style.subContentWrap}>
                    <div className={style.subContentTitle}>Value</div>
                    
                    <div className={style.subContentGrid}>
                        <div className={`${style.gridA} ${style.subContentTxt}`}>
                            <h2>安心と期待を与え続ける。</h2>
                        </div>
                        <div className={`${style.gridB} ${style.subContentTxt}`}>
                            <p>
                            あなたに安心してもらうため、誠実さと思いやりを大切にします。<br/>
                            当事者意識を持ち、不安を解消してあげる存在になれるよう努力します。<br/>
                            あなたに期待してもらうため、さらに一歩先の提案をします。<br/>
                            専門的な知識を活かし、曖昧な目標を定量化し効率的なアプローチ方法で達成を目指します。<br/><br/>

                            事業の成長や売上、ブランド認知の向上の前に、まずあなたの気持ちを理解し寄り添います。<br/>
                            対面したままでは二人三脚で歩みを進めることができないので、横に並ばせてください。<br/>
                            バーカウンターを横並びで座り、熱く夢を語り合える友達のように。<br/>
                            命をあずけあい過酷な山頂を目指す、信頼できるバディのように。<br/>
                            </p>  
                        </div>
                        <div className={style.subContentImg}><img src={about03} alt="javascript"/></div>
                    </div> 
                </div>

                <div className={style.subContentWrap}>
                    <div className={style.subContentTitle}>Profile</div>
                    <div className={style.subContentGridAbout}>
                        <div className={style.subContentImg}><img src={aboutImg} alt="javascript"/></div>
                        <div className={style.subContentTxt}>
                            <h3>経歴</h3>
                            <ul>
                                <li>埼玉県立浦和北高等学校</li>
                                <li>アメリカNY州 Rockland Community College<span>2年制短期大学</span></li>
                                <li>アメリカNY州 NewYork Bussiness Institute<span>1年制コンピュータ専門学校</span></li>
                                <li>2010年〜2011年　HEARTS Inc.<span>映像・音響機器のレンタル、販売、オペレーション、イベント・コンベンション等の映像プロデュース</span></li>
                                <li>2011年〜2016年 　FOURDIGIT Inc.<span>サービス開発・組織開発・DX支援、システム・アプリケーション・デジタルツール開発、リサーチ・UXデザイン・UIデザイン・フロントエンド開発、Webサイト構築・設計・開発・解析、デジタルマーケティング・コンテンツ制作・運用支援、その他付随するデジタルデザイン業務</span></li>
                                <li>2016年〜 　個人事業主開業<span>アプリケーション・デジタルツール開発、Webサイト構築・設計・開発・解析、動画編集、紙媒体（チラシ）デザイン</span></li>
                                <li>2019年8月〜 　東京から山梨へ移住</li>
                                <li>2023年7月〜 　一般社団法人甲府青年会議所入会</li>
                                <li>2023年8月〜 　焼き菓子屋「totemo store」OPEN</li>
                                <li>2023年9月 　Zero Mountain Design（本サイト）公開</li>
                            </ul>  
                        </div>
                        <div className={style.subContentTxt}>
                            <h3>スキル</h3>
                            <ul>
                                <li>○フロントエンド全般<span>HTML/CSS/JS/JAMstackアーキテクチャ/ヘッドレスCMS/Wordpress</span></li>
                                <li>○デザインツール全般<span>Photoshop/Illustrator/InDesign/XD/Figma</span></li>
                                <li>○Adobe 動画編集ツール<span>AfterEffects/Premiere</span></li>
                            </ul>  
                        </div>
                        
                    </div> 
                </div>



                    

                
                

                
                

                

                
            </div>
            
        </Layout>
    )
}

export default Index

