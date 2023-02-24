import * as React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"

import Layout from "../components/layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Incentives from "../components/incentives"
import Promo from "../components/promo"
import { MainProduct } from "../components/main-product"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentWrapper>
      <Hero />
      <MainProduct />
      <Promo />
      <Incentives />
      <PrimaryButton
        text="Explore all products"
        onClick={() => navigate("products")}
      />
    </ContentWrapper>
  </Layout>
)

export default IndexPage

const ContentWrapper = styled.div`
  position: relative;
`

const BannerImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  margin: 0;
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: grid;
  gap: 10px;
`

const Title = styled.h1`
  color: white;
  margin: 0;
`

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`
