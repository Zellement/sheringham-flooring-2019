import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WhyChooseUs = () => {
  const data = useStaticQuery(graphql`
  query WhyChooseQuery {
    allDatoCmsWhyChoose {
      edges {
        node {
          id
          reasons {
            id
            title
            blurb
            backgroundClass
            icon {
              url
            }
          }
        }
      }
    }
  }
  
  `)
  return (

    <>
        
        {data.allDatoCmsWhyChoose.edges.map(whyChooseData => (

            <div key={whyChooseData.node.id}>

                {whyChooseData.node.reasons.map(reasonData => (

                    <div key={reasonData.id}>
                        
                        {reasonData.title}
                        
                    </div>

                ))}

            </div>

        ))}


    </>

  )
}

export default WhyChooseUs
