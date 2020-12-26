import React from "react"
import Content from "../content/content"

import HomeLayout from "../components/HomeLayout"
import SEO from "../components/seo"

import Apresentation from "../components/Apresentation"
import * as S from "../styles/Home"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Desenvolvedor Frontend e UX/UI Designer" />
    <Apresentation />
    <S.Content>
      <S.Cards>
        <S.Container>
          {Content.filter(item => !item.hidden).map(item => (
            <a key={item.title} href={`${item.link}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </S.Container>
      </S.Cards>
    </S.Content>
  </HomeLayout>
)

export default IndexPage
