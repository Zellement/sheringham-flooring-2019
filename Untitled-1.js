return new Promise((resolve, reject) => {
  graphql(`
    {
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
  `).then(result => {
    result.data.allDatoCmsServicePage.edges.map(({ node: parent }) => {
      createPage({
        path: parent.slug,
        component: path.resolve(`./src/templates/service-pages.js`),
        context: { slug: parent.slug },
      })
      
      parent.treeChildren.map(({ node: child }) => {
        createPage({
          path: `${child.treeParent.slug}/${child.slug}`,
          component: path.resolve(`./src/templates/service-pages.js`),
          context: { slug: child.slug },
        })
      })
    })
    resolve()
  })
})
