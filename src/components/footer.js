import * as React from "react"
import { Link } from "gatsby"
import instagram from "../images/instagram.svg"
import * as style from "../styles/common.module.scss"
import logo from '../images/logo2.svg'
import ftrImg from '../images/ftr.svg'
import contactImg from "../images/contactImg.jpg"

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>

            <div className={style.contactWrap}>    
                <div className={style.contactInner}>    
                    <div className={style.txt}>とりあえず、きいてみる</div>
                    <div className={style.ctaBtn}><Link to="/contact">無料相談はこちら<span></span></Link></div>
                </div>
            </div>
            <div className={style.insideContainer}>
                <div>
                    <div className={style.logoSub}>山梨県のローカルビジネスに特化した<br/>WEBコンサルティングパートナー</div>
                    <div className={style.logo}><Link to="/"><img src={logo} alt="javascript"/></Link></div>
                </div>
                
                <ul>
                    <li><Link to="/feature"> - サービスと料金</Link></li>
                    <li><Link to="/works"> - 制作事例</Link></li>
                    <li><Link to="/blog/?tag=all"> - ブログ記事</Link></li>
                    <li><Link to="/about"> - ZMDとは？</Link></li>
                </ul>
            </div> 
            <div className={style.copyright}>©{new Date().getFullYear()} Zero Mountain Design. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer