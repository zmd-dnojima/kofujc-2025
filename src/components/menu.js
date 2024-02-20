import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import * as Scroll from 'react-scroll'
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"
import logo from '../images/logo_white.svg'
import mailIcon from "../images/mail.svg"


const Menu = () => {

    const location = useLocation()
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    const [active, setActive] = useState(false)
    const classToggle = () => {
      setActive(!active)
    }
    
    return (
        
        <menu className={style.menuWrapper}>

          <button onClick={classToggle} className={`${style.menuBtn} ${(active ? style.active : '')}`}></button>

          <div className={`${style.menuInner} ${(active ? style.menuShow : '')}`}>
          <Link to="/"><div className={style.logo}><img src={logo} alt="javascript" /></div></Link>
            <ul>
              <li><Link to="/feature" className={`${(location.pathname == "/feature/" ? style.selected : '')}`}>Services&Price<span>サービスと料金</span></Link></li>
              <li><Link to="/works" className={`${(location.pathname == "/works/" ? style.selected : '')}`}>Works<span>制作事例</span></Link></li>
              <li><Link to="/blog/?tag=all" className={`${(location.pathname == "/blog/" ? style.selected : '')}`}>Articles<span>ブログ</span></Link></li>
              <li><Link to="/about" className={`${(location.pathname == "/about/" ? style.selected : '')}`}>About<span>ZMDについて</span></Link></li>
              <li><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}>Contact<span>お問い合わせ</span></Link></li>
           </ul>
         </div> 
       </menu>
    )
}

export default Menu