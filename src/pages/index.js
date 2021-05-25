import * as React from "react"

import Layout from "../components/layout"
import SiteBanner from "../components/banner" 

import Seo from "../components/seo"
import AboutUsSection from "../components/about";
import ProductSection from "../components/product";
import ServicesSection from "../components/services";


const IndexPage = () => (
  <Layout gradient={false}>
    <Seo
      title="Startup, Solutions for Every Individual, Team &amp; Organization."
      keyword="web development, web app, mobile app, web design, e-commerce, digital marketing"
    />
    <SiteBanner/>
    <AboutUsSection />
    <ServicesSection />
    <ProductSection />
  </Layout>
)

export default IndexPage
