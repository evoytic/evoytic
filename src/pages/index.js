import * as React from "react"

import Layout from "../components/layout"
import SiteBanner from "../components/banner" 

import Seo from "../components/seo"
import AboutUsSection from "../components/about";
import ProductSection from "../components/product";
import ServicesSection from "../components/services";


const IndexPage = () => (
  <Layout gradient={false}>
    <Seo title="Startup, SaSS Based &amp; Consulting" />
    <SiteBanner/>
    <AboutUsSection />
    <ServicesSection />
    <ProductSection />
  </Layout>
)

export default IndexPage
