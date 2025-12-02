import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/graduate.module.scss"  
import ContactArea from "../components/contactArea"

import slogan from '../images/slogan.svg'

//bootstrap
//import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,  } from "@fortawesome/free-solid-svg-icons"

const Joinus = (props) => {

    return (
        <Layout>
            <Seo title="卒業生特設ページ" description="一般社団法人甲府青年会議所 2025年度 | 卒業生特設ページ" />
            <div className={style.main}>
                <div className={style.subHeader}>
                    <p>卒業生特設ページ</p>
                </div>

                
                <div className={style.contentWrap}>
                    <div className={style.gridWrap}>
                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/watanabe.jpg" alt="ariizumi" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>渡邊　さやか兄<br/><span>2024年入会</span></p>
                                <a href="https://drive.google.com/file/d/10cPu35CIdjXTcrAw19j_yHJ6UQVSlSep/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/iino.jpg" alt="ariizumi" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>飯野　公介兄<br/><span>2024年入会</span></p>
                                <a href="https://drive.google.com/file/d/1XcE5oUKPGOmxQjYewe2HjM-ZkPuhzq_K/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/ariizumi.jpg" alt="ariizumi" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>有泉　恵介兄<br/><span>2022年入会</span></p>
                                <a href="https://drive.google.com/file/d/1wTV5xRI1HzyQfDVBeQk0kvF8HiKmzwV4/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/man1.jpg" alt="ariizumi" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>倪資　明兄<br/><span>2022年入会</span></p>
                                <a href="https://drive.google.com/file/d/1BV_tTHxN94xMR66luW61nJCMy3dX-Ji5/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/haibara.jpg" alt="haibara" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>埴原　美紗子兄<br/><span>2022年入会</span></p>
                                <a href="https://drive.google.com/file/d/120b7wRQdViMLIPjASlqxPPAsetHg9r1t/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/shibagaki.jpg" alt="shibagaki" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>芝垣　祐哉兄<br/><span>2022年入会</span></p>
                                <a href="https://drive.google.com/file/d/1yt2a1xbs96yjM3N372rn3oUbjeW3MPk6/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/hayashi.jpg" alt="hayashi" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>林　弘成兄<br/><span>2020年入会</span></p>
                                <a href="https://drive.google.com/file/d/1DzPF2WYBiKQ-o9Y1MaO2sopDnMcUAfeq/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/onuma.jpg" alt="onuma" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>大沼　栄太兄<br/><span>2021年入会</span></p>
                                <a href="https://drive.google.com/file/d/1KXCVNAVYxQtAlmsz-XWqIFkv7o-DfhR8/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/takehara.jpg" alt="takehara" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>武原　勇太兄<br/><span>2016年入会</span></p>
                                <a href="https://drive.google.com/file/d/121CnyJZ7FcTeZ-ZJhzn-gzvHVCl6_ToA/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/saitou.jpg" alt="saitou" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>齋藤　恵太兄<br/><span>2018年入会</span></p>
                                <a href="https://drive.google.com/file/d/1fITP8iv0d2S3HC2ZKGmh6TO_wvx3m9Ko/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/ishimizu.jpg" alt="ishimizu" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>石水　秀樹兄<br/><span>2015年入会</span></p>
                                <a href="https://drive.google.com/file/d/1lZi3ubSsiPYE91sE0a0t4hHzJOqPVvCP/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        <div className={style.gridItem}>
                            <StaticImage src="../images/graduate/hagihara.jpg" alt="hagihara" placeholder="blurred" quality ={90}  />
                            <div className={style.grid2}>
                                <p className={style.txt}>萩原　亮兄<br/><span>2016年入会</span></p>
                                <a href="https://drive.google.com/file/d/1FNgJ6a_UA2jCj4KcOEmGuhxiwSh79VOK/view" target="_blank"><p className={style.gBtn}><FontAwesomeIcon icon={faChevronRight}/></p></a>
                            </div>
                        </div>

                        
                        
                    </div>
                    

            </div>
            
                
               
              
        </div>
                

            
            
        </Layout>
    )
}

export default Joinus

