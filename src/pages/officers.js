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
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <p>副委員長<br/><span>萩原　亮</span></p>
                        </div>

                    </div>
                </div>
                
                

                
                

                

                <ContactArea/>
            </div>
            
        </Layout>
    )
}

export default Officers

