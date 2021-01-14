import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { rem } from '../utils';

import Image from '../components/image';
import Layout from "../components/layout"
import SEO from "../components/seo"

// .carousel-indicators li{
//   background-color: #fff !important;
// }

// .carousel-indicators li .active{
//   background-color: #1C5BFF !important;
// }

const IndexPage = () => (
  <Layout>
    <SEO title="svenskahemsida" />
    <Carousel controls={false}>
      <Carousel.Item>
        <Image 
          src="First-carousel-bg.png"
          alt="First image"
        />
        <div style={{marginBottom: 64}}>
            <Image src="line.svg" alt=""/>
            <p>
              <span style={{fontFamily: "Raleway", fontSize: `${rem(34)}`, fontWeight: "bold", color: "#1C5BFF" }}>Sveahemsidor </span> <br />
              <span style={{fontFamily: "Raleway", fontSize: `${rem(34)}`}}>webbhotell och optimering</span>
            </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="Second-carousel-bg.png"
          alt="Second image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="Third-carousel-bg.png"
          alt="Third image"
        />
      </Carousel.Item>
    </Carousel>
  </Layout>
)

export default IndexPage
