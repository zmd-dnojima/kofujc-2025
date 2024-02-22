import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "../styles/common.module.scss"


const RelatedPost = ({ actTag }) => {
    const singleBlog = [];
    const allBlog = [];
    const showBlogNum = 10;
    var blogAddNum = 0;
  
    const data = useStaticQuery(graphql`
    query RelatedPostQuery {
      allMicrocmsArticles {
        edges {
            node {
              articlesId
              body
              eventDate
              title
            }
        }
      }
    }
  `)
    var editDate = [];
    var resultDate = [];

  for(var i in data.allMicrocmsArticles.edges){
      allBlog.push(data.allMicrocmsArticles.edges[i])
      if(allBlog[i].node.category[0].name == actTag){
        
          blogAddNum +=1
          if(blogAddNum > showBlogNum){
              break
          }
          singleBlog.push(allBlog[i])
      }
  }
    
  
  return (
    <div classname={style.blogWrapper}>
      <div className={style.relatedWrapper}>
      {
        singleBlog.map((novel, index) =>(
          <div className={style.relatedCard} key={index}>                            
            <Link to={"../"+novel.node.articlesId}>
            {(() => {
              editDate = novel.node.eventDate;
              resultDate = novel.node.eventDate.split("T")[0]
            })()}
            {/* <p className={style.resultDate}>{resultDate}</p>   */}
            {/* <div className={style.blogImgWrapper}><img src={novel.node.mainImage.url} alt="card-image" className={style.cardImg} /></div> */}
            <h4>{novel.node.title}</h4>  
            <div className={style.arrow}></div>
            {/* <div className={style.blogTags}><p>#{novel.node.category[0].name}</p></div> */}
            </Link>
        </div>
        ))

      }
      </div>
      
    </div>


    

  )
      
}

export default RelatedPost
