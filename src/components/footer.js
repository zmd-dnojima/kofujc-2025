import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faChevronRight,faMinus } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>

            <div className={style.footerInner}>
                <div className={style.infoT}>
                    <div className={style.logoTitle}>一般社団法人甲府青年会議所</div>
                    <div>〒400-0858<br/>山梨県甲府市相生2-2-17<br/>甲府商工会議所3F</div>
                    <div>TEL : 055-235-5423<br/>FAX : 055-226-9596<br/>受付時間 : 平日10:00～15:00</div>
                </div>
                <div className={style.gnavi}>
                    <ul>
                        <li className={style.mainT}><span><FontAwesomeIcon icon={faChevronDown}/></span> 甲府青年会議所とは</li>
                        <li><Link to="/policy"><span><FontAwesomeIcon icon={faMinus}/></span> 理事長所信</Link></li>
                        <li><Link to="/vice-policy"><span><FontAwesomeIcon icon={faMinus}/></span> 副理事長・専務理事所信</Link></li>
                        <li><Link to="/officers"><span><FontAwesomeIcon icon={faMinus}/></span> 理事役員紹介</Link></li>
                        <li><Link to="/sougoukeikaku2021"><span><FontAwesomeIcon icon={faMinus}/></span> 総合計画2021</Link></li>
                        <li><Link to="/history"><span><FontAwesomeIcon icon={faMinus}/></span> これまでの活動</Link></li>
                    </ul>
                    <ul>
                        <li className={style.mainT}><span><FontAwesomeIcon icon={faChevronDown}/></span> 新着情報</li>
                        <li><Link to="/news/1"><span><FontAwesomeIcon icon={faMinus}/></span> 今後の例会・事業</Link></li>
                        <li><Link to="/past/1"><span><FontAwesomeIcon icon={faMinus}/></span> 過去の例会・事業</Link></li>
                        <li><Link to="/syokan/1"><span><FontAwesomeIcon icon={faMinus}/></span> 理事長所感</Link></li>
                        <li className={style.mainT}><Link to="/joinus"><span><FontAwesomeIcon icon={faChevronRight}/></span> 入会案内</Link></li>
                        <li className={style.mainT}><Link to="/senior"><span><FontAwesomeIcon icon={faChevronRight}/></span> シニアクラブ</Link></li>
                    </ul>
                    <ul>
                        <li className={style.mainT}><Link to="/contact"><span><FontAwesomeIcon icon={faChevronRight}/></span> アクセス・お問い合わせ</Link></li>
                        <li className={style.mainT}><Link to="/privacypolicy"><span><FontAwesomeIcon icon={faChevronRight}/></span> プライバシーポリシー</Link></li>
                        <li className={style.mainT}><Link to="/socialmediapolicy"><span><FontAwesomeIcon icon={faChevronRight}/></span> ソーシャルメディアポリシー</Link></li>
                        <li className={style.mainT}><a href="https://drive.google.com/file/d/1trmTn_ztmXB-9B2aEI5B2cy79z69yuGi/view" target="_blank"><span><FontAwesomeIcon icon={faChevronRight}/></span> 組織図</a></li>
                        <li className={style.mainT}><Link to="/regulations"><span><FontAwesomeIcon icon={faChevronRight}/></span> 定款・諸規則</Link></li>
                        <li className={style.mainT}><a href="https://drive.google.com/file/d/1dAFqwRLlcJyakIRP-kJQNNeKnhs4j9_U/view" target="_blank"><span><FontAwesomeIcon icon={faChevronRight}/></span> 財務諸表</a></li>
                        <li className={style.mainT}><a href="https://www.jaycee.or.jp/" target="_blank"><span><FontAwesomeIcon icon={faChevronRight}/></span> 公益社団法人日本青年会議所</a></li>
                        <li className={style.mainT}><a href="https://www.jaycee.or.jp/kanto" target="_blank"><span><FontAwesomeIcon icon={faChevronRight}/></span> 関東地区協議会<br/>　公益社団法人日本青年会議所</a></li>
                        <li className={style.mainT}><a href="https://www.jaycee.or.jp/kanto/yamanashi" target="_blank"><span><FontAwesomeIcon icon={faChevronRight}/></span> 山梨ブロック協議会<br/>　公益社団法人日本青年会議所</a></li>
                    </ul>
                </div>
            </div> 
            <div className={style.copyright}>©{new Date().getFullYear()} 一般社団法人甲府青年会議所 All Rights Reserved.</div>
        </footer>
    )
}

export default Footer