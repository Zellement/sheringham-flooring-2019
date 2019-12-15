import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WhyChooseUs = ( {containerClass} ) => {
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

            <div className={"max-w-6xl mx-auto p-8 flex flex-col " + containerClass} key={whyChooseData.node.id}>

                {whyChooseData.node.reasons.map(reasonData => (

                    <div className="text-center py-4 px-2 flex-1" key={reasonData.id}>
                        
                        <div className={reasonData.backgroundClass + " w-16 p-4 rounded-lg block mx-auto mb-3"}>
                            <img alt={reasonData.title} className="w-full" src={reasonData.icon.url} />
                        </div>
                        <span className="block text-2xl font-bold text-blue-dark">{reasonData.title}</span>
                        <span className="block text-lg text-blue-dark">{reasonData.blurb}</span>
                        
                    </div>

                ))}

            </div>

        ))}


    </>

  )
}

export default WhyChooseUs
