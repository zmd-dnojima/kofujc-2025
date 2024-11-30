import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"
import logo from '../images/jcilogo.svg'

//bootstrap dropdown
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faEnvelope,faPhone,faLock } from "@fortawesome/free-solid-svg-icons"
import { color } from 'framer-motion'


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

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  

  return (

    <header className={style.headerWrapper}>
       <div className={`${style.container} ${(show ? style.active : '')}`}>
        
        <div className={style.contentInner}>
          <div className={style.logo}><Link to="/"><img src={logo} alt="javascript" /></Link></div>
          <ul>
            <li>
            <Dropdown
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onToggle={() => setIsClicked(!isClicked)}
              show={isClicked || isHovered}
            >
            <Dropdown.Toggle 
              variant="flat"
              id="dropdown-basic"
              className={style.dpParentBtn}
            >
              （一社）甲府青年会議所とは
            </Dropdown.Toggle>
            <Dropdown.Menu className={style.dpMenu}>
              <Dropdown.Item ><Link to="/policy">理事長所信</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/vice-policy">副理事長・専務理事所信</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/officers">理事役員紹介</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/sougoukeikaku2021">総合計画2021</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/history">これまでの活動</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            </li>
            <li><Link to="/articles" className={`${(location.pathname == "/articles/" ? style.selected : '')}`}>新着情報</Link></li>
            <li><Link to="/joinus" className={`${(location.pathname == "/joinus/" ? style.selected : '')}`}>入会案内</Link></li>
            <li><Link to="/senior" className={`${(location.pathname == "/senior/" ? style.selected : '')}`}>シニアクラブ</Link></li>
            <li className={style.ctaBtn}><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}><span><FontAwesomeIcon icon={faEnvelope}/></span>お問い合わせ</Link></li>
            <li className={style.memberBtn}><Link to="https://member.kofujc.com/?password-protected=login&redirect_to=https%3A%2F%2Fmember.kofujc.com%2F" target="_blank"><span><FontAwesomeIcon icon={faLock}/></span>会員ページ</Link></li>
          </ul>
        </div>
      </div>

      
    </header>
    
  );
}

export default Header