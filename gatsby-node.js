exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
  query MyQuery {
    allDatoCmsServicePage {
      edges {
        node {
          slug
          treeChildren {
            slug
            treeParent {
              slug
            }
          }
        }
      }
    }
  }    
  `)
  data.allDatoCmsServicePage.edges.forEach(edge => {
    actions.createPage({
      path: edge.node.slug,
      component: require.resolve(`./src/templates/service-pages.js`),
      context: { slug: edge.node.slug },
    })

    edge.node.treeChildren.forEach(edge => {
      actions.createPage({
        path: `${edge.treeParent.slug}/${edge.slug}`,
        component: require.resolve(`./src/templates/service-pages.js`),
        context: {
          slug: edge.slug,
        },
      })
    })
  })
}
