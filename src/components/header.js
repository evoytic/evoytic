import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { SiteHeader, Container, LetsTalkButton } from '../styles';
import logo from '../images/logo.svg'
import logoGradient from '../images/logo-g.svg'

const Header = ({ gradient, siteTitle, email }) => (
  <SiteHeader>
    <Container className="header" flex>
      <Link to="/">
        <img
          src={ gradient ? logoGradient : logo }
          alt={siteTitle}
          width={100}
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
