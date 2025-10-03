import * as React from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

// import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Keyboard, FreeMode, EffectCards, Thumbs } from 'swiper'
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
// import 'swiper/css/bundle'
// import "swiper/swiper.min.css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import "swiper/css/free-mode"

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,  } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from "../components/loader"
import SwiperLoop from "../components/swiperloop"

import * as style from "../styles/index.module.scss"  
import ContactArea from "../components/contactArea"

import slogan from '../images/slogan.svg'

//microcmsの日時ずれを解消
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const Index = (props) => {

    const singleBlog = [];
    const singleBlog_banner = [];
    const search = useLocation().search;
    const query3 = queryString.parse(search);

    return (
        
        <Layout>
            
            <Seo title="一般社団法人甲府青年会議所 2025年度 - Here We Go! ～その一歩で君が変わる、まちが変わる～" description="一般社団法人甲府青年会議所 2025年度 | ホーム" />
            {/* <Loader /> */}
            <div className={style.main}>


                <div className={style.mainVisual}>
                
                    <div className={style.mainImg}>
                        <div className={style.imgInner}><StaticImage src="../images/mainvisual.png" alt="main" placeholder="blurred" quality ={90}  /></div>
                        <div className={style.slogan}><img src={slogan} alt="javascript"/></div>
                    </div>
                </div>

                {/* <div className={style.bannerArea}>
                    <div className={style.blogArea}>
                        <Link to="/kidsfes"><StaticImage src="../images/bnr_kidsfes.png" alt="main" placeholder="blurred" quality ={90}  /></Link>
                        <Link to="/kenketsu"><StaticImage src="../images/bnr_kenketsu.png" alt="main" placeholder="blurred" quality ={90}  /></Link>
                    </div>
                    
                    
                </div> */}

                <div className={style.news}><div className={style.contentWrap}>
                    <div className={style.newsTitle}>
                        <div className={style.subtitle}><span>NEWS</span><br/>新着情報｜活動報告</div>
                        <div className={style.morebutton}><Link to="/past/1">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                    </div>
                    
                    <div className={style.gridArea}>
                        <div className={style.blogArea}>
                            {/* tagをworks、記事数を4つに絞る */}
                            {(() => {
                                const allBlog = [];
                                const showBlogNum = 4;
                                var blogAddNum = 0;

                                console.log(props.data)
                                
                                for(var i in props.data.allMicrocmsArticles.edges){
                                    
                                    allBlog.push(props.data.allMicrocmsArticles.edges[i])
                                    
                                    if(allBlog[i].node.category[0].tag != "banner" && allBlog[i].node.category[0].tag != "page" ) {
                                        blogAddNum +=1
                                        if(blogAddNum > showBlogNum){
                                            break
                                        }
                                        singleBlog.push(allBlog[i])
                                    }
                                }
                            })()}             
                            {
                                singleBlog.map((novel, index) =>(
                                    <Link to={novel.node.articlesId} key={index}>
                                        <div className={style.blogCard}>                            
                                            
                                            <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div></div>
                                            <div className={style.blogTags}>{novel.node.category[0].name}</div>  
                                            <div className={style.blogTitle}>{novel.node.title}</div>
                                            {/* <div className={style.blogDate}><FontAwesomeIcon icon={faClock}/> {`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div> */}
                                            <div className={style.blogDate}><FontAwesomeIcon icon={faClock}/> {`${dayjs(novel.node.eventDate).tz().format("YYYY/MM/DD")}`}</div>
                                            
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                    
                </div></div>

                <div className={style.rijicho}>
                    <div className={style.contentWrap}>
                            <div className={style.inner}>
                                {/* <div className={style.slogan}><img src={slogan} alt="javascript" /></div> */}
                                <div>
                                    {/* <p>世界、そして日本を取り巻く社会情勢は日々、目まぐるしく変化し、混沌とした予想のできない時代に突入しました。変動性、不確実性、複雑性、曖昧性の頭文字を取った「VUCA 時代」とも呼ばれています。他国間での戦争、未知のウイルスの蔓延、経済の低迷による格差の拡大、異常気象や地震による自然災害、テロリズムへの恐怖など挙げれば切りがないほどの不安や混乱の中で生きています。一方で先が予測され、何年も前から警笛を鳴らされてきた問題もあります。その一つが人口減少問題です。日本の人口は 2008 年をピークに減少に転じ、人口の推移を長期的に予測すると 2008 年に約 1 億 2000 万人をピークに迎えた人口が 2048 年には 1 億人を割り込み、2060 年には 8674 万人まで減少すると見込まれます。これは、日本の歴史を振り返っても類を見ない水準の人口減少です。安定した雇用の創出や移住・定住の促進、出生率の向上などの施策は示されていますが、現状、歯止めには至っていません。</p>
                                    <p>これは我々の住み暮らす山の都でも大きな影響を与えており、人口減少・少子高齢化により様々な問題が生じています。行政サービスの縮小、空き家・空き店舗の増加、地域公共交通の縮小・撤退、地域コミュニティの機能低下、企業の担い手不足による地域産業の衰退など、人口減少・少子高齢化を原因とする様々な問題が複合的に関係し、地域の活力を低下させています。このままではこの地域やここに住む人々は未来に明るい選択肢を持つことは困難でしょう。私たちは、この不安定な世の中の先を読み、新しいアイデアやイノベーションを生み出す若者を育成し、彼らが応援する社会を創造しなければなりません。子どもたちが夢に向かい行動し、地域を盛り上げようと志す若者が集えば、地域の活力の増強につながり、地域はこのままだといずれやってきてしまう「選択肢のない未来」ではなく、若者や多様な人材が溢れ、子どもたちが夢に向かって行動する新しい価値が創造された「選択できる未来」を歩むことができるでしょう。</p> */}
                                    <p>人は皆それぞれに、「何かを変えたい」「より良くしたい」という想いを持っています。自らの発信力と、実現ぜずにはいられない想いから生まれる熱い情熱は心に留めておくだけでは何も始まりません。「さぁやろう!」「一緒にやろう!」「やってみよう!」という情熱を持ったリーダーの踏み出す一歩がなければなりません。「合理的か否か」、「損か得か」、そのような思考回路を捨てて自ら問題に飛び込み、地域のために、誰かのために、果敢に挑む一歩です。その一歩はいつの時代も人の心を動かし、社会を変えます。これこそ青年会議所が担う役割ではないでしょうか。「情熱」と「想像力」と「思いやり」を持った甲府青年会議所は、同じ志を持つ多くの仲間という武器を携えて、地域の問題解決や活性化のために一歩を踏み出します。</p>
                                    </div>
                                <div className={style.rijichoName}>一般社団法人甲府⻘年会議所<br/>第74代理事長 萩原 亮</div>
                                <div className={style.btn}><Link to="/policy">理事長所信</Link></div>
                            </div>
                    </div>
                </div>

                <div className={style.aboutus}><div className={style.contentWrap}>
                    <div className={style.subtitle}><span>ABOUT US</span><br/>一般社団法人甲府青年会議所とは</div>
                    
                    <div className={`${style.aboutusBtns} ${style.brsp}`}>
                        <div className={style.aBtn}>
                            <Link to="/officers">
                                <StaticImage src="../images/a1_sp.jpg" alt="理事役員紹介" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>理事役員紹介</span>2025年度の活動を担う、20名の理事役員を紹介します。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/sougoukeikaku2021">
                                <StaticImage src="../images/a2_sp.jpg" alt="総合計画2021" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>総合計画2021</span>中長期計画である総合計画2021は、2025年度に4年目を迎えます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/history">
                                <StaticImage src="../images/a3_sp.jpg" alt="これまでの活動" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>これまでの活動</span>2024年以前のホームページをご覧いただけます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/senior">
                                <StaticImage src="../images/a4_sp.jpg" alt="シニアクラブ" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>シニアクラブ</span>甲府青年会議所シニアクラブの情報はこちら</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                    </div>

                    <div className={`${style.aboutusBtns} ${style.brpc}`}>
                        <div className={style.aBtn}>
                            <Link to="/officers">
                                <StaticImage src="../images/a1.jpg" alt="理事役員紹介" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>理事役員紹介</span>2025年度の活動を担う、20名の理事役員を紹介します。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/sougoukeikaku2021">
                                <StaticImage src="../images/a2.jpg" alt="総合計画2021" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>総合計画2021</span>中長期計画である総合計画2021は、2025年度に4年目を迎えます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/history">
                                <StaticImage src="../images/a3.jpg" alt="これまでの活動" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>これまでの活動</span>2024年以前のホームページをご覧いただけます。</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                        <div className={style.aBtn}>
                            <Link to="/senior">
                                <StaticImage src="../images/a4.jpg" alt="シニアクラブ" placeholder="blurred" quality ={90} layout="fullWidth" />
                                <div className={style.aBtnTxt}><span>シニアクラブ</span>甲府青年会議所シニアクラブの情報はこちら</div>
                                <div className={style.aBtnArrow}><FontAwesomeIcon icon={faChevronRight}/></div>
                            </Link>
                        </div>
                    </div>
                    
                </div></div>

                <ContactArea/>

                {/* <div className={style.cardWrap}>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner1.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner2.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner3.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner4.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/banner5.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                </div> */}

                <SwiperLoop />

            </div>{/* </main> */}
        </Layout>
    )
}

export default Index


export const query = graphql` 
    query MyQuery {
        allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
        edges {
            node {
                articlesId
                title
                body
                eventDate
                category {
                    name
                    tag
                }
                mainImage {
                    url
                }
                
            }
        }
        }
    }
  `  