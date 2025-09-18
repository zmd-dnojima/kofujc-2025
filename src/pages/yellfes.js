import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { useEffect, useRef, useState } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/kidsfes.module.scss"  
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
            <Seo title="夢中！熱中！キッズフェス" description="一般社団法人甲府青年会議所 2025年度 | 夢中！熱中！キッズフェス" />
            <div className={style.main}>
                <div className={style.subHeader}>
                    <p>夢中！熱中！キッズフェス</p>
                </div>
                <div className={style.contentWrap}>
                    <div className={style.chirashiArea}>
                        <div><StaticImage src="../images/chirashi_1.jpg" alt="chirashi_1" placeholder="blurred" quality ={90}  /></div>
                        <div><StaticImage src="../images/chirashi_2.jpg" alt="chirashi_2" placeholder="blurred" quality ={90}  /></div>
                    </div>
                    <div className={style.chirashiTxt}>
                        <div></div>
                    </div>
                </div>

                <div className={style.activity}>
                <div className={style.contentWrap}>
                    <h2 className={style.kidsTitle}>山の都アリーナ体験ブース一覧</h2>
                    <div className={style.gridWrap}>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_1.jpg" alt="kids_1" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>HADO</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>株式会社meleap</p></div>
                                <div className={style.box}>体験内容<p>ヘッドマウントディスプレイとアームセンサーを装着して、AR（拡張現実）技術を用いた対戦型スポーツを体験しよう！</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_2.jpg" alt="kids_2" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ストラックアウト</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>山梨ファイアーウィンズ</p></div>
                                <div className={style.box}>体験内容<p>山梨プロ野球チーム「山梨ファイアーウィンズ」の方たちから正しいフォームでの投げ方を教わり、ボールを枠にあててみよう！</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_3.jpg" alt="kids_3" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>スポーツチャンバラ</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>山梨県スポーツチャンバラ協会</p></div>
                                <div className={style.box}>体験内容<p>「基本動作」と「打突」の２つのカテゴリで、スポーツチャンバラを体験しよう！</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_4.jpg" alt="kids_4" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ポケモンカード教室</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>なしポケ</p></div>
                                <div className={style.box}>体験内容<p>ルールがわからない、詳しい遊び方が知りたいなど、これからポケモンカードゲームをスタートしたい方、一緒に楽しもう！<br/>全3回午前1回、午後2回(時間は対戦状況による)<br/>混雑時整理券配布(午後分12時30分より配布)<br/><p className={style.cap}>※レンタルデッキのため手ぶらでOK！</p></p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/logo.jpg" alt="kids_5" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>幼児ブース</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>一般社団法人甲府青年会議所</p></div>
                                <div className={style.box}>体験内容<p>折り紙やお絵かき、用意してあるおもちゃなどで自由に遊べるブースです。<br/><p className={style.cap}>※保護者の方の同席が必要です。</p></p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_6.jpg" alt="kids_6" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ドローン</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>ARAKURA DRONE</p></div>
                                <div className={style.box}>体験内容<p>ドローンを飛ばしてみよう！プロの操作もモニターで体験できます！</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_7.jpg" alt="kids_7" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>バルーンアート</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>（一社）山梨イベント活性部会</p></div>
                                <div className={style.box}>体験内容<p>ピエロと一緒にバルーンアート作りを体験しよう！</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_8.jpg" alt="kids_8" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>スノードーム</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>株式会社みっとめるへん社　サン宝石事業</p></div>
                                <div className={style.box}>体験内容<p>好きなパーツやほっぺちゃんを用いてスノードームを作ろう！<br/>混雑時整理券配布</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_9.jpg" alt="kids_9" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ミニパフェキーホルダー</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>FakeFood Cafe</p></div>
                                <div className={style.box}>体験内容<p>食品サンプルの素材でミニパフェのキーホルダーを作ろう！<br/>混雑時整理券配布</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_10.jpg" alt="kids_10" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ミニ四駆コース</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>一般社団法人甲府青年会議所</p></div>
                                <div className={style.box}>体験内容<p>当日限り！山梨県内一大きいコースがやってくる！自慢のミニ四駆を持参して走らせてみよう。<br/><p className={style.cap}>※持っていない方にはレンタル用ミニ四駆の用意がございます。</p></p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_11.jpg" alt="kids_11" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ミニ四駆組み立て体験</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>大公寺寺子屋くらぶ</p></div>
                                <div className={style.box}>体験内容<p>キットを使って1からミニ四駆を組み立ててみよう。<br/>全3回①10時30分～②13時～③14時30分～<br/>抽選式30名様<br/>抽選券は開催中常時配布(公式LINE登録が必要)、各回15分前に抽選結果発表<br/><p className={style.cap}>※組み立てたミニ四駆は持ち帰れます。</p></p></div>
                            </div>
                            
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_12.jpg" alt="kids_12" placeholder="blurred" quality ={90}/></div>
                            <div className={style.txt}>
                                <div className={style.st}>ヨーヨー</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>440（よよまる）</p></div>
                                <div className={style.box}>体験内容<p>アクセル・スピンやロング・スリーパーなど、ハイパーヨーヨーの技を体験しよう！<br/><p className={style.cap}>※講師が芸術ホールにてショーを行っている時間は一時中断しております。</p></p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_13.jpg" alt="kids_13" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>ダブルダッチ</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>studio OVER GROOVE</p></div>
                                <div className={style.box}>体験内容<p>ダブルダッチ（2本のロープを用いた縄跳び）を体験しよう！<br/><span className={style.cap}>※講師が芸術ホールにてショーを行っている時間は一時中断しております。</span></p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_14.jpg" alt="kids_14" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>スポーツスタッキング</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>一般社団法人甲府青年会議所</p></div>
                                <div className={style.box}>体験内容<p>12個のプラスチック製のカップを使います。上手に積み上げて崩せるかな？段々スピードを縮めていくのが癖になる！</p></div>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.image}><StaticImage src="../images/kids_15.jpg" alt="kids_15" placeholder="blurred" quality ={90}  /></div>
                            <div className={style.txt}>
                                <div className={style.st}>プログラミング体験</div>
                                <div className={style.box}>運営<p style={{ textAlign: 'center'}}>ココグラム甲府校</p></div>
                                <div className={style.box}>体験内容<p>大人気ゲームMinecraftを利用してプログラミングを体験してみよう！<br/>混雑時整理券配布</p></div>
                            </div>
                        </div>
                    </div>
                    <h2 className={style.kidsTitle}>芸術ホールショースケジュール</h2>
                    <div className={style.scheduleArea}>
                        <div>10:30</div>
                        <div>地域の青少年ダブルダッチショー<br/><span>（studio OVER GROOVE様）</span></div>
                        <div>11:00</div>
                        <div>地域の青少年ダンスショー<br/><span>（Studio People様）</span></div>
                        <div>11:45</div>
                        <div>マジックショー<br/><span>（Magician 水野翔様）</span></div>
                        <div>13:00</div>
                        <div>地域の青少年ダンスショー<br/><span>（リアンキッズ様）</span></div>
                        <div>13:45</div>
                        <div>ヨーヨーパフォーマンス<br/><span>（ヨーヨーパフォーマー440様）</span></div>
                        <div>14:15</div>
                        <div>地域の青少年ダンスショー<br/><span>（HILO HULA STUDIO様）</span></div>
                        <div>15:00</div>
                        <div>マジックショー<br/><span>（Magician 水野翔様）</span></div>
                    </div>

            </div>
            </div>
                
               
              
        </div>
                

            
            
        </Layout>
    )
}

export default Joinus

