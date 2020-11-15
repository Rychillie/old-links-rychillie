import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Social from "../../content/social"

import * as S from "./styled"

const Apresentation = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rychillie.png" }) {
        childImageSharp {
          fluid(maxWidth: 240, maxHeight: 240, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.Header>
      <S.Content>
        <S.Image>
          <Img fluid={data.file.childImageSharp.fluid} />
        </S.Image>
        <h1>Olá, Eu sou Rychillie FrontEnd Developer e Criador de Conteúdo.</h1>
        <S.Social>
          {Social.map(item => (
            <S.MyLink
              key={item.id}
              href={`${item.link}`}
              title={`${item.title}`}
              target="_blank"
            >
              {item.icon}
            </S.MyLink>
          ))}
        </S.Social>
      </S.Content>
    </S.Header>
  )
}

export default Apresentation
