import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { InstagramAlt } from "@styled-icons/boxicons-logos/InstagramAlt"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Twitch } from "@styled-icons/boxicons-logos/Twitch"
import { Youtube } from "@styled-icons/boxicons-logos/Youtube"
import { Telegram } from "@styled-icons/boxicons-logos/Telegram"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"

import * as S from "./styled"

const Apresentation = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rychillie.png" }) {
        childImageSharp {
          fixed(width: 240, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <S.Header>
      <S.Content>
        <S.Image>
          <Img fixed={data.file.childImageSharp.fixed} />
        </S.Image>
        <h1>Hey, I'm Rychillie FrontEnd Developer and Content Creator.</h1>
        <S.Social>
          <S.MyLink
            href="https://twitter.com/rychillie"
            title="Tiwitter"
            target="_blank"
          >
            <Twitter />
          </S.MyLink>
          <S.MyLink
            href="https://www.instagram.com/rychillie"
            title="Instagram"
            target="_blank"
          >
            <InstagramAlt />
          </S.MyLink>
          <S.MyLink
            href="https://www.linkedin.com/in/rychillie"
            title="Linkedin"
            target="_blank"
          >
            <Linkedin />
          </S.MyLink>
          <S.MyLink
            href="https://github.com/rychillie"
            title="Github"
            target="_blank"
          >
            <Github />
          </S.MyLink>
          <S.MyLink
            href="https://www.twitch.tv/rychillie"
            title="Twitch"
            target="_blank"
          >
            <Twitch />
          </S.MyLink>
          <S.MyLink
            href="https://www.youtube.com/rychillie"
            title="YouTube"
            target="_blank"
          >
            <Youtube />
          </S.MyLink>
          <S.MyLink
            href="https://t.me/s/rychiii"
            title="Telegram"
            target="_blank"
          >
            <Telegram />
          </S.MyLink>
        </S.Social>
      </S.Content>
    </S.Header>
  )
}

export default Apresentation
