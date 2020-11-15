import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Mutley from "../images/rabugento.gif"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="errorPage">
      <div className="row">
        <h1>404: Que vigarice essa página não foi encontrada</h1>
        <img src={Mutley} alt="Cachorrinho engraçado rindo" />
      </div>
      <Link to="/">Voltar ao inicio</Link>
    </div>
  </Layout>
)

export default NotFoundPage
