import * as React from "react"
import { Link } from "gatsby"
import * as style from "../styles/common.module.scss"
import logo from '../images/logo_white.svg'

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>

            <div className={style.footerInner}>
                <div>
                    <div className={style.logo}><Link to="/"><img src={logo} alt="javascript" /></Link></div>
                    <div>山梨県中巨摩郡昭和町築地新居1683<br/>
                        TEL：055-275-5141<br/>
                        FAX：055-275-5143
                    </div>
                </div>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/articles">お知らせ</Link></li>
                    <li><Link to="/aboutus">会社案内</Link></li>
                    <li><Link to="/feature">柳川芳鉄工所の強み</Link></li>
                    <li><Link to="/contact">お問い合わせ</Link></li>
                </ul>
            </div> 
            <div className={style.copyright}>©{new Date().getFullYear()} Yanagawa Yoshi Iron Works. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer