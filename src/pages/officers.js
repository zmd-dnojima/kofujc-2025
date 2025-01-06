import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/officers.module.scss"  
import ContactArea from "../components/contactArea"



const Officers = (props) => {

    return (
        <Layout>
            <Seo title="役員紹介" description="一般社団法人甲府青年会議所 2025年度 | 役員紹介" />
            <div className={style.main}>
                <div className={style.subHeader}>
                    <p>理事役員紹介</p>
                </div>
                <div className={style.contentWrap}>
                    
                    <div className={style.grid}>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hagihararyo.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>理事長<br/><span>萩原　亮</span></div>
                            <div className={style.btnArea}><Link to="/policy">理事長所信</Link></div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_higashihara.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>直前理事長<br/><span>東原 広幸</span></div>
                            <div className={style.greetingArea}>2025年度は萩原理事長の掲げるスローガンを達成するために直前理事長としてサポートしてまいります。「Here we go」というスローガンには「さぁ、いこう」「みんなでやろう」という気迫を前面に押し出した熱い想いがあります。みんなで前を向いている以上、組織の背中をしっかりと支えていくのが私の使命だと思っています。理事役員はもちろん、全会員がスローガン達成に注力できるように組織環境を俯瞰で捉え、厳しくもあり優しい心をもって甲府青年会議所の活動を見守ります。2025年度もよろしくお願いいたします。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_misawa.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>監事（外部）<br/><span>三澤 眞人</span></div>
                            <div className={style.greetingArea}>平素より甲府青年会議所の活動に多大なるご理解とご支援を賜り厚く御礼申し上げます。73年間の長きにわたり地域からの期待や負託にこたえ続けてきた甲府青年会議所の実績や信用を存分に活かし、社会や地域の課題に真摯に向き合い、萩原理事長の掲げるスローガンのもと、希望をもたらす変革の起点として地域の皆様とともに手を取り合い運動展開してまいります。また、2022年に甲府青年会議所を卒業し外部から見てきた経験を活かし、外部監事として常に俯瞰的な視点で組織を監査させていただきたいと思います。一年間どうぞよろしくお願いいたします。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_ono.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>監事<br/><span>小野 貴斎</span></div>
                            <div className={style.greetingArea}>2025年度は監事として財務室で培った経験を活かし、組織の財務面をしっかりと精査して参ります。また、自らの経験や知識を伝え、より良い青年会議所活動を行えるように支えて参ります。青年会議所活動に全力で邁進し、組織の成長と地域貢献に尽力して参ります。一年間、どうぞよろしくお願い申し上げます。</div>
                        </div>
                        <div className={style.brpc}></div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_hirose.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>副理事長<br/><span>廣瀬 明彦</span></div>
                            <div className={style.btnArea}><Link to="/vice-policy#hirose">副理事長所信</Link></div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_natori.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>副理事長<br/><span>名執 太貴</span></div>
                            <div className={style.btnArea}><Link to="/vice-policy#natori">副理事長所信</Link></div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_ishimizu.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>専務理事<br/><span>石水 秀樹</span></div>
                            <div className={style.btnArea}><Link to="/vice-policy#ishimizu">専務理事所信</Link></div>
                        </div>
                        <div className={style.brpc}></div>
                        <div className={style.brpc}></div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_saito.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>総合計画検証会議 議長<br/><span>齋藤 惠太</span></div>
                            <div className={style.greetingArea}>甲府青年会議所は、単年度制を特徴とする組織でありながらも、1967年から今日に至るまで過去13回にわたって時代に合わせた中長期計画を策定し、それらに則り事業展開を進めてきました。2025年度も各例会や事業が「総合計画2021」の目指す指針に対して取り組んでいるか検証し、改善案を掲示していくことで、各事業が道をそれることのないように後押ししていきます。「明るい豊かな社会」の実現のため一年間活動してまいります。どうぞよろしくお願いします。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_yatake.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>バリューアップ会議 議長<br/><span>矢竹 みゆき</span></div>
                            <div className={style.greetingArea}>バリューアップ会議では、各室長たちと各議案の審査を行う会議を開催し、甲府青年会議所の事業・例会が地域の方、会員にとって意義あるものとなるよう、議論を重ねていきます。信頼と事業価値を向上させることで、甲府青年会議所の価値を高められるよう、1年間活動していきます。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_fushimi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>諸事対応特別委員会 特別委員長<br/><span>伏見 彩</span></div>
                            <div className={style.greetingArea}>諸事対応特別委員会では、本年度、自然災害があった場合などの対応のほか、地域のさまざまな団体と連携して、地域のニーズにこたえてまいりたいと思います。とくに本年度は、山の都ふれあいコンサートが45回目を迎えます。会員一同楽しみながら、節目のコンサートを盛り上げていければと思います。</div>
                        </div>
                        <div className={style.brpc}></div>
                        <div className={style.brpc}></div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_higuchi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>山の都未来創造室 室長<br/><span>樋口 千岳</span></div>
                            <div className={style.greetingArea}>これまでの経験を活かし、室長という重責を全うします。「山の都エナジーアップ委員会」と「こどもの夢実現委員会」という甲府青年会議所の花形両委員会を担当することは大きなプレッシャーですが、副理事長と委員長の橋渡し役として調和を図りながら、地域にとって最も良い影響を与えられるよう取り組んでまいります。常に理念を基盤に置き、地域の未来を見据えた活動を進めたいと思います。
                            </div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_kobayashi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>組織力向上室 室長<br/><span>小林 広美</span></div>
                            <div className={style.greetingArea}>組織力向上室では、会員拡大委員会と広報ブランディング委員会の2つの委員会を擁し、組織の存在感を高め、価値の向上に努めてまいりたいと思います。会員拡大委員会では、多くの同志を増やしていくことで、組織の活性化を図り、広報ブランディング委員会では的確かつ戦略的に情報発信を行い地域から愛されるべく組織作りを行ってまいります。この両委員会を昇華させ、組織を向上させてまいります。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_shirasu.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>財務室 室長<br/><span>白須 良平</span></div>
                            <div className={style.greetingArea}>これまで甲府青年会議所が地域に対して継続的な活動をすることができたのは、一人一人の会費やシニア会員をはじめとする関係者のご協力があるからです。財務室として、皆さまからお預かりした資金を厳正かつ適正に管理し、甲府青年会議所が発展していけるよう財務運営をしてまいります。また総務渉外委員会では、多くの会員が渉外事業にかかわり多様な視点を学ぶことで組織の発展に寄与してまいります。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_tsuruta.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>総務室 室長<br/><span>鶴田 雄大</span></div>
                            <div className={style.greetingArea}>総務室は各種会議の運営や調整をはじめ、各会議体•委員会の年間•個別事業の計画書•報告書の精査と成果の検証を行います。1年間、より良い青年会議所活動ができるよう総務渉外委員会を管轄し、組織運営の屋台骨として支えてまいります。</div>
                        </div>
                        <div className={style.brpc}></div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_koike.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>山の都エナジーアップ委員会 委員長<br/><span>小池 知矢</span></div>
                            <div className={style.greetingArea}>私たち山の都エナジーアップ委員会は、人口減少を大きなテーマに地域貢献活動を展開していきます。少子化や高齢化が進み、さらに若者の県外流出が顕著となっています。山の都の発展を牽引するリーダーである私たちが、率先して若者を巻き込んだ地域作りに取り組むべきだと考えます。若者と一緒に、山の都の魅力と課題を多様な視点で見つめ、価値を高め合うことで山の都の躍進につなげられるように一年間頑張ってまいります。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_koshiishi.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>子どもの夢実現委員会 委員長<br/><span>輿石 あやか</span></div>
                            <div className={style.greetingArea}>熱中する体験を通じて、子どもたちが自分の可能性に気づき、将来の夢を描けるような場を地域と共に創れるよう努力してまいります。さまざまな経験から学び、本気で挑戦する心を育むことで、未来を切り拓く青少年を育成します。将来の山の都を担っていく子どもたちの夢が実現する地域社会を目指して頑張ります！
                            </div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_yanagisawa.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>会員拡大委員会 委員長<br/><span>柳澤 隆広</span></div>
                            <div className={style.greetingArea}>組織を永続・発展させていくためには会員数の純増が必要不可欠です。会員拡大委員会では本年度、地域に眠る志を同じくする同志を一人でも多く発掘し組織を活性化させていきます。これを達成するために、地域の方々、特に20代後半から30代前半の若手の方々に、甲府青年会議所の魅力をしっかりと伝えるとともに、各委員会との連携協力を通して会員拡大活動に努めてまいります。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_takano.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>広報ブランディング委員会 委員長<br/><span>高野 真紀</span></div>
                            <div className={style.greetingArea}>広報ブランディング委員会は、甲府青年会議所がより愛される団体となるため日々の活動を伝えていきます。SNS発信を中心に幅広い層にアプローチし、存在感やブランド力の向上に努め、活気あふれるコミュニティづくりを目指します。甲府青年会議所の魅力を多くの方に実感していただけるよう、1年間頑張ってまいります。</div>
                        </div>
                        <div className={style.image}>
                            <StaticImage src="../images/m_yamada.jpg" alt="main" placeholder="blurred" quality ={90}  />
                            <div className={style.name}>総務渉外委員会 委員長<br/><span>山田 安人</span></div>
                            <div className={style.greetingArea}>2025年度は、これまで青年会議所総務委員会が培ってきた、正確かつ円滑な総務運営に、先端技術を試験的に取り入れ、甲府青年会議所の活動を加速させ、前に進める地盤づくりに挑戦します。また、日本、関東地区、山梨ブロック主幹の渉外事業への参加を促進し、会員が積極的に知見を得るお手伝いをいたします。一年間宜しくお願い申し上げます。</div>
                        </div>
                        

                    </div>
                </div>
                
                

                
                

                

                <ContactArea/>
            </div>
            
        </Layout>
    )
}

export default Officers

