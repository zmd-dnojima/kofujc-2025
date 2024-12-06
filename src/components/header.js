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
import { faChevronRight,faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope,faUser } from "@fortawesome/free-regular-svg-icons"
import { color } from 'framer-motion'


const Header = () => {

  const location = useLocation()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const showBelow = 200
  var showNum = 0
  const [show, setScroll] = useState(true)
  const handleScroll = () => {
    showNum = document.documentElement.scrollTop;
  }
  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  })

  const [isHovered1, setIsHovered1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  

  return (

    <header className={style.headerWrapper}>
       {/* <div className={`${style.container} ${(show ? style.active : '')}`}> */}
       <div className={`${style.container} ${style.active}`}>
        
        <div className={style.innerPc}>
          <div className={style.logo}><Link to="/"><img src={logo} alt="javascript" /></Link></div>
          <ul>
            <li>
            <Dropdown
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              onToggle={() => setIsClicked1(!isClicked1)}
              show={isClicked1 || isHovered1}
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
            <li>
            <Dropdown
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onToggle={() => setIsClicked2(!isClicked2)}
              show={isClicked2 || isHovered2}
            >
            <Dropdown.Toggle 
              variant="flat"
              id="dropdown-basic"
              className={style.dpParentBtn}
            >
              新着情報
            </Dropdown.Toggle>
            <Dropdown.Menu className={style.dpMenu2}>
              <Dropdown.Item ><Link to="/news/1">今後の例会・事業</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/past/1">過去の例会・事業</Link></Dropdown.Item>
              <Dropdown.Item ><Link to="/syokan/1">理事長所感</Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </li>
            <li><Link to="/joinus" className={`${(location.pathname == "/joinus/" ? style.selected : '')}`}>入会案内</Link></li>
            <li><Link to="/senior" className={`${(location.pathname == "/senior/" ? style.selected : '')}`}>シニアクラブ</Link></li>
          </ul>
          <div className={style.ctaWrap}>
          <div className={style.ctaBtn}><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}><FontAwesomeIcon icon={faEnvelope}/><span>お問い合わせ</span></Link></div>
          <div className={style.memberBtn}><a href="https://member.kofujc.com/?password-protected=login&redirect_to=https%3A%2F%2Fmember.kofujc.com%2F" target="_blank"><FontAwesomeIcon icon={faUser}/><span>会員ページ</span></a></div>
          </div>
          
        </div>{/* <PC版> */}

        <div className={style.innerSp}>
          <div className={style.logo}><Link to="/"><img src={logo} alt="javascript" /></Link></div>
          <div className={style.ctaWrap}>
            <div className={style.ctaBtn}><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}><FontAwesomeIcon icon={faEnvelope}/></Link></div>
            <div className={style.memberBtn}><a href="https://member.kofujc.com/?password-protected=login&redirect_to=https%3A%2F%2Fmember.kofujc.com%2F" target="_blank"><FontAwesomeIcon icon={faUser}/></a></div>
          </div>
          
        </div>{/* <SP版> */}
      </div>

      
    </header>
    
  );
}

export default Header