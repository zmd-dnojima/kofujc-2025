import * as React from "react"
import { graphql, Link } from "gatsby"
import * as style from "../styles/sub.module.scss"


export default () => (

    <div className={style.subContent}>
        <h2>ご依頼から納品までの流れ</h2>
        <div className={style.outline}>
            <div className={style.materialName}>1. ご相談開始</div><div>お電話・メール・ご来訪　どういった方法でも構いませんのでまずはご相談ください。</div>
            <div className={style.materialName}>2. 内容確認</div><div>製作依頼→ 手書きイメージでも口頭でも構いませんお打ち合わせをしながら詳細を詰めていきます。<br/>工事依頼→ まずは現場確認をいたしますので大体の内容と現場をお伝えください。</div>
            <div className={style.materialName}>3. お見積り作成</div><div>お伺いした内容に基づきお見積書を作成いたします。</div>
            <div className={style.materialName}>4. 製作・実行依頼</div><div>お見積内容にてご承認いただきましたら製作を開始いたします。</div>
            <div className={style.materialName}>5. 製作・工事→検査</div><div>ご依頼内容に基づき製作 または工事をしてまいります。必要な検査があれば検査まで行います。</div>
            <div className={style.materialName}>6. ご納品・お引渡し</div><div>条件に合わせて、梱包・郵送を行います。工事の場合は、完了後お客様にご確認を頂き納品といたします。</div>
        </div>

        <h2>ご相談フォーム</h2>
        <p>こちらのフォームからのお問い合わせに関しては、原則数日以内にメールでご返答させていただきます。なお、お問い合わせの内容次第ではご返答に時間がかかる場合もございます。予めご了承ください。</p>
        <div><a href="../privacypolicy" target="_blank" style={{textDecoration:"underline"}}>プライバシーポリシー</a></div>


        <form
            name="contact"
            method="post"
            action="/thankyou/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
        <input type="hidden" name="form-name" value="contact" />
        <div>
            <label htmlFor="name"><span className={style.required}>必須</span>お名前</label>  
            <input type="text" name="name" id="name" required/>
        </div>
        <div>
            <label htmlFor="email"><span className={style.required}>必須</span>メールアドレス</label>
            <input type="email" name="email" id="email" required/>
        </div>
        <div>
            <label htmlFor="tel"><span className={style.required}>必須</span>電話番号</label>
            <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
            <label htmlFor="campanyname">会社名</label>  
            <input type="text" name="campanyname" id="campanyname"/>
        </div>
        <div>
            <label htmlFor="message"><span className={style.required}>必須</span>ご用件</label>
            <textarea name="message" rows="10" id="message" required></textarea>
        </div>
        <div>
            <button className={style.contactButton} type="submit">お問い合わせをする</button>
        </div>   
        </form> 
    </div>
)