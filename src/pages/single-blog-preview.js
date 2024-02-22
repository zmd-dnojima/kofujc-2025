//import * as React from "react"
import React, { useState, useEffect } from "react";
import queryString from 'query-string'
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/singleBlog.module.scss"

import { useLocation } from "@reach/router"
import Share from "../components/share"

 
const SingleBlogPreview = (props) => {   

    const search = useLocation().search;
    const query3 = queryString.parse(search);
    const contentId = query3['contentId'];
    const draftKey = query3['draftKey'];
    const [postData, setPostData] = useState(null);
    
    useEffect(() => {
        if (!postData) {
            fetch(
                `https://zmd.microcms.io/api/v1/articles/${contentId}?draftKey=${draftKey}`,
            {
                headers: {
                "X-API-KEY": "st30CRbI7cULadmlmvetJT0N6ihLK5xkzXW4",
                },
            }
            )
            .then((response) => {
                if (response.ok) {
                return response.json();
                }
            })
            .then((json) => {
                
                //postData = setPostData(json);
                setPostData(json)
                
            });
            
        } else {
            return function cleanup() {
            console.log("done");
            };
        }
    });
    const tagsString = postData?.category[0].name;
    
    return(
        <Layout>
            <div className={style.wrapper}>  
                <div className={style.container}>      
                    {/* <Share title={postData?..title} url={siteUrl}/> */}
                    <div className={style.blogImgWrapper}><img src={postData?.mainImage.url} alt="card-image" className={style.cardImg} /></div>
                    <div className={style.blogTags}><Link to={"../blog?tag=" + tagsString}>#{postData?.category[0].name}</Link></div>
                    <h1 className={style.subTitle}>{postData?.title}</h1>         
                    <div className={style.blogDate}>{`${postData?.eventDate.substring(0, postData?.eventDate.indexOf("T"))}`}</div>
                    
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: postData?.body }} />  

                    <h3>関連する記事</h3>
                    {/* <RelatedPost actTag={postData?.category[0].name} /> */}
                    <div className={style.moreButton}><Link to={"../blog?tag=all"}>一覧ページへ戻る</Link></div>
                </div>
                
                
            </div>
            
        </Layout>                    
    )
}

export default SingleBlogPreview   