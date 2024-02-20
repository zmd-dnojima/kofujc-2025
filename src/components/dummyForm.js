import * as React from "react"
import { graphql, Link } from "gatsby"
import * as style from "../styles/common.module.scss"

export default () => (

    <div className={style.wrapper}>
        <div className={style.container}>
            <p className={style.discription}>お仕事のご依頼やお問い合わせは下記のフォームよりご連絡をお願いいたします。<br/>
            こちらのフォームからのお問い合わせに関しては、原則数日以内にメールでご返答させていただきます。なお、お問い合わせの内容次第ではご返答に時間がかかる場合もございます。予めご了承ください。<br/><br/>
            <a href="../termsofservice" target="_blank" style={{textDecoration:"underline", paddingRight:"2rem"}}>利用規約</a>
            <a href="../privacypolicy" target="_blank" style={{textDecoration:"underline"}}>プライバシーポリシー</a></p>
            <form
                name="contact"
                method="post"
                action="/thankyou/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label htmlFor="name">お名前</label>  
                <input type="text" name="name" id="name" required/>
            </div>
            <div>
                <label htmlFor="email">メールアドレス</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div>
                <label htmlFor="message">ご用件</label>
                <textarea name="message" rows="10" id="message" required></textarea>
            </div>
            <div>
                <button className={style.contactButton} type="submit">送信</button>
            </div>   
                
                
                
                
            </form> 
        </div>
    </div>
)