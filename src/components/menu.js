import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import * as Scroll from 'react-scroll'
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"
import logo from '../images/logo_white_2.svg'


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
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/articles">お知らせ</Link></li>
              <li><Link to="/aboutus">会社案内</Link></li>
              <li><Link to="/feature">柳川芳鉄工所の強み</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
           </ul>
         </div> 
       </menu>
    )
}

export default Menu