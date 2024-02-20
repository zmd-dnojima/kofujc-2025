import * as React from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RelatedPost from "../components/relatedPost"
import * as style from "../styles/singleBlog.module.scss"

import { useLocation } from "@reach/router"
import Share from "../components/share"

import fujiIcon2 from "../images/fuji_white.svg"

 
const SingleBlog = (props) => {   
    const tagsString = props.data.microcmsArticles.category[0].name
    const siteUrl = useLocation().href;
    const slug = useLocation().search;

    return(
      <Layout>
            <Seo title={props.data.microcmsArticles.title} description={props.data.microcmsArticles.title} /> 
            
            <div className={style.wrapper}>  
                <div className={style.container}>      
                    {/* <Share title={props.data.microcmsArticles.title} url={siteUrl}/> */}
                    
                    <div className={style.blogTags}><Link to={"../blog?tag=" + tagsString}>#{props.data.microcmsArticles.category[0].name}</Link></div>
                    <h1 className={style.subTitle}>{props.data.microcmsArticles.title}</h1>         
                    <div className={style.blogDate}>{`${props.data.microcmsArticles.eventDate.substring(0, props.data.microcmsArticles.eventDate.indexOf("T"))}`}</div>
                    <div className={style.blogImgWrapper}><img src={props.data.microcmsArticles.mainImage.url} alt="card-image" className={style.cardImg} /></div>
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: props.data.microcmsArticles.body }} />  

                    <h2>関連する記事</h2>
                    <RelatedPost actTag={props.data.microcmsArticles.category[0].name} />
                    <div className={style.moreButton}><Link to={"../blog?tag=all"}>一覧ページへ戻る</Link></div>
                </div>
                
                
            </div>
        </Layout>                    
    )
}

export default SingleBlog

// export const query = graphql` 
//     query ContentfulSingleBlogQuery ($slug: String!) { 
//         contentfulBlog (slug: { eq: $slug }) {   
//             title
//             excerpt
//             date(formatString: "YYYY-MM-DD")
//             image {
//                 gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90, width: 1000)
//             }
//             textBody {
//                 childMarkdownRemark {
//                     html
//                 }
//             }
//             metadata {
//                 tags {
//                     id
//                     contentful_id
//                 }
//             }
//         }
//     }
// `    
export const query = graphql` 
    query($id: String!) {
        microcmsArticles(id: { eq: $id }) {
            articlesId
            body
            eventDate
            id
            title
            category {
                name
            }
            mainImage {
                url
            }
        }
    }
  `    