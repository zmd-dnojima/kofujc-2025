import * as React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/common.module.scss"
import fujiIcon from "../images/fuji.svg"

const Thankyou = () => {
    return(
        <Layout>
            <Seo title="ZMD｜ありがとうございます" description="これはthankyouページです" /> 
            <div className={style.wrapper}>
            <div className={style.subPageTitle}>
                <img src={fujiIcon} alt="javascript" width={100}/>
                <h1>CONTACT</h1>
            </div>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <p className={style.thanksTxt}>
                    お問い合わせありがとうございます。<br/>
                    お送り頂きました内容を確認の上、原則数日以内にに折り返しご連絡させて頂きます。<br/>
                    また、ご記入頂いたメールアドレスへ、自動返信の確認メールをお送りしております。<br/><br/>

                    しばらく経ってもメールが届かない場合は、入力頂いたメールアドレスが間違っているか、迷惑メールフォルダに振り分けられている可能性がございます。
                    また、ドメイン指定をされている場合は、「@zmd.jp」からのメールが受信できるようあらかじめ設定をお願いいたします。<br/><br/>
                    以上の内容をご確認の上、お手数ですがもう一度フォームよりお問い合わせ頂きますようお願い申し上げます。
                    </p>
                    
                </div>
            </div>
            </div>
            <div className={style.topButton}><Link to="../">トップページへ戻る</Link></div>
        </Layout>
    )
}

export default Thankyou