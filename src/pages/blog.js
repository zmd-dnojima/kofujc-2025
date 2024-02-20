import * as React from "react"
import { graphql, Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/list.module.scss"
import fujiIcon2 from "../images/fuji_white.svg"

const Blog = (props) => {
    const singleBlog = [];
    const search = useLocation().search;
    const query3 = queryString.parse(search);
    
    return (
        <Layout>
            <Seo title="ZMD｜BLOG" description="BLOG一覧ページ" />
            <div className={style.subHdr}>
                <div className={style.subHdrInner}>    
                <h1 className={style.subTitle}><img src={fujiIcon2} alt="javascript"/><span>ARTICLES</span>ブログ</h1>
                </div>
            </div>
            
            <div className={style.contentWrap}>
              <div className={style.blogWrapper}>
              
              <div className={style.tabNavi}>
                  <div className={style.tabNaviItem}><Link to="/blog/?tag=all" className={`${(query3['tag'] == undefined || query3['tag'] == "all" ? style.selected : '')}`}>ALL<span>すべて</span></Link></div>
                  <div className={style.tabNaviItem}><Link to="/blog/?tag=WEB" className={`${(query3['tag'] == "WEB" ? style.selected : '')}`}>#WEB<span>WEBのアレコレ</span></Link></div>
                  <div className={style.tabNaviItem}><Link to="/blog/?tag=THINKS" className={`${(query3['tag'] == "THINKS" ? style.selected : '')}`}>#THINKS<span>普段のアレコレ</span></Link></div>
                  <div className={style.tabNaviItem}><Link to="/blog/?tag=JC" className={`${(query3['tag'] == "JC" ? style.selected : '')}`}>#JC<span>青年会議所のアレコレ</span></Link></div>
              </div>
              
                
                {(() => {
                    const allBlog = [];
                    const showBlogNum = 10;
                    var blogAddNum = 0;
                    for(var i in props.data.allMicrocmsArticles.edges){
                        
                        allBlog.push(props.data.allMicrocmsArticles.edges[i])
                        if(allBlog[i].node.category[0].name && allBlog[i].node.category[0].name == query3['tag']){
                          
                            blogAddNum +=1
                            if(blogAddNum > showBlogNum){
                                break
                            }
                            singleBlog.push(allBlog[i])
                        }else{
                          //singleBlog.push(allBlog[i])
                        }
                        if(query3['tag'] == undefined || query3['tag'] == "all" ) {
                          singleBlog.push(allBlog[i])
                        }
                    }
                    
                })()}

                <div className={style.blogCardWrapper}>
                {
                    singleBlog.map((novel, index) =>(
                        <Link to={'../' + novel.node.articlesId}>
                        <div className={style.blogCard} key={index}>                            
                            
                            <div className={style.blogTags}>#{novel.node.category[0].name}</div>  
                            <div className={style.blogImgWrapper}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div>
                            <div className={style.blogDate}>{`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div>
                            <h3>{novel.node.title}</h3>
                            
                        </div>
                        </Link>
                        
                        
                    ))
                }
                </div>

              </div>
                
            </div>
        </Layout>
    )
}

export default Blog

// export const query = graphql`
//   query ContentfulBlogQuery {
//     allContentfulBlog(sort: {fields: date, order: DESC}) {
//       edges {
//         node {
//           title
//           slug
//           id
//           excerpt
//           date(formatString: "YYYY-MM-DD")
//           image {
//             gatsbyImageData(placeholder: BLURRED, quality: 90, formats: AUTO)
//           }
//           metadata {
//             tags {
//               id
//               contentful_id
//             }
//           }
//         }
//       }
//     }
//   }
  
// `

export const query = graphql` 
    query MyQuery {
        allMicrocmsArticles {
        edges {
            node {
                articlesId
                title
                body
                eventDate
                category {
                    name
                }
                mainImage {
                    url
                }
            }
        }
        }
    }
  `  
