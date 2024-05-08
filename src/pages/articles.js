import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactArea from "../components/contactArea"
import * as style from "../styles/sub.module.scss"

const Blog = (props) => {
    const singleBlog = [];
    const search = useLocation().search;
    const query3 = queryString.parse(search);
    
    return (
        <Layout>
            <Seo title="NEWS一覧" description="柳川芳鉄工所｜NEWS一覧ページ" />
            <div className={style.main}>

                <div className={style.subtitle}>
                    <h1>NEWS/TOPICS</h1>
                    <div className={style.txtArea}>ヨシブロ</div>
                </div>

                <div className={style.subContent}>
            
                <div className={style.blogArea}>  
                    {(() => {
                        const allBlog = [];
                        const showBlogNum = 10;
                        var blogAddNum = 0;
                        for(var i in props.data.allMicrocmsArticles.edges){
                            
                            allBlog.push(props.data.allMicrocmsArticles.edges[i])
                            singleBlog.push(allBlog[i])
                        }
                        
                    })()}

                    {
                        singleBlog.map((novel, index) =>(
                            <Link to={'../' + novel.node.articlesId}>
                            <div className={style.blogCard} key={index}>                            
                                <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div>
                                <h3>{novel.node.title}</h3>
                            </div>
                            </Link>
                            
                            
                        ))
                    }
                </div>
                </div>
            
                <ContactArea/>
            </div>
        </Layout>
    )
}

export default Blog


export const query = graphql` 
    query MyQuery {
        allMicrocmsArticles(sort: { fields: [createdAt], order: DESC }) {
        edges {
            node {
                articlesId
                title
                body
                eventDate
            }
        }
        }
    }
  `  
