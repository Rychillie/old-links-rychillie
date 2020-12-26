import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { ChevronLeft } from "@styled-icons/evaicons-solid/ChevronLeft"

import * as S from "../styles/About"

const SobrePage = () => {
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
    <Layout className="about">
      <SEO title="Conheça-me" />
      <S.Header>
        <S.Container className="line">
          <S.Nav>
            <div>
              <Link to="/">
                <ChevronLeft />
                voltar
              </Link>
            </div>
          </S.Nav>
          <S.ImageHeader>
            <Img fluid={data.file.childImageSharp.fluid} />
          </S.ImageHeader>
        </S.Container>
      </S.Header>
      <S.Content>
        <S.Container>
          <h1>Este é o sobre</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            mollitia doloremque, corporis ea repudiandae eius distinctio
            nesciunt possimus dolorum! Odit voluptates quod quibusdam iste
            saepe, delectus consequatur similique nulla quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            mollitia doloremque, corporis ea repudiandae eius distinctio
            nesciunt possimus dolorum! Odit voluptates quod quibusdam iste
            saepe, delectus consequatur similique nulla quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            mollitia doloremque, corporis ea repudiandae eius distinctio
            nesciunt possimus dolorum! Odit voluptates quod quibusdam iste
            saepe, delectus consequatur similique nulla quisquam?
          </p>
        </S.Container>
      </S.Content>
    </Layout>
  )
}

export default SobrePage
