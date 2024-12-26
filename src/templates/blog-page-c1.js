import React, { useState, useCallback, useEffect, useRef } from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
// import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactArea from "../components/contactArea"
import * as style from "../styles/sub.module.scss"

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-regular-svg-icons"


const Pagination = ({ totalCount }) => {
    const PER_PAGE = 10
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)
    return (
      <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link to={`/news/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    )
}

const CategoryPage = (props) => {
    const singleBlog = [];
    

    return (
        
        <Layout>
            <Seo title="新着情報" description="一般社団法人甲府青年会議所 2025年度 | 新着情報" />
            <div className={style.main}>

                <div className={style.subHeader}>
                    <p>新着情報</p>
                </div>

                <div className={style.contentWrap}>
                    <div className={style.tabNavi}>
                        <div className={style.tabNaviItem}><Link to="/" className={style.selected}>今後の<br/>例会・事業</Link></div>
                        <div className={style.tabNaviItem}><Link to="/past/1">過去の<br/>例会・事業</Link></div>
                        <div className={style.tabNaviItem}><Link to="/syokan/1">理事長所感</Link></div>
                        
                    </div>

                    
                    <div className={style.blogArea}>  
                        
                        <div className={style.blogCardWrapper}>
                        {
                            props.data.allMicrocmsArticles.edges.map((novel, index) =>(
                                <Link to={'../../' + novel.node.articlesId}>
                                <div className={style.blogCard} key={index}>                            
                                    
                                <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div></div>
                                <div className={style.blogTags}>#{novel.node.category[0].name}</div>  
                                <div className={style.blogTitle}>{novel.node.title}</div>
                                <div className={style.blogDate}><FontAwesomeIcon icon={faClock}/> {`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div>
                                </div>
                                </Link>
                            ))
                        }
                        </div>
                    </div>
                    <div className={style.blogPageNation}><Pagination totalCount={props.data.allMicrocmsArticles.totalCount} /></div>
                </div>
            
                <ContactArea/>
            </div>
        </Layout>
    )
}

export default CategoryPage


export const query = graphql` 
    query MyQuery ($limit: Int!, $skip: Int!) { 
        allMicrocmsArticles(
            limit: $limit,
            skip: $skip,
            sort: { fields: [createdAt], order: DESC },
            filter: {category: {elemMatch: {tag: {eq: "news"}}}}
        ) {
        edges {
            node {
                articlesId
                title
                body
                eventDate
                category {
                    name
                    tag
                }
                mainImage {
                    url
                }
                bannerImage {
                    url
                }
            }
        }
            totalCount
        }
    }
  `  
