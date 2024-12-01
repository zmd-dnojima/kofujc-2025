import * as React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/privacypolicy.module.scss"


const PrivacyPolicy = () => {
    return(
        <Layout>
            <Seo title="ソーシャルメディアポリシー" description="一般社団法人甲府青年会議所 2025年度 | ソーシャルメディア" />
            <div className={style.subHeader}>
                <p>ソーシャルメディアポリシー</p>
            </div>
            <div className={style.contentWrap}>
                <h1>アカウント運用方針 Social Media Policy</h1>
                <h3>運用方針</h3>
                <p>一般社団法人甲府青年会議所では、事業情報の提供及び皆様からの意見募集、相互理解を目的として、ソーシャルメディアを通じた情報発信を行うにあたり、次のとおりアカウントの運用方針を定めます。</p>
                <h3>ソーシャルメディアサービス名及びアカウント(URL)</h3>
                <p>フェイスブックページ<br/>
                <a href = "https://www.facebook.com/kofujc" target = "_blank">https://www.facebook.com/kofujc</a></p>
                <p>インスタグラムページ<br/>
                <a href = "https://www.instagram.com/kofujc/" target = "_blank">https://www.instagram.com/kofujc/</a></p>
                <p>ツイッターページ<br/>
                <a href = "https://twitter.com/jci_kofu" target = "_blank">https://twitter.com/jci_kofu</a></p>
                <h3>各ソーシャルメディアサービスの内容</h3>
                <p>
                【フェイスブック (アカウント運営者: 一般社団法人甲府青年会議所)「投稿者: 会員」】<br/>
                1. ホームページ等の更新情報<br/>
                2. 一般社団法人甲府青年会議所事業の告知及び報告<br/>
                3. 事業企画・運営にあたっての意見募集・連絡調整<br/>
                4. 各種アンケートの実施<br/>
                5. その他 ※会員による投稿のため、一部原文における認識・解釈が一般社団法人甲府青年会議所の見解と異なる場合がございます。
                </p>
                <p>
                【インスタグラム (アカウント運営者: 一般社団法人甲府青年会議所)「投稿者: 会員」】<br/>
                1. ホームページ等の更新情報<br/>
                2. 一般社団法人甲府青年会議所事業の告知及び報告<br/>
                3. 事業企画・運営にあたっての意見募集・連絡調整<br/>
                4. 各種アンケートの実施<br/>
                5. その他 ※会員による投稿のため、一部原文における認識・解釈が一般社団法人甲府青年会議所の見解と異なる場合がございます。
                </p>
                <p>
                【ツイッター (アカウント運営者: 一般社団法人甲府青年会議所)「投稿者: 会員」】<br/>
                1. ホームページ等の更新情報<br/>
                2. 一般社団法人甲府青年会議所事業の告知及び報告<br/>
                3. 事業企画・運営にあたっての意見募集・連絡調整<br/>
                4. 各種アンケートの実施<br/>
                5. その他 ※会員による投稿のため、一部原文における認識・解釈が一般社団法人甲府青年会議所の見解と異なる場合がございます。
                </p>
                
                
                <h3>対応時間</h3>
                <p>原則として、平日 9 時 00 分~17 時 00 分までとしますが、この時間帯以外にも投稿する場合があります。</p>
                <h3>運用管理責任者</h3>
                <p>一般社団法人甲府青年会議所 専務理事 : 石水 秀樹</p>
                <h3>投稿者</h3>
                <p>一般社団法人甲府青年会議所 会員</p>
                <h3>留意事項</h3>
                <p>フォロー、コメントにつきましては、投稿者によるご返信とさせていただきます。このため、返信の内容などにつきましては当青年会議所の見解と必ずしも一致するものではございません。当青年会議所へのご意見・ご質問は、当ホームページ(https://kofujc.com/)「お問合せフォーム」をご利用ください。</p>
                <h3>著作権</h3>
                <p>アカウントから発信する情報 (文章、写真、イラストなど) に関する著作権は当青年会議所に帰属します。<br/>
                フェイスブック で発信する内容は、「私的使用のための複製・引用」など著作権法上認められた場合及び フェイスブックページ上で「シェア」機能を使用するなど、転載対象の内容を改編せず、出所を明記する場合を除き、無断で複製・転載することを禁じます。<br/>
                インスタグラムで発信する内容は、「私的使用のための複製・引用」など著作権法上認められた場合及びインスタグラムページ上で「シェア」機能を使用するなど、転載対象の内容を改編せず、出所を明記する場合を除き、無断で複製・転載することを禁じます。<br/>
                ツイッターで発信する内容は、「私的使用のための複製・引用」など著作権法上認められた場合及びインスタグラムページ上で「シェア」機能を使用するなど、転載対象の内容を改編せず、出所を明記する場合を除き、無断で複製・転載することを禁じます。</p>
                <h3>個人情報の取り扱いについて</h3>
                <p>当ページで取得した個人情報については、「プライバシーポリシー」に準じて適切に取り扱います。</p>
                <h3>お問合せ</h3>
                <p>当ページに関するお問い合わせは、当青年会議所ウェブサイト(https://kofujc.com/)「お問合せ専用フォーム」をご利用ください。<br/>この運用方針は、2022年 1 月 1 日から施行します。</p>

            </div>
            
        </Layout>
    )
}

export default PrivacyPolicy