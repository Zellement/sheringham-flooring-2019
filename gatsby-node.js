exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
    query MyQuery {
        allDatoCmsServicePage {
          edges {
            node {
              id
              pageName
              slug
            }
          }
        }
      }      
    `)
    data.allDatoCmsServicePage.edges.forEach(edge => {
      const slug = edge.node.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/service-pages.js`),
        context: { slug: slug },
      })
    })
  }