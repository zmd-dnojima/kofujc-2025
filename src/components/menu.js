import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import * as Scroll from 'react-scroll'
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"


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
            <ul>
              <li><Link to="/">ホーム</Link></li>
              <li>(一社)甲府青年会議所とは</li>
              <li className={style.subMenu}><Link to="/policy">理事長所信</Link></li>
              <li className={style.subMenu}><Link to="/vice-policy">副理事長・専務理事所信</Link></li>
              <li className={style.subMenu}><Link to="/officers">理事役員紹介</Link></li>
              <li className={style.subMenu}><Link to="/sougoukeikaku2021">総合計画2021</Link></li>
              <li className={style.subMenu}><Link to="/history">これまでの活動</Link></li>
              <li><Link to="/">新着情報</Link></li>
              <li className={style.subMenu}><Link to="/">今後の例会事業</Link></li>
              <li className={style.subMenu}><Link to="/">過去の例会事業</Link></li>
              <li className={style.subMenu}><Link to="/">理事長所感</Link></li>
              <li><Link to="/joinus">入会案内</Link></li>
              <li><Link to="/senior">シニアクラブ</Link></li>
              <li><Link to="/contact">アクセス・お問い合わせ</Link></li>
              <li><Link to="/privacypolicy">プライバシーポリシー</Link></li>
              <li><Link to="/socialmediapolicy">ソーシャルメディアポリシー</Link></li>
           </ul>
         </div> 
       </menu>
    )
}

export default Menu