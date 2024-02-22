import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/sub.module.scss"
import {HashLink} from 'react-router-hash-link'
import DummyForm from "../components/dummyForm"

const Contact = () => {
    return (
        <Layout>
            <Seo title="お問い合わせ" description="柳川芳鉄工所｜お問い合わせページです。" />
            <div className={style.subtitle}>
                <h1>CONTACT</h1>
                <div className={style.txtArea}>お問い合わせ</div>
            </div>
            <DummyForm/>
            
        </Layout>
    )
}

export default Contact