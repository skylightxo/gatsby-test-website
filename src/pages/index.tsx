import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CarouselComponent } from "../components/Carousel";

const IndexPage = () => (
  <Layout>
    <SEO title="sveahemsidor" />
    <CarouselComponent />
  </Layout>
)

export default IndexPage
