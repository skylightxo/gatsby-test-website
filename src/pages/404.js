import React from "react"

import { Layout } from "../components"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Hittades Inte" />
    <h1>404: Hittades Inte</h1>
    <p>Tyvärr, men vi har inte det du letar efter :( <br /> Men vi har mycket att erbjuda, gå tillbaka till hemsidan och kolla in.</p>
  </Layout>
)

export default NotFoundPage
