import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import * as Scroll from 'react-scroll'
//import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"
import logo from '../images/logo2.svg'
import mailIcon from "../images/mail.svg"

const Header = () => {

  const location = useLocation()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  

  const showBelow = 200
  var showNum = 0
  const [show, setScroll] = useState(true)
  const handleScroll = () => {
    // if (window.pageYOffset > showBelow) {
    //   if (!show) setScroll(true)
    // } else {
    //   if (show) setScroll(false)
    // }
     
    if(showNum != 0){
      if (document.documentElement.scrollTop < showNum) {
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    

    
    showNum = document.documentElement.scrollTop;
  }
  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  })

  

  

  return (
    <header className={style.headerWrapper}>
       <div className={`${style.container} ${(show ? style.active : '')}`}>
        
        <div className={style.contentInner}>
          <div className={style.logo}><Link to="/"><img src={logo} alt="javascript" /></Link></div>
          <ul>
          
            
            <li><Link to="/feature" className={`${(location.pathname == "/feature/" ? style.selected : '')}`}>サービスと料金</Link></li>
            <li><Link to="/works" className={`${(location.pathname == "/works/" ? style.selected : '')}`}>制作事例</Link></li>
            <li><Link to="/blog/?tag=all" className={`${(location.pathname == "/blog/" ? style.selected : '')}`}>ブログ記事</Link></li>
            <li><Link to="/about" className={`${(location.pathname == "/about/" ? style.selected : '')}`}>ZMDとは？</Link></li>
            <li className={style.ctaBtn}><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}>お問い合わせ<span></span></Link></li>
            {/* <li className={style.ctaButton02}><Link to="/contact"><img src={mailIcon} alt="javascript" width={14}/>無料相談はこちら</Link></li> */}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header