const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
//const FilterWarningsPlugin = require(`webpack-filter-warnings-plugin`)

// ------------------------------------------------------

exports.createPages = async ({ graphql, actions }) => {  
    const { createPage } = actions   

    const result = await graphql(
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
    if (result.errors) {
        throw result.errors
    }
            
    result.data.allMicrocmsArticles.edges.forEach(({ node }) => {
        createPage({
            path: node.articlesId,
            //path: `/articles/${node.id}`,
            component: path.resolve(`./src/templates/single-blog.js`),
            context: {
                id: node.id,
            },
        })
    })
}



// ------------------------------------------------------

