import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Apresentation from "../components/Apresentation"
import * as S from "../styles/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Brazilian Frontend Developer" />
    <Apresentation />
    <S.Content>
      <h1>Hello World</h1>
    </S.Content>
  </Layout>
)

export default IndexPage
