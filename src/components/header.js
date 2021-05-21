import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { SiteHeader, Container, LetsTalkButton } from '../styles';
import logoWhite from '../images/logo.svg'
import logoGradient from '../images/logo-g.svg'

const Header = ({ gradient, siteTitle, email }) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      let isScrolled = window.scrollY > 40;
      if( isScrolled !== scrolled ) {
        setScrolled(!scrolled);
      }
    }
    document.addEventListener('scroll', handelScroll, { passive: true })
    return () => {
      document.addEventListener('scroll', handelScroll)
    }
  }, [scrolled])

  if(scrolled && !gradient ) {
    gradient = true
  }

  return(
    <SiteHeader className={scrolled ? 'scrolled' : ''}>
      <Container className="header" flex>
        <Link to="/">
          <img
            src={ gradient ? logoGradient : logoWhite }
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
