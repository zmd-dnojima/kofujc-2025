import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/koihime.module.scss"  

//bootstrap
//import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import txt from '../images/koihimeTxt.svg'


const Koihime = (props) => {

    return (
        <Layout>
            <Seo title="湖衣姫コレクション 2025年 応募ページ" description="一般社団法人甲府青年会議所 2025年度 | 湖衣姫コレクション 応募ページ" />
            <div className={style.main}>

                <div className={style.subHeader}>
                    
                    <div className={style.imgWoman}><StaticImage src="../images/oono.png" alt="main" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                    <div className={style.imgBg}><StaticImage src="../images/mainBg.png" alt="main" placeholder="blurred" quality ={90} layout="fullWidth" /></div>
                    <div className={style.txt}><img src={txt} alt="javascript" width={"40px"}/></div>
                    <div className={style.cap}>第五十回信玄公祭り湖衣姫コレクション<br/>第十八代湖衣姫 大野 瑞穂(おおの みずほ) さん</div>
                    
                </div>

                <div className={style.uspArea}>
                <p className={style.t1}>第51回信玄公祭り<span>湖衣姫コレクション</span></p>
                <p className={style.t2}>2025<span>年</span>4<span>月</span>4<span>日（金）</span>18:00 - 20:00<br/>
                会場：舞鶴城公園自由広場</p>
                </div>

                <div className={style.entryArea}>
                <div className={style.contentWrap}>
                    <div className={style.historyBody}>
                        <p className={style.t1}>エントリー受付期間</p>
                        <p className={style.t2}>2025年1月9日(木)<br className={style.brsp}/>〜<br className={style.brsp}/>2025年2月9日(日)</p>
                    </div>
                </div>
                </div>

                <div className={style.koihimeBtn}>
                    <a href="https://sgfm.jp/f/koihime2025" target="_blank"><span>エントリーはこちら</span></a>
                </div>
                

                <div className={style.flowArea}>
                <div className={style.contentWrap}>
                    <div className={style.historyBody}>
                        <div className={style.koihimeTitle}>
                            <div className={style.en}><span>O</span>VERVIEW</div>
                            <div className={style.jp}>エントリー概要</div>
                        </div>
                        <div className={style.summery}>
                            <div>応募資格</div>
                            <div>18歳以上の山梨を愛する気持ちをお持ちの方。<br/>（既婚・未婚・性別を問いません）</div>
                            <div>応募方法</div>
                            <div><a href="https://sgfm.jp/f/koihime2025" target="_blank">専用応募フォーム</a>からご応募ください。または、専用応募用紙（こちらからダウンロードしてください）に必要事項を記入の上、一般社団法人甲府青年会譲所事務局宛にこ持参またはこ郵送ください。</div>
                            <div>スケジュール</div>
                            <div><span>一次審査（書類審査）</span><br/>
                                2025年2月9日（日）23:59 申込締切<br/>（一次審査の結果は2025年2月10日（月）～ 13日（木）に適過者のみ電話にて連絡いたします。）<br/><br/>
                                <span>二次審査（公開審査）</span><br/>
                                2025年2月16日（日）<br/>
                                場所：防災新館</div>
                            <div>賞金・副賞</div>
                            <div><span>湖衣姫： 1 名</span><br/>
                                （賞金300,000円、副賞）<br/><br/>
                                <span>準湖衣姫 2 名</span><br/>
                                （賞金50,000円、副賞 × 2名）</div>
                            <div>注意事項</div>
                            <div>   ・2022年4月より、成人年齢が18歳に引き下げられましたが、本事業は20歳未満の方は保護者の同意をいただきます。<br/>
                            ・二次審査当日は住所氏名生年月日等が確認できるものと、印鑑をお持ちください（運転免許証・パスポート・保険証・学生証など）。<br/>
                            ・応募内容に偽りがあった場合、入選を取り消すことがあります。<br/>
                            ・申込に際し提出された個人情報は、コレクションの審査目的にのみ使用し、第三者へは一切開示いたしません。</div>
                        </div>
                        
                        <div className={style.koihimeTitle}>
                            <div className={style.en}><span>F</span>AQ</div>
                            <div className={style.jp}>よくある質問と答え</div>
                        </div>
                        <div className={style.inner}>
                        <Accordion>
                            <Accordion.Item  className={style.item_faq} eventKey="0">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>湖衣姫コンテストではなく湖衣姫コレクションになったのはなぜですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>第50 回信玄公まつりの節目として名称を変更しました。今回を機に性別を胆わず募集を行い、それぞれが表現する「湖衣姫」を皆様に見ていただきたい思いで、湖衣姫コレクションというネーミングをつけさせていただきました。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="1">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>着物を持っていないのですが用意をしなければなりませんか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>きものあさ川様から着物のレンタルを協賛していだだいておりますので、ご用意いただく必要はありません。また、当日はプロの方に着付けやメイク等をおこなっていただきます。（こ自身の着物やメイクでご参加いただくことももちろん可能です。）</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="2">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>何歳まで応募できますか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>18歳以上であれば、何歳の方であっても応募できます。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="3">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>性別は問わないと書いてありますが本当ですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>今回信玄公祭りでは武田信玄や山本勘助役としても女性が選ばれております。性別を関わず、湖衣姫に応募いただけます。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="4">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>どのような基準で選定されるのですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>湖衣姫としての振る舞いや、山梨への想いなどが選定基準になります。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="5">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>湖衣姫の任期はいつからいつまでですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>任期としては4月4日から1年間になります。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="6">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>コレクション参加にあたって何か費用がかかることはありますか？また準備する物はありますか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>特に費用や準備するものはありません。山梨を愛する心だけ忘れずに参加してください。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>
                </div>
                </div>

                <div className={style.koihimeBtn}>
                    <a href="https://sgfm.jp/f/koihime2025" target="_blank"><span>エントリーはこちら</span></a>
                </div>

                <div className={style.sponsorship}>
                    {/* <div className={style.sponsorshipTitle}>協賛</div>
                    <div className={style.gridWrap}>
                        <div><StaticImage src="../images/sponsorship_1.jpg" alt="sponsorship_1" placeholder="blurred" quality ={90}  /></div>
                        <div><StaticImage src="../images/sponsorship_2.jpg" alt="sponsorship_2" placeholder="blurred" quality ={90}  /></div>
                        <div><StaticImage src="../images/sponsorship_3.jpg" alt="sponsorship_3" placeholder="blurred" quality ={90}  /></div>
                    </div> */}
                    <div className={style.sponsorshipTitle}>協力</div>
                    <div>(株)きものあさ川／一般社団法人全日本ブライダル協会山梨県支部</div>
                    <div className={style.sponsorshipTitle}>主催</div>
                    <div>一般社団法人甲府青年会議所 湖衣姫コレクション実行委員会</div>
                    <br/>
                </div>
                

            </div>
            
        </Layout>
    )
}

export default Koihime

