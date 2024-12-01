import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/joinus.module.scss"  
import ContactArea from "../components/contactArea"

import slogan from '../images/slogan.svg'

//bootstrap
//import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Joinus = (props) => {

    return (
        <Layout>
            <Seo title="入会案内" description="一般社団法人甲府青年会議所 2025年度 | 入会案内" />
            <div className={style.main}>
                <div className={style.subHeader}>
                    <p>2025年度<br className={style.brsp}/>入会募集しております</p>
                </div>
                <div className={style.historyArea}>
                <div className={style.contentWrap}>
                    <div className={style.historyBody}>
                        <div className={style.historyTitle}>青年会議所とは</div>
                        <p>青年会議所の事を略して「JC (ジェーシー)」と呼ぶことがあります。これは「Junior Chamber (若者向けの会議室)」の略です。</p>
                        <p>1949年、明るい豊かな社会の実現を理想とし、責任感と情熱をもった青年有志による東京青年商工会議所 (商工会議所法制定にともない青年会議所と改名) 設立から、日本の青年会議所 (JC) 運動は始まりました。</p>
                        <p>共に向上し合い、社会に貢献しようという理念のもとに各地に次々と青年会議所が誕生。1951年には全国的運営の総合調整機関として日本青年会議所 (日本JC) が設けられました。</p>
                        <p>現在、全国に青年会議所があり、三つの信条のもと、よりよい社会づくりをめざし、ボランティアや行政改革等の社会的課題に積極的に取り組んでいます。
                        さらには、国際青年会議所 (JCI: Junior Chamber International) のメンバーとして各国の青年会議所と連携し、世界を舞台として、さまざまな活動を展開しています。</p>
                        
                        <div className={style.historyTitle}>甲府青年会議所とは</div>
                        <p>甲府青年会議所は１９５１年、１７名の青年が集い、東京青年会議所のスポンサーの元で日本で１３番目の青年会議所として誕生しました。甲府市・甲斐市・中央市・昭和町を活動エリアとして、現在も県内の若手経済人で構成されたメンバーが地域のために日々活動をしています。</p>
                    </div>
                    <div className={style.historyImg}><StaticImage src="../images/history_1.jpg" alt="history_1" placeholder="blurred" quality ={90}  /></div>
                </div>
                </div>

                <div className={style.activity}>
                <div className={style.contentWrap}>
                    <div className={style.historyTitle}>主な年間活動</div>
                    <div className={style.gridWrap}>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/history_2.jpg" alt="history_2" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>公開献血</div>
                                <p>甲府青年会議所では献血の重要性と海津若松青年会議所への感謝の思いを込めて、翌年から献血事業をスタートし、１９６６年から現在まで続けている事業の一つとなっています。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/history_3.jpg" alt="history_3" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>山の都親子ふれあい写生大会</div>
                                <p>１９７７年、「陽気の良くなった季節に、野外で家族一緒にキャンパスに向かい絵を描き、仲良く昼食をとりながら楽しくコミュニケーションをはぐくんでほしい」という思いからから始まった事業「親と子の集い」を起源とし、親とこどもがふれあえることを目指し、毎年５月にふれあい写生大会を開催しています。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/history_4.jpg" alt="history_4" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>湖衣姫コンテスト</div>
                                <p>武田信玄公の側室であり、武田勝頼の生母である湖衣姫（諏訪御料人）になぞらえ、１８歳以上の女性を対象とした信玄公祭り前夜祭として開催されるコンテストです。
                                <br/>グランプリ１名、準グランプリ２名は翌日の「甲州軍団出陣」にて「湖衣姫隊」として出陣し、その年の1 年間、山梨県の観光大使として活動していただくことが通例となっています。２００２年に甲府青年会議所が発案し、現在も主催しています。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/history_5.jpg" alt="history_5" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ヴァンフォーレ甲府・山梨クィーンビーズフェイスペイント</div>
                                <p>ヴァンフォーレ甲府と山梨クィーンビーズのホームゲームにて無料でフェイスペイントをおこなっています。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/history_6.jpg" alt="history_6" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>山の都ふれあいコンサート</div>
                                <p>１９８１年の「国際障害者年」をきっかけに、障害者と健常者の枠を越えた多くの仲間たちが、コンサートやミュージカルを通じて、より深く大きな“ふれあい”の輪を広げ、互いに交流することを目的としてコンサートとミュージカルを開催しています。１９８１年の第１回から甲府青年会議所が関わってきました。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/history_7.jpg" alt="history_7" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>郷育フォーラム</div>
                                <p>大人は子どもを思いやり、子どもに地域の伝統や文化、そして本来あるべき親の姿を継承して行ける故郷（ふるさと）になることを目指し、子どもばかりか我々大人一人ひとりが自ら学び、地域を育むため、甲府市、中央市、甲斐市、昭和町とともに「きょういくの日」制定事業としておこなわれています。甲府青年会議所が２００７年に作り上げた事業です。</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className={style.graduate}>
                <div className={style.contentWrap}>
                    <div className={style.historyTitle}>現役会員・卒業生の声</div>
                    <div className={style.gridWrap}>
                        <div className={style.gridItem}>
                            <div className={style.image}>
                                <StaticImage src="../images/history_8.png" alt="history_8" placeholder="blurred" quality ={90}  />
                                </div>
                            <div className={style.txt}>
                                <div className={style.intro}>2020年入会<br/>株式会社セイビドー<br/>取締役社長​ 輿石 あやか</div>
                                <p>仕事も家庭も青年会議所も周りの理解なくして行動できないので、できるだけ日々の活動について家族に話すようにしています。会社では青年会議所で今どんなことを行っていてどんなものが得られたか、家庭では毎日その日の出来事を主人と話しています。青年会議所でも娘の面倒を見る日は配慮していただいています。そのような周りの理解と配慮に感謝の気持ちを忘れず活動するようにしています。</p>
                                
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}>
                                <StaticImage src="../images/history_9.png" alt="history_9" placeholder="blurred" quality ={90}  />
                                </div>
                            <div className={style.txt}>
                                <div className={style.intro}>2021年入会<br/>丸十山梨製パン株式会社<br/>代表取締役社長 ​梅本 学</div>
                                <p>組織での立場とあり方を１から学べることと他業種の方々と交流できることです。自分の会社ではトップとして働いていますが、青年会議所では一会員からスタートするので初心に戻って色々考えさせられることがあります。また、青年会議所では普段学は接しない他業種の方、違う立場・環境の方と交流できるので、違った考え方やモノの見方などを学べると思います。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}>
                                <StaticImage src="../images/history_10.png" alt="history_10" placeholder="blurred" quality ={90}  />
                                </div>
                            <div className={style.txt}>
                                <div className={style.intro}>2020年卒業 活動歴7年<br/>株式会社文祥堂オフィスファシリティーズ<br/>代表取締役 ​細田 和宏</div>
                                <p>多くの仲間と、今の自分を得たと思っています。仮に青年会議所をせずに過ごしたとしても、仲間は増えたでしょうし、7年前の自分から全く成長しないことはないでしょうが、青年会議所での濃く深い体験や経験を通じて築き上げられた関係性やスキルは、入会しなかった自分より遥かに多くのものを得られたという実感があります。</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className={style.merit}>
                <div className={style.contentWrap}>
                    <div className={style.historyTitle}>入会のメリット<span>甲府青年会議所で得られる４つの機会</span></div>
                    <div className={style.gridWrap}>
                        <div className={style.gridItem}>
                            <div className={style.st}><span>MERIT. 1</span><br/>自己成長の機会</div>
                            <div className={style.image}><StaticImage src="../images/history_11.jpg" alt="history_11" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>    
                                <p>次世代の地域・社会で活躍するリーダーになるために必要な能力を身につけることができます。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                        <div className={style.st}><span>MERIT. 2</span><br/>まちづくりの機会</div>
                            <div className={style.image}><StaticImage src="../images/history_12.jpg" alt="history_12" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <p>自分達が暮らす地域のことを考え、よりよい地域にするための活動をすることができます。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                        <div className={style.st}><span>MERIT. 3</span><br/>国際交流の機会</div>
                            <div className={style.image}><StaticImage src="../images/history_13.jpg" alt="history_13" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <p>自分達が暮らす地域だけでなく、日本全国、世界各国の志あるメンバーと交流することができます。</p>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                        <div className={style.st}><span>MERIT. 4</span><br/>ビジネスの機会</div>
                            <div className={style.image}><StaticImage src="../images/history_14.jpg" alt="history_14" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <p>多くのメンバーと知り合うことでネットワークを拡大し、新しいビジネスの機会を得ることができます。</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>

                <div className={style.listArea}>
                <div className={style.contentWrap}>
                    <div className={style.historyBody}>
                        <div className={style.historyTitle}>JCを経験した有名人一覧</div>
                        <div className={style.cyomei}>
                        <p>〇コフィー・アナン（ガーナ）<span>第7代国連事務総長</span></p>
                        <p>〇ジャック・シラク（フランス）<span>フランス第5代大統領</span></p>
                        <p>〇ビル・ゲイツ（アメリカ）<span>マイクロソフト創業者</span></p>
                        <p>〇ビル・クリントン（アメリカ）<span>アメリカ合衆国第42代大統領</span></p>
                        <p>〇麻生　太郎<span>第92代内閣総理大臣</span></p>
                        <p>〇小泉　純一郎<span>第87,88,89代内閣総理大臣</span></p>
                        <p>〇森　喜朗<span>第85,86代内閣総理大臣</span></p>
                        <p>〇千　玄室<span>裏千家今日庵第15代家元</span></p>
                        <p>〇牛尾　治朗<span>ウシオ電機会長</span></p>
                        <p>〇服部　禮次郎<span>セイコー名誉会長</span></p>
                        </div>
                        <div className={style.historyTitle}>現役会員企業一覧</div>
                        <p>メットライフ生命保険株式会社　河野造園　株式会社きものあさ川
                        有限会社敷島緑化土木　ペットケアサービスクー　株式会社マイナビ山梨支社
                        株式会社吉穂工業　有限会社上野油店　野口アルミ箔加工紙株式会社
                        丸十山梨製パン株式会社　㈲日篆堂　YKKAP株式会社
                        株式会社保険のアルフィー　株式会社丸亀商店　小野法律事務所
                        ミルインターナショナル　DiningBar俺の街わっpei　株式会社シップス
                        ㈱小野屋仏壇店　株式会社峡南堂印刷所　㈲CreamLandAgent
                        ㈱Touch-Up　医療法人正寿会　有限会社アート企画　株式会社セイビドー
                        ㈱輿石木工　SJC協同組合　JUNEI興業　芝垣工務所
                        ジェーエスケイ株式会社　Zettom,inc.　山梨遺品整理センター株式会社
                        株式会社アスロック　株式会社坂本建運　株式会社クレール　大陸商事株式会社
                        株式会社オズプリンティング　セコム山梨株式会社　清水設備　白須測量調査事務所
                        Y-MAKER.com　株式会社VivitBase　株式会社樋口　鶴田電機株式会社
                        株式会社橋本工業　あおば法律事務所　AWARDS PRO　アトリエ　ワタリ
                        株式会社中部　株式会社ハギ・ボー　㈲ハギハラ工房　㈱橋本工業
                        社会福祉法人富士桜学園　株式会社大丸金属　株式会社クリア　有限会社菱和産商
                        株式会社ネオスペース　㈲日幸インテリアデザイン事務所　
                        社会福祉法人明和福祉会和泉愛児園　㈱マリアージュ
                        マニュライフ生命保険株式会社　住友生命保険相互会社　千里
                        株式会社INTERESTING INNOVATION　土橋法律特許事務所　山梨高宝株式会社
                        東京セキスイハイム株式会社　ケイカーズコミュニケーションズ㈱　Quiaime
                        山下興業　タウン不動産株式会社　株式会社永田工業所　club noble
                        有限会社中部石油販売　株式会社柳川芳鉄工所　株式会社甲府建材商会
                        株式会社アイディーホーム　有泉工業株式会社　日本放送協会甲府放送局
                        株式会社スギタ建工　有限会社レユスィール　株式会社甲斐延　埴原法律事務所
                        一般社団法人山梨ダルク本部　株式会社寿楽　冠明商事株式会社</p>
                    </div>
                </div>
                </div>
                
                <div className={style.flowArea}>
                <div className={style.contentWrap}>
                    <div className={style.historyBody}>
                        <div className={style.historyTitle}>入会要項</div>
                        <div className={style.summery}>
                            <div>入会基準</div>
                            <div>甲府市及びその近隣町村に居住または勤務する満20歳以上満40歳未満の方。<br/>青年会議所活動の理念に賛同でき、積極的に参加しようとする強い意志と情熱を持っていること。<br/>品格良識を持った青年男女であること。</div>
                            <div>入会金・年会費</div>
                            <div>入会金：30,000円<br/>年会費：初年度は入会月による。2年目以降は120,000円。</div>
                            <div>募集日程</div>
                            <div>随時募集しております。</div>
                        </div>
                        
                        <div className={style.historyTitle}>Q&A</div>
                        <div className={style.inner}>
                        <Accordion>
                            <Accordion.Item  className={style.item_faq} eventKey="0">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>どうしてJCと呼ぶのですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>青年会議所の英訳が「J u n i o r C h a m b e r 」である為、この頭文字をとって、青年会議所をJ C と呼んでいます</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="1">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>青年会議所の特徴はどのような所ですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>青年会議所を他の団体から区別する最大の特徴は年齢制限にあります。年齢が20歳から40歳までであり、何よりも「品格のある青年」でなければなりません。また、役員・組織・事業等の「単年度制」であることが特徴です。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="2">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>経営者ではないですが入会できますか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>入会可能です。近年の会員構成は会社経営者（自営業含む）及びそれに準ずる方が約６割、会社員が約４割となっています。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        </Accordion>
                        </div>
                    </div>
                </div>
                </div>

                <div className={style.ctaBtn}>
                    <p className={style.arrowBox}>ご入会のお問い合わせはこちら</p>
                    <Link to="/contact"><span><FontAwesomeIcon icon={faEnvelope}/></span>お問い合わせ</Link>
                    </div>

                

            </div>
            
        </Layout>
    )
}

export default Joinus

