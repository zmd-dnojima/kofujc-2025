import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/officers.module.scss"  
import ContactArea from "../components/contactArea"



const Officers = (props) => {

    return (
        <Layout>
            <Seo title="役員紹介" description="一般社団法人甲府青年会議所 2025年度 | 役員紹介" />
            <div className={style.main}>
                <div className={style.subHeader}>
                    <p>副委員長・専務理事所信</p>
                </div>
                <div className={style.contentWrap}>
                    
                    <div className={style.grid}>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>理事長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_higashihara.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>直前理事長<br/><span>東原 広幸</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_misawa.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>監事（外部）<br/><span>三澤 眞人</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_ono.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>監事<br/><span>小野 貴斎</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hirose.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副理事長<br/><span>廣瀬 明彦</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_natori.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副理事長<br/><span>名執 太貴</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_ishimizu.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>専務理事<br/><span>石水 秀樹</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_saito.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>総合計画検証会議 議長<br/><span>齋藤 惠太</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_yatake.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>バリューアップ会議 議長<br/><span>矢竹 みゆき</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_fushimi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>諸事対応特別委員会 特別委員長<br/><span>伏見 彩</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_higuchi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>山の都未来創造室 室長<br/><span>樋口 千岳</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_kobayashi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>組織力向上室 室長<br/><span>小林 広美</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_shirasu.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>財務室 室長<br/><span>白須 良平</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_tsuruta.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>総務室 室長<br/><span>鶴田 雄大</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_koike.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>山の都エナジーアップ委員会 委員長<br/><span>小池 知矢</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_koshiishi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>子どもの夢実現委員会 委員長<br/><span>輿石 あやか</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_yanagisawa.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>会員拡大委員会 委員長<br/><span>柳澤 隆広</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_takano.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>広報ブランディング委員会 委員長<br/><span>高野 真紀</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_yamada.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>総務渉外委員会 委員長<br/><span>山田 安人</span></p>
                        </div>
                        

                    </div>
                </div>
                
                

                
                

                

                <ContactArea/>
            </div>
            
        </Layout>
    )
}

export default Officers

