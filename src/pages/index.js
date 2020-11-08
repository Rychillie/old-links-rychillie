import React from "react"
import JSONData from "../content/content.json"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Apresentation from "../components/Apresentation"
import * as S from "../styles/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Brazilian Frontend Developer" />
    <Apresentation />
    <S.Content>
      <S.Container>
        {JSONData.content.map((data, index) => {
          return (
            <a key={`content_item_${index}`} href={`${data.link}`}>
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </a>
          )
        })}
      </S.Container>
    </S.Content>
  </Layout>
)

export default IndexPage
