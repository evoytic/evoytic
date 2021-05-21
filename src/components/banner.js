import * as React from "react"
import PropTypes from "prop-types"
import { Container, Banner, BannerMedia, Title, BannerContent, FONTS } from '../styles';
import IntroVideo from "../images/evoytic-intro.mp4"

const SiteBanner = () => (
  <Banner>
    <BannerMedia autoPlay loop muted>
        <source src={IntroVideo} type="video/mp4" />
    </BannerMedia>
    <Container className="banner-media" flex>
        <Title
          className="banner-title"
          as="h2"
          option={{
              size: "10rem",
              color: "white",
          }}
        >
            {`We devise solutions for every individual, team & org.`}
        </Title>
        <BannerContent><strong>{`Evoytic, Inc. - `}</strong>{`We're dedicated to designing the best of product development perfection with an emphasis on originality, creativity, and discovery.`}</BannerContent>
    </Container>

  </Banner>
)

SiteBanner.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
}

export default SiteBanner
