import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Social from "../content/social"

import { ChevronLeft } from "@styled-icons/evaicons-solid/ChevronLeft"

import * as S from "../styles/About"

const SobrePage = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile_rychillie.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      icon: file(relativePath: { eq: "rychillie.png" }) {
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
            <Img fluid={data.icon.childImageSharp.fluid} />
          </S.ImageHeader>
        </S.Container>
      </S.Header>
      <S.Content>
        <S.Container>
          <h1>
            <span>Olá, meu nome é</span> Rychillie Umpirre de Oliveira
          </h1>
          <S.Apresentation>
            <S.Image>
              <div className="principal">
                <Img fluid={data.profile.childImageSharp.fluid} />
              </div>
              <S.Before>
                <Img fluid={data.profile.childImageSharp.fluid} />
              </S.Before>
            </S.Image>
            <S.About>
              <p>
                Sou um jovem estudante interessado em tecnologia, games e
                códigos. Sempre fui atrás de aprimorar meu conhecimento e buscar
                o que é de mais atual, não importando se é conhecido ou não,
                procurei sempre estar em meio a algo novo e diferente.
              </p>
              <p>
                Meu maior desejo é fazer parte das coisas, é estar envolvido.
                Poder deixar meu nome na história é meu objetivo; Ser conhecido!
              </p>
            </S.About>
          </S.Apresentation>
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
          <S.Contato>
            <form
              className="formcontato"
              action="/"
              name="Contact Form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="details">
                <input
                  className="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="textarea">
                <textarea
                  className="text"
                  name="message"
                  placeholder="Mensagem"
                  required
                />
              </div>
              <button className="enviar" type="submit">
                Enviar
              </button>
            </form>
          </S.Contato>
          <S.Footer>
            <p className="copy">© 2021 - Rychillie.</p>
          </S.Footer>
        </S.Container>
      </S.Content>
    </Layout>
  )
}

export default SobrePage
