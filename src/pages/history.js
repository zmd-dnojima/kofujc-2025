import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/history.module.scss"  
import ContactArea from "../components/contactArea"



const History = (props) => {

    return (
        <Layout>
            <Seo title="これまでの活動" description="一般社団法人甲府青年会議所 2025年度 | これまでの活動" />
            <div className={style.main}>
                <div className={style.subHeader}>
                    <p>これまでの活動</p>
                </div>
                <div className={style.contentWrap}>
                    
                    <div className={style.grid}>
                    <div className={style.image}>
                            <p>2024年度</p>
                            <StaticImage src="../images/m2024.jpg" alt="2024年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2024.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2023年度</p>
                            <StaticImage src="../images/m2023.jpg" alt="2023年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2023.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2022年度</p>
                            <StaticImage src="../images/m2022.jpg" alt="2022年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2022.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2021年度</p>
                            <StaticImage src="../images/m2021.jpg" alt="2021年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2021.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2020年度</p>
                            <StaticImage src="../images/m2020.jpg" alt="2020年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2020.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2019年度</p>
                            <StaticImage src="../images/m2019.jpg" alt="2019年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2019.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2018年度</p>
                            <StaticImage src="../images/m2018.jpg" alt="2018年度" placeholder="blurred" quality ={90}  />
                            <Link to="https://2018.kofujc.com/" target="_blank">公式サイトへ</Link>
                        </div>
                        <div className={style.image}>
                            <p>2017年度</p>
                            <StaticImage src="../images/m2017.jpg" alt="2017年度" placeholder="blurred" quality ={90}  />
                        </div>
                        <div className={style.image}>
                            <p>2016年度</p>
                            <StaticImage src="../images/m2016.jpg" alt="2016年度" placeholder="blurred" quality ={90}  />
                        </div>
                        <div className={style.image}>
                            <p>2015年度</p>
                            <StaticImage src="../images/m2015.jpg" alt="2015年度" placeholder="blurred" quality ={90}  />
                        </div>

                    </div>
                </div>
                
                

                
                

                

                <ContactArea/>
            </div>
            
        </Layout>
    )
}

export default History

