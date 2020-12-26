import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Gif from "../../images/hello.gif"

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
        <S.Image className="imageContainer">
          <Img fluid={data.file.childImageSharp.fluid} />
        </S.Image>
        <div className="content">
          <h1>
            Olá <img src={Gif} width="30px" alt="hello icon" />, Eu sou
            Rychillie
          </h1>
          <h2>Desenvolvedor FrontEnd e Criador de Conteúdo.</h2>
          <S.Social>
            {Social.map(item => (
              <S.MyLink
                key={item.title}
                href={`${item.link}`}
                title={`${item.title}`}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </S.MyLink>
            ))}
          </S.Social>
        </div>
      </S.Content>
    </S.Header>
  )
}

export default Apresentation
