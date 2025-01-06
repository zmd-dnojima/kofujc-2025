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
              <li><span>(一社)甲府青年会議所とは</span></li>
              <li className={style.subMenu}><Link to="/policy">理事長所信</Link></li>
              <li className={style.subMenu}><Link to="/vice-policy">副理事長・専務理事所信</Link></li>
              <li className={style.subMenu}><Link to="/officers">理事役員紹介</Link></li>
              <li className={style.subMenu}><Link to="/sougoukeikaku2021">総合計画2021</Link></li>
              <li className={style.subMenu}><Link to="/history">これまでの活動</Link></li>
              <li><span>(一社)新着情報</span></li>
              <li className={style.subMenu}><Link to="/news/1" onClick={classToggle}  className={style.off}>今後の例会事業</Link></li>
              <li className={style.subMenu}><Link to="/past/1" onClick={classToggle} >過去の例会事業</Link></li>
              <li className={style.subMenu}><Link to="/syokan/1" onClick={classToggle}>理事長所感</Link></li>
              <li><Link to="/joinus">入会案内</Link></li>
              <li><Link to="/senior">シニアクラブ</Link></li>
              <li><Link to="/contact">アクセス・お問い合わせ</Link></li>
              <li><Link to="/privacypolicy">プライバシーポリシー</Link></li>
              <li><Link to="/socialmediapolicy">ソーシャルメディアポリシー</Link></li>
              <li><a href="https://drive.google.com/file/d/1trmTn_ztmXB-9B2aEI5B2cy79z69yuGi/view" target="_blank">組織図</a></li>
              <li><Link to="/regulations">定款・諸規則</Link></li>
              <li><a href="https://www.jaycee.or.jp/" target="_blank">公益社団法人日本青年会議所</a></li>
              <li><a href="https://www.jaycee.or.jp/kanto" target="_blank">関東地区協議会<br/>公益社団法人日本青年会議所</a></li>
              <li><a href="https://www.jaycee.or.jp/kanto/yamanashi" target="_blank">山梨ブロック協議会<br/>公益社団法人日本青年会議所</a></li>
           </ul>
         </div> 
       </menu>
    )
}

export default Menu