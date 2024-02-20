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

import fujiIcon from "../images/fuji.svg"
import fujiIcon2 from "../images/fuji_white.svg"  
import image01 from "../images/mock2.png"  

import checkIcon from "../images/check.svg"  



import * as style from "../styles/feature.module.scss"  

const Feature = (props) => {
    const singleBlog = [];
    return (
        <Layout>
            <Seo title="ZMD｜サービスの特徴" description="サービスの特徴" />
            
            <div className={style.subHdr}>
                <div className={style.subHdrInner}>    
                    <h1 className={style.subTitle}><img src={fujiIcon2} alt="javascript"/><span>SERVICES</span>サービスと料金</h1>
                </div>
            </div>
            
            <div className={style.contentWrap}>
              <div className={style.subContentWrap}>
                  <div className={style.subContentGrid}>
                      <div className={style.subContentTxt}>
                          <div className={style.subContentTitle}>WEBサイトやSNSに悩まれている企業様・ご担当者様に</div>
                          <h2>WEBマーケティング担当として<br/>まるっとご支援します。</h2>
                          <p>
                          WEBに関わる全てを対応。<br/>
                          1社1社に合わせた最適な施策実行で、<br/>
                          ビジネス・売上拡大をサポートいたします。
                          </p>  
                      </div>
                      <div className={style.subContentImg}><img src={image01} alt="javascript"/></div>
                  </div> 
              </div>  

              <div className={style.centerContent}>
                  <div className={style.title}><div className={style.fukidasi}>このようなお悩みをお持ちの方へ</div></div>
                  <div className={style.txt}>
                      <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>ホームページはあるが<span>効果がいまいちわからない</span></p></div>
                      <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>社内でWEB担当者を抱えているが<span>少しでも人件費を抑えたい</span></p></div>
                      <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p><span>日々の業務に追われて</span>WEBが疎かになっている</p></div>
                      <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>WEB広告の<span>費用対効果を見直したい</span></p></div>
                      <div className={style.subContentList}><p className={style.listImage}><img src={checkIcon} alt="javascript" width={30}/></p><p>SNSで毎日投稿してるけど<span>フォロワーが増えない</span></p></div>
                  </div>
              </div>

              <div className={style.priceWrap} id="priceWrap">
                <div className={style.subTitle}><img src={fujiIcon} alt="javascript" width={100}/><span>PRICE</span></div>
                <div className={style.priceInner}>
                    <div className={style.box} style={{background: '#ecf4e9'}}>
                        <div className={style.title}>
                            <p>月額費をなるべく抑えたい</p>
                            <span>Free</span><br/>プラン
                            
                        </div>
                        <div className={`${style.price} ${style.underline}`}><span>¥</span>0<span>/月</span></div>
                        <div className={style.disc}>個別制作費</div> 
                        <ul>
                            <li><span className={style.priceListTxt}>WEBサイト作成</span><span className={style.priceListNumber}>¥200,000~</span></li>
                        </ul> 
                        <div className={style.balloon}><span>こんな人におすすめ</span></div>
                        <div className={style.txt}>コーポレートサイトなど、ホームページを制作する目的が信頼度向上や窓口としての役割の場合、更新頻度は比較的少ないです。本番公開後に画像差し替えや文言修正をしたい場合、別途費用（¥5,000/1時間）が発生しますが<span className={style.underline}>月額運用更新費用は無料</span>なので予算を抑えることができます。</div>
                    </div>
                    <div className={style.box} style={{background: '#b9ddb0'}}>
                        <div className={style.title}>
                            <p>社内WEB担当者の代わりに</p>
                            <span>Standard</span><br/>プラン
                            
                        </div>
                        <div className={`${style.price} ${style.underline}`}><span>¥</span>30,000-<span>/月</span></div>
                        <div className={style.disc}>個別制作費</div> 
                        <ul>
                            <li><span className={style.priceListTxt}>WEBサイト作成</span><span className={style.priceListNumber}>¥100,000~</span></li>
                        </ul> 
                        <div className={style.balloon}><span>こんな人におすすめ</span></div>
                        <div className={style.txt}>毎月更新が発生するようなホームページの場合、Standardプランが最適です。<span className={style.underline}>社内でWEB担当者を抱えずに人件費を削減することが可能です。</span>
                        毎月1度はブログを更新したいけど時間がない方、代行で執筆・投稿いたします（1記事/月）。その他更新作業が2人日分含まれますので、お気軽にホームページを最新に保つことができます。</div>
                    </div>
                    
                </div>
                <div className={style.ctaBtnSub}>他にも動画編集・写真撮影のお見積や<br/>自分に合うプランのご相談など承ります。</div>
                <div className={style.ctaBtn}><Link to="/contact">お問い合わせはこちら<span></span></Link></div>
                <div className={style.workflowWrap}>
                    <div className={style.subTitle}><img src={fujiIcon} alt="javascript" width={100}/><span>work flow</span></div>
                    <h3>ホームページを作成するときの手順</h3>

                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>01</div>
                        <div className={style.workflowTitle}>要件定義</div>
                        <div className={style.workflowContent}>ヒアリングシートにご記入いただき基本情報や背景、目的、参考にしたいWEBサイトなどを洗い出します。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>02</div>
                        <div className={style.workflowTitle}>打ち合わせ</div>
                        <div className={style.workflowContent}>ホームページに関係のない、好き嫌いや人生において重きを置くものなど様々な観点から依頼者を知ることで、より愛着のあるデザインを生みだすことができます。気取らず何でも話してください。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>03</div>
                        <div className={style.workflowTitle}>契約</div>
                        <div className={style.workflowContent}>打ち合わせ後数日以内にお見積書を作成いたします。ご確認していただき発注するかご検討ください。ご契約後制作スケジュールを作成・共有いたします。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>04</div>
                        <div className={style.workflowTitle}>構成案作成</div>
                        <div className={style.workflowContent}>デザインの前に構成案にてWEBサイトの内容を詰めていきます。どのページにどんな画像や文章を入れるか、要素の順番などを組み立てていきます。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>05</div>
                        <div className={style.workflowTitle}>素材のご提供</div>
                        <div className={style.workflowContent}>基本お客様に素材をご用意していただきます。画像素材に関して別料金にて撮影が可能です。また画像素材を代理で購入することも可能です。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>06</div>
                        <div className={style.workflowTitle}>デザイン</div>
                        <div className={style.workflowContent}>まずトップページのデザイン案を作成し、全体の方向性をご確認いただいた上で、その他詳細ページのデザインに入っていきます。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>07</div>
                        <div className={style.workflowTitle}>ご確認と修正</div>
                        <div className={style.workflowContent}>修正回数は３回までとさせていただきます。コーディング後は軽微な修正に限りますのでここでほぼ内容を確定します。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>08</div>
                        <div className={style.workflowTitle}>コーディング</div>
                        <div className={style.workflowContent}>デザインが確定次第、実装（コーディング）に着手します。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>09</div>
                        <div className={style.workflowTitle}>独自ドメインの取得</div>
                        <div className={style.workflowContent}>お客様にて取得された独自ドメインをお送りください。また独自ドメインをお持ちでない方は代理での取得が可能です。お気軽にご相談ください。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>10</div>
                        <div className={style.workflowTitle}>仮公開</div>
                        <div className={style.workflowContent}>テスト環境にて、様々な閲覧環境の方に問題なく表示されるか検証します。</div> 
                    </div>
                    </motion.div>
                    <motion.div variants={{ offscreen: { y: 50, opacity: 0, }, onscreen: { y: 0, opacity: 1, transition: { duration: 1, delay:.2, type:"spring" },},}} initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0 }}>
                    <div className={style.workflow}>
                        <div className={style.workflowNumber}>11</div>
                        <div className={style.workflowTitle}>ご確認と修正</div>
                        <div className={style.workflowContent}>ここでは軽微な修正（文字の修正や画像差し替え等）に限ります。</div> 
                    </div>
                    </motion.div>
                    <div className={style.flowLast}>WEBサイト公開&#127881;</div>
                </div>

                <div className={style.termWrap}>
                  <div className={style.termInner}>
                    <h3>制作上の条件・制限事項</h3>
                    <ol>
                      <li>ロゴ／写真素材は原則ご用意お願いいたします。別料金にて写真・動画撮影が可能です。ロゴ・イラストについてはご要望や雰囲気にマッチしそうなグラフィックデザイナーやイラストレーターの方のご紹介もさせていただきます。</li>
                      <li>制作期間について、大まかな目安としては1ヶ月程度ですが、Webサイトに必要な機能や新規コンテンツ作成の有無などによって、制作期間は大きく変動します。詳細なスケジュールについては、初回ヒアリング時にご要望をお聞きした上で、どのくらい制作期間がかかるかを算出してお知らせいたします。<span>お急ぎの場合は特急料金込みでお見積りさせていただきます。</span></li>
                      <li>打ち合わせに関して、無料でお伺いいたしますが、山梨県外の場合や富士吉田市、韮崎市より北側の場合は交通費が別途かかります。費用についてはお問い合わせ時にご相談させていただきます。</li>
                    </ol>
                  </div>
                </div>
                
              </div>
            </div>
            
        </Layout>
    )
}

export default Feature

// export const query = graphql`
//   query ContentfulBlogQuery {
//     allContentfulBlog(sort: {fields: date, order: DESC}) {
//       edges {
//         node {
//           title
//           slug
//           id
//           excerpt
//           date(formatString: "YYYY-MM-DD")
//           image {
//             gatsbyImageData(placeholder: BLURRED, quality: 90, formats: AUTO)
//           }
//           metadata {
//             tags {
//               id
//               contentful_id
//             }
//           }
//         }
//       }
//     }
//   }
  
// `