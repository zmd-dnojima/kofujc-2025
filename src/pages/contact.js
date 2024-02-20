import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/common.module.scss"
import {HashLink} from 'react-router-hash-link'
import DummyForm from "../components/dummyForm"

import fujiIcon2 from "../images/fuji_white.svg"  

const Contact = () => {
    return (
        <Layout>
            <Seo title="ZMD｜CONTACT" description="これはコンタクトページです" /> 
            <div className={style.subHdr}>
                <div className={style.subHdrInner}>    
                <h1 className={style.subTitle}><img src={fujiIcon2} alt="javascript"/><span>CONTACT</span>お問い合わせ</h1>
                </div>
            </div>
            <DummyForm/>
            
        </Layout>
    )
}

export default Contact