import React, { useState, useCallback, useEffect, useRef } from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
// import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactArea from "../components/contactArea"
import * as style from "../styles/sub.module.scss"

import loadingSvg from '../images/loading.svg'

var singleBlog = [];


const Blog = (props) => {
    
    var showBlogNum = 100;

    const [isShowMore, showMore] = useState(false);
    const [tab, setActiveTab] = useState('news');

    const [loadingArticles, setLoadingArticles] = useState(true);
    const fetchData = () => {
        if(loadingArticles){
            setTimeout(() => {
                setLoadingArticles(false)
            }, 300)
        }
    };
    fetchData();

    useEffect(() => {
        setLoadingArticles(true);
        singleBlog = [];
        setActiveTab(tab);
        let allBlog = [];
        let blogAddNum = 0;
        for(var i in props.data.allMicrocmsArticles.edges){
            allBlog.push(props.data.allMicrocmsArticles.edges[i])
            if(allBlog[i].node.category[0].tag && allBlog[i].node.category[0].tag == tab){
            
                blogAddNum +=1
                if(blogAddNum > showBlogNum){
                    break
                }
                singleBlog.push(allBlog[i])
                
            }
            
            // else if(tab == "" || tab == "all" ) {
            //     if(allBlog[i].node.category[0].tag != "banner" && allBlog[i].node.category[0].tag != "page" ) {
            //         blogAddNum +=1
            //         if(blogAddNum > showBlogNum){
            //             break
            //         }
            //         singleBlog.push(allBlog[i])

                    
            //     }
            // }
            
        };
        
        
    }, [tab]);

    const LoadArticles = () => {
        return singleBlog.map((novel, index) =>(
            <Link to={'../' + novel.node.articlesId}>
            <div className={style.blogCard} key={index}>                            
                <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div></div>
                <div className={style.blogTags}>#{novel.node.category[0].name}</div>  
                <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div>
                <div className={style.blogTitle}>{novel.node.title}</div>
            </div>
            </Link>
        ))
    }
    
    

    return (
        
        <Layout>
            <Seo title="新着情報" description="一般社団法人甲府青年会議所 2025年度 | 新着情報" />
            <div className={style.main}>

                <div className={style.subHeader}>
                    <p>新着情報</p>
                </div>

                <div className={style.contentWrap}>
                    <div className={style.tabNavi}>
                        {/* <div className={style.tabNaviItem}><Link to="/articles/?tag=all" className={`${(query3['tag'] == undefined || query3['tag'] == "all" ? style.selected : '')}`}>ALL</Link></div>
                        <div className={style.tabNaviItem}><Link to="/articles/?tag=syokan" className={`${(query3['tag'] == "syokan" ? style.selected : '')}`}>理事長所感</Link></div>
                        <div className={style.tabNaviItem}><Link to="/articles/?tag=news" className={`${(query3['tag'] == "news" ? style.selected : '')}`}>今後の例会・事業</Link></div>
                        <div className={style.tabNaviItem}><Link to="/articles/?tag=past" className={`${(query3['tag'] == "past" ? style.selected : '')}`}>過去の例会・事業</Link></div> */}
                        {/* <div className={style.tabNaviItem}><button onClick={()=>setActiveTab('all')} className={`${(tab == "" || tab == "all" ? style.selected : '')}`}>ALL</button></div> */}
                        <div className={style.tabNaviItem}><button onClick={()=>setActiveTab("news")} className={`${(tab == "news" ? style.selected : '')}`}>今後の例会・事業</button></div>
                        <div className={style.tabNaviItem}><button onClick={()=>setActiveTab("past")} className={`${(tab == "past" ? style.selected : '')}`}>過去の例会・事業</button></div>
                        <div className={style.tabNaviItem}><button onClick={()=>setActiveTab("syokan")} className={`${(tab == "syokan" ? style.selected : '')}`}>理事長所感</button></div>
                        
                    </div>

                    
                    <div className={style.blogArea}>  
                        {  loadingArticles ? <p className={style.loading}><img src={loadingSvg} alt="javascript" /></p>:"" }
                        <div className={style.blogCardWrapper}>
                        {  loadingArticles ? "":<LoadArticles /> }
                        </div>
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
        }
    }
  `  
