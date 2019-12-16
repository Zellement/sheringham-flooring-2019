exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
  query PagesQuery {
    allDatoCmsPageModular {
      edges {
        node {
          slug
        }
      }
    }
    allDatoCmsVinylChildPageModular {
      edges {
        node {
          slug
        }
      }
    }
    allDatoCmsCarpetsChildPageModular {
      edges {
        node {
          slug
        }
      }
    }
  }
   
  `)
  data.allDatoCmsPageModular.edges.forEach(edge => {
    actions.createPage({
      path: edge.node.slug,
      component: require.resolve(`./src/templates/page-parent.js`),
      context: { slug: edge.node.slug },
    })
  })
  data.allDatoCmsVinylChildPageModular.edges.forEach(edge => {
    actions.createPage({
      path: "vinyl-flooring/" + edge.node.slug,
      component: require.resolve(`./src/templates/page-child-vinyl-flooring.js`),
      context: { slug: edge.node.slug },
    })
  })
  data.allDatoCmsCarpetsChildPageModular.edges.forEach(edge => {
    actions.createPage({
      path: "carpets/" + edge.node.slug,
      component: require.resolve(`./src/templates/page-child-carpets.js`),
      context: { slug: edge.node.slug },
    })
  })
}
