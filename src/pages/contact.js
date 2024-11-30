import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/sub.module.scss"
import {HashLink} from 'react-router-hash-link'
import DummyForm from "../components/dummyForm"

const Contact = () => {
    return (
        <Layout>
            <Seo title="お問い合わせ" description="一般社団法人甲府青年会議所 2025年度｜お問い合わせページです。" />
            <div className={style.subHeader}>
                <p>お問い合わせ</p>
            </div>
            <DummyForm/>
            
        </Layout>
    )
}

export default Contact