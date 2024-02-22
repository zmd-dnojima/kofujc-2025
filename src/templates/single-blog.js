import * as React from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/sub.module.scss"

import { useLocation } from "@reach/router"
import Share from "../components/share"

 
const SingleBlog = (props) => {   
    //const tagsString = props.data.microcmsArticles.category[0].name
    const siteUrl = useLocation().href;
    const slug = useLocation().search;

    return(
      <Layout>
            <Seo title={props.data.microcmsArticles.title} description={props.data.microcmsArticles.title} /> 
            <div className={style.subtitle}>
                <h1>NEWS</h1>
                <div className={style.txtArea}>お知らせ</div>
            </div>
            <div className={style.singlePage}>
                <div className={style.subContent}>
                    <h1 className={style.subTitle}>{props.data.microcmsArticles.title}</h1>         
                    <div className={style.blogDate}>{`${props.data.microcmsArticles.eventDate.substring(0, props.data.microcmsArticles.eventDate.indexOf("T"))}`}</div>
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: props.data.microcmsArticles.body }} />  

                    <div className={style.backButton}><Link to={"../articles/"}>一覧ページへ戻る</Link></div>
                </div>
            </div>
            
        </Layout>                    
    )
}

export default SingleBlog
   
export const query = graphql` 
    query($id: String!) {
        microcmsArticles(id: { eq: $id }) {
            articlesId
            body
            eventDate
            id
            title
        }
    }
  `    