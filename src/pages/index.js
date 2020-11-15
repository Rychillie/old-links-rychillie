import React from "react"
import Content from "../content/content"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Apresentation from "../components/Apresentation"
import * as S from "../styles/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Brazilian Frontend Developer" />
    <Apresentation />
    <S.Content>
      <S.Cards>
        <S.Container>
          {Content.map(item => (
            <a key={item.id} href={`${item.link}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </S.Container>
      </S.Cards>
    </S.Content>
  </Layout>
)

export default IndexPage
