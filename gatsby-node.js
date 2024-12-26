const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
//const FilterWarningsPlugin = require(`webpack-filter-warnings-plugin`)

// ------------------------------------------------------

exports.createPages = async ({ graphql, actions }) => {  
    const { createPage } = actions   


    //記事ページ
    const singleArticle = await graphql(
        `
        {
            allMicrocmsArticles {
                edges {
                    node {
                        articlesId
                        title
                        body
                        id
                        eventDate
                    }
                }
            }
        }
    `)
    if (singleArticle.errors) {
        throw singleArticle.errors
    }

    singleArticle.data.allMicrocmsArticles.edges.forEach(({ node }) => {
        createPage({
            path: node.articlesId,
            //path: `/articles/${node.id}`,
            component: path.resolve(`./src/templates/single-blog.js`),
            context: {
                id: node.id,
            },
        })
    })

    ////////////////////////////////////////////////
    //ページネーション初期設定
    const PerPage = 10;

    ////////////////////////////////////////////////
    //カテゴリー1のページネーション（今後の例会・事業）
    const pageCategory1 = await graphql(
        `
        {
            allMicrocmsArticles(
                filter: {category: {elemMatch: {tag: {eq: "news"}}}}
            ) {
                totalCount
            }
        }
    `)
    if (pageCategory1.errors) {
        throw pageCategory1.errors
    }
    
    const pageCountCategory1 = Math.ceil(pageCategory1.data.allMicrocmsArticles.totalCount / PerPage);
    for (let i = 0; i < pageCountCategory1; i++) {
        createPage({
            path: `/news/${i + 1}`,
            component: path.resolve("./src/templates/blog-page-c1.js"),
            context: {
                limit: PerPage,
                skip: i * PerPage,
            },
        })
    }

    ////////////////////////////////////////////////
    //カテゴリー2のページネーション（過去の例会・事業）
    const pageCategory2 = await graphql(
        `
        {
            allMicrocmsArticles(
                filter: {category: {elemMatch: {tag: {eq: "past"}}}}
            ) {
                totalCount
            }
        }
    `)
    if (pageCategory2.errors) {
        throw pageCategory2.errors
    }
    
    const pageCountCategory2 = Math.ceil(pageCategory2.data.allMicrocmsArticles.totalCount / PerPage);

    for (let i = 0; i < pageCountCategory2; i++) {
        createPage({
            path: `/past/${i + 1}`,
            component: path.resolve("./src/templates/blog-page-c2.js"),
            context: {
            limit: PerPage,
            skip: i * PerPage,
            },
        })
    }

    ////////////////////////////////////////////////
    //カテゴリー3のページネーション（理事長所感）
    const pageCategory3 = await graphql(
        `
        {
            allMicrocmsArticles(
                filter: {category: {elemMatch: {tag: {eq: "syokan"}}}}
            ) {
                totalCount
            }
        }
    `)
    if (pageCategory3.errors) {
        throw pageCategory3.errors
    }
    
    const pageCountCategory3 = Math.ceil(pageCategory3.data.allMicrocmsArticles.totalCount / PerPage);

    for (let i = 0; i < pageCountCategory3; i++) {
        createPage({
            path: `/syokan/${i + 1}`,
            component: path.resolve("./src/templates/blog-page-c3.js"),
            context: {
            limit: PerPage,
            skip: i * PerPage,
            },
        })
    }
            
    
}



// ------------------------------------------------------

