import * as React from "react"
import { Link, graphql } from "gatsby" 
import { useEffect, useRef, useState } from "react"
//import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Keyboard, FreeMode, EffectCards, Thumbs } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import AnimatedText from "../components/animatedText";

import Layout from "../components/layout"
import Seo from "../components/seo"

import ctaIcon from "../images/c-arrow.svg"
import fujiIcon from "../images/fuji.svg"
import peopleImg from "../images/man.svg"  
import mainImg from "../images/main-txt.png"  
import conceptImg from "../images/img-02.png"

import workIcon_01 from "../images/work-icon-01.svg"
import workIcon_02 from "../images/work-icon-02.svg"
import workIcon_03 from "../images/work-icon-03.svg"
import workIcon_04 from "../images/work-icon-04.svg"
import workIcon_05 from "../images/work-icon-05.svg"

import workImg_01 from "../images/work-img-01.jpg"
import workImg_02 from "../images/work-img-02.jpg"
import workImg_03 from "../images/work-img-03.jpg"
import workImg_04 from "../images/work-img-04.jpg"
import workImg_05 from "../images/work-img-05.jpg"


import * as style from "../styles/index.module.scss"  

const Index = (props) => {

    const singleColumnBlog = [];
    const swiper = useSwiper();

    const placeholderText1 = [
        { type: "heading1", text: "デザインとテクノロジーで" },
        { type: "heading2", text: "ローカルビジネスに活気を" }
    ];
    const placeholderText2 = [
        { type: "heading1", text: "安心と期待を提供する" }
    ];
    const animatedText = {
        visible: {
            transition: {
            staggerChildren: 0.025
            }
        }
    };

    //--------------
    //swiper
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    //--------------

    return (
        <Layout>
            <Seo title="Zero Mountain Design" description="山梨県のWEBサイト制作会社です" />
            
            <div className={style.mainVisual}>
            <div className={style.mainVisualFixed}>
                <div className={style.txt}>
                    <div className={style.txtInner}>
                        {/* <div className={style.balloon}><div className={style.balloonInr}>山梨県限定</div></div> */}
                        <h1><span className={style.underline} >デザインとテクノロジーで</span><br/>ローカルビジネスに活気を</h1>
                        
                    </div>
                </div>
                <div className={style.peopleImg}><img src={peopleImg} alt="javascript"/></div>
            </div>
            </div>

            
            <div className={style.conceptWrap}>
                <div className={style.conceptInner}>    
                    <div className={style.conceptImg}><img src={conceptImg} alt="javascript"/></div>
                    <div className={style.conceptTxt}>
                        <h2><span>やまなし</span> に合うWEB戦略</h2>
                        <div className={style.conceptTxtSub}><p>Zero Mountain Designは「山梨県の特性や県民性をふまえて戦略策定」した上で、ホームページやLPサイト、広告動画などを制作する、WEBコンサルティングパートナーです。<br/>オンラインの力で新規顧客、リピーター、認知度、信頼度を、業種や地域、ターゲットごとにアプローチを変え、獲得します。</p></div>
                    </div>
                </div>
            </div>

                
            <div className={style.blogWrap}>
            <div className={style.innerContent}>
                <div className={style.subContentTitle}>Articles</div>
                <div className={style.blogArea}>
                {/* tagをworks、記事数を3つに絞る */}
                {(() => {
                    const allBlog = [];
                    const showBlogNum = 2;
                    var blogAddNum = 0;
                    
                    for(var i in props.data.allMicrocmsArticles.edges){
                        
                        allBlog.push(props.data.allMicrocmsArticles.edges[i])
                        blogAddNum +=1
                        if(blogAddNum > showBlogNum){
                            break
                        }
                        singleColumnBlog.push(allBlog[i])
                    }
                })()}
                                    
                {
                    singleColumnBlog.map((novel, index) =>(
                        <Link to={novel.node.articlesId} key={index}>
                            <div className={style.blogCard}>                            
                                <div className={style.blogTags}>#{novel.node.category[0].name}</div>  
                                <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div></div>
                                <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div>
                                <h3>{novel.node.title}</h3>
                            </div>
                        </Link>
                    ))
                }
                <div className={style.moreButton}><Link to="/blog">view more</Link></div>
                </div>
            </div>    
            </div>
             

            <div className={style.worksArea}>
            <div className={style.innerContent}>
                <h2><span>職種別</span><br/>ホームページの役割</h2>
                <div className={style.subtitle}>ホームページの役割は業種によって様々です。ただ「とりあえずホームページを持ちたい」ではなく、なぜホームページが必要なのか理解した上で明確なゴールを定めましょう。</div>
                <div className={style.swiperThumb}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={false}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="thumbSwiper"
                        
                    >
                        <SwiperSlide><img src={workIcon_01} alt="javascript" width={50}/><span>HAIR SALON</span></SwiperSlide>
                        <SwiperSlide><img src={workIcon_02} alt="javascript" width={50}/><span>FARMER</span></SwiperSlide>
                        <SwiperSlide><img src={workIcon_03} alt="javascript" width={50}/><span>RESTAURANT</span></SwiperSlide>
                        <SwiperSlide><img src={workIcon_04} alt="javascript" width={50}/><span>CLINIC</span></SwiperSlide>
                        <SwiperSlide><img src={workIcon_05} alt="javascript" width={50}/><span>BUILDING CONTRACTOR</span></SwiperSlide>
                    </Swiper>
                </div>
                <div className={style.cardWrap}>
                <Swiper
                    slidesPerView={1.1} 
                    spaceBetween={26} 
                    initialSlide={2}
                    centeredSlides={true}
                    centerInsufficientSlides={true}
                    thumbs={{ swiper: thumbsSwiper}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    // navigation={{ clickable: true }}
                    style={{
                        '--swiper-navigation-color': '#42a651',
                        '--swiper-pagination-color': '#fff',
                    }}
                    
                >
                    <SwiperSlide>
                    <div className={style.worksCard}>
                        <div className={style.img}><div className={style.imgInner}><img src={workImg_01} alt="javascript"/></div></div>
                        <div className={style.icon}><img src={workIcon_01} alt="javascript" width={120}/></div>
                        <div className={style.title}><span>HAIR SALON</span>美容室・エステ</div>
                        <div className={style.txt}>美容院を選ぶ理由として「お店のホームページ」は全体の5.3%にとどまります<span className={style.txtSuper}>※</span>。
                        ポータルサイトや家族・友人からの紹介、家から近いからといった理由が多いようです。
                        <span className={style.green}>美容院のホームページの用途として、集客は効果が薄いです。</span>
                        ですがホットペッパービューティーなどポータルサイトでは十分に伝えきれないお店の雰囲気や想い、考え方などをホームページに載せることで、
                        「ここで働きたい」といった人材を確保したり、数ある競合他社と優位性を持つことができます。
                        また、ある程度リピーターが増え、新規顧客は口コミや紹介がメインの場合、予約自体はホームページに託し、<span className={style.green}>掲載費用のかかるポータルサイトから退会し、
                        予算を抑えることが可能です。</span><br/>
                        <span className={style.cap}>※美容院選びについての意識調査｜BWRITEより</span></div>
                        <div className={style.ctaBtn}><Link to="/contact">無料相談はこちら<span></span></Link></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className={style.worksCard}>
                        <div className={style.img}><div className={style.imgInner}><img src={workImg_02} alt="javascript"/></div></div>
                        <div className={style.icon}><img src={workIcon_02} alt="javascript" width={120}/></div>
                        <div className={style.title}><span>FARMER</span>農家</div>
                        <div className={style.txt}>ホームページを持つ農家さんは多くありません。<span className={style.green}>信用度や販路拡大を目的としても正直効果が薄いです。</span>農家さんの場合は、<span className={style.green}>ネット販売の活用</span>を勧めます。
                        フリマサイト（メリカリ・ラクマ・ヤフオクなど）とモール型サイト（Amazonや楽天など）にまず出店し、同時に自社ECサイトの開発を進めます。
                        自社ECサイト（BASE・STORESなど）は手数料が低く、出店料がかからないため、ある程度ファンがついてきたら割引をエサに自社ECサイトへファンを誘導する方法をとります。
                        <span className={style.green}>農協を通さず、日本中、世界中のひとに向けて野菜を売るシステムを構築します。</span>
                        </div>
                        <div className={style.ctaBtn}><Link to="/contact">無料相談はこちら<span></span></Link></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className={style.worksCard}>
                        <div className={style.img}><div className={style.imgInner}><img src={workImg_03} alt="javascript"/></div></div>
                        <div className={style.icon}><img src={workIcon_03} alt="javascript" width={120}/></div>
                        <div className={style.title}><span>RESTAURANT</span>飲食店</div>
                        <div className={style.txt}>飲食店は特にターゲット選定が重要です。「30代〜50代の女性」では不十分です。
                        ペルソナ（具体的な人物像）を一緒に考え、より詳細なターゲットを割り出します。
                        未婚か既婚か。学歴、職業、年収、最近の悩み、将来のビジョン、家族構成、趣味、性格、休日の過ごし方など。
                        競合他社や経営理念などを念頭に、<span className={style.green}>お店に来てほしい人物像に刺さるキャッチコピー作成や写真撮影をし、デザインします。</span>
                        また、ターゲットが明確になり、ホームページ以外でも集客や目的に応じてオンライン上でアプローチする方法を提案いたします。</div>
                        <div className={style.ctaBtn}><Link to="/contact">無料相談はこちら<span></span></Link></div>
                    </div>
                    
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className={style.worksCard}>
                        <div className={style.img}><div className={style.imgInner}><img src={workImg_04} alt="javascript"/></div></div>
                        <div className={style.icon}><img src={workIcon_04} alt="javascript" width={120}/></div>
                        <div className={style.title}><span>CLINIC</span>クリニック</div>
                        <div className={style.txt}>病院を選ぶ理由としてホームページは39.8%と他の業界より割合が多いです<span className={style.txtSuper}>※</span>。
                        しかし実際山梨に住むひとはどうでしょうか？知人の口コミやgoogleマップの評判を重視しませんか？
                        クリニックの場合、<span className={style.green}>まず不安感を与えないデザインとお客様ファーストで知りたい情報にすぐ手が届くようなUI設計を心がけます。</span>
                        身体が辛いときにホームページ上ですぐに営業時間、予約方法、アクセスがわからないのはイヤですよね。。
                        また<span className={style.green}>MEO</span>（Googleマップ上で検索上位にするための施策）に力を入れ、お客様の声にしっかり耳を傾けます。
                        <br/>
                        <span className={style.cap}>※病院選び・医者選びに関する調査｜メディケア生命保険株式会社より</span></div>
                        <div className={style.ctaBtn}><Link to="/contact">無料相談はこちら<span></span></Link></div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className={style.worksCard}>
                        <div className={style.img}><div className={style.imgInner}><img src={workImg_05} alt="javascript"/></div></div>
                        <div className={style.icon}><img src={workIcon_05} alt="javascript" width={120}/></div>
                        <div className={style.title}><span>BUILDING CONTRACTOR</span>工務店</div>
                        <div className={style.txt}>BtoBの多い工務店や鉄工所、外構業者の集客方法は紹介がメインとなります。<span className={style.green}>ただ紹介だとしても受注前にクライアントは競合他社と比較しているはずです。</span>価格、信頼度、納期までの工数、施工事例など。ホームページがあれば競合他社に差をつけることができます。口頭で説明する以上に、視覚的情報（画像とキャッチコピー）は頭に残り、判断材料として有効的です。
                        <span className={style.green}>また人材募集の用途としてホームページを持ちたいお客様も多いです。</span>テンプレでどれも同じような採用サイトよりも、それこそ頭に残るキャッチコピーやデザインの自社採用ページがあることで、有能な若い人材を確保する効率的な手段となります。</div>
                        <div className={style.ctaBtn}><Link to="/contact">無料相談はこちら<span></span></Link></div>
                    </div>
                    </SwiperSlide>
                    
                </Swiper>
                </div>
                
            </div>
            </div>
                

             


            <div className={style.faqWrap}>
            <div className={style.innerContent}>
                <h2><span></span>Q&A</h2>

                <div className={style.faqBlock}>
                    <div className={style.qIcon}>Q</div>
                    <h4 className={style.faqQ}>なんでWEBサイトって制作会社によって値段がピンキリなの？</h4>
                    <div className={style.faqA}>戦略策定やアフターフォローの有無や修正回数によって制作費は異なります。価格の安い制作会社はテンプレートを利用し、画像やコピーライティングはお客様に委ねることが多いです。逆に制作費が高ければ、手厚いフォローや事業計画書を読み解きターゲットに刺さるデザインをイチから作ることもあります。<br/>弊社はご予算に合わせて対応範囲を柔軟に調整することが可能です。気兼ねなくご相談ください。</div> 
                </div>
                <div className={style.faqBlock}>
                    <div className={style.qIcon}>Q</div>
                    <h4 className={style.faqQ}>契約するかどうかまだわからないですが、その前に当社に来てもらってお話することはできますか？</h4>
                    <div className={style.faqA}>可能です。無料でお伺いいたします。山梨県外の場合や富士吉田市、韮崎市より北側の場合は交通費が別途かかります。費用についてはお問い合わせ時にご回答いたします。</div> 
                </div>
                <div className={style.faqBlock}>
                    <div className={style.qIcon}>Q</div>
                    <h4 className={style.faqQ}>ドメイン、サーバも取得していただくことは可能でしょうか？</h4>
                    <div className={style.faqA}>基本、お客様に取得していただきます。WEBサイトに合うレンタルサーバーやドメインの取得方法はご教示させていただくのでご安心ください。また取得代行も可能です。代行費用は打ち合わせ時に共有いたします。</div> 
                </div>
                <div className={style.faqBlock}>
                    <div className={style.qIcon}>Q</div>
                    <h4 className={style.faqQ}>ドメインってなに？</h4>
                    <div className={style.faqA}>http://から始まるURL（ユーアールエル）の中で、たとえば、http://www.yahoo.co.jp であれば、「yahoo.co.jp」の部分をドメインと呼びます。ドメインは、ユニークなものになります。同じものは複数存在しません。<br/>
                    会社の信頼性とURLの短縮化、サーバーの乗り換え時に同じURLで移転可能、など独自ドメインには様々なメリットがあります。</div> 
                </div>
                <div className={style.faqBlock}>
                    <div className={style.qIcon}>Q</div>
                    <h4 className={style.faqQ}>ロゴやイラストもできますか？</h4>
                    <div className={style.faqA}>山梨県内のイラストレーター、ロゴデザイナーを外注し制作を委託します。</div> 
                </div>
                <div className={style.faqBlock}>
                    <div className={style.qIcon}>Q</div>
                    <h4 className={style.faqQ}>webデザインだけ、あるいは、コーディングだけを依頼できますか？</h4>
                    <div className={style.faqA}>可能です。そのほかに写真撮影や動画撮影のみ、ロゴ制作のみ、チラシデザイン制作のみでも承っておりますのでお気軽にお問い合わせください。</div> 
                </div>

            </div>
            </div>

            
            
        </Layout>
    )
}

export default Index

// export const query = graphql`
//   query ContentfulBlogQuery {
//     allContentfulBlog(sort: {fields: date, order: DESC}) {
//       totalCount
//       edges {
//         node {
//           title
//           slug
//           id
//           excerpt
//           date(formatString: "YYYY-MM-DD")
//           image {
//             gatsbyImageData(placeholder: BLURRED, quality: 90, formats: AUTO)
//           }
//           metadata {
//             tags {
//               id
//               contentful_id
//             }
//           }
//         }
//       }
//     }
//   }
  
// `

export const query = graphql` 
    query MyQuery {
        allMicrocmsArticles {
        edges {
            node {
                articlesId
                title
                body
                eventDate
                category {
                    name
                }
                mainImage {
                    url
                }
            }
        }
        }
    }
  `  