import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { SiteHeader, Container, LetsTalkButton } from '../styles';
import logo from '../images/logo.svg'

const Header = ({ siteTitle, email }) => (
  <SiteHeader>
    <Container className="header" flex>
      <Link to="/">
        <img
          src={logo}
          alt={siteTitle}
          width={80}
          style={{
            display: `block`,
            margin: 0,
            lineHeight: 1.3
          }}
        />
      </Link>
      <LetsTalkButton href={`mailto: ${email}`}>Let's talk</LetsTalkButton>
    </Container>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
