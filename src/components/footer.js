import * as React from "react"
import PropTypes from "prop-types"
import { SiteFooter, FooterEmail, Container, Row, Column, FooterLinks, FooterLink, Title, SocialLinks } from '../styles';
import logo from '../images/logo.svg'


const Footer = ({ email, address, siteTitle  }) => (
  <SiteFooter>
    <Container>
      <img
        className="logo-footer"
        src={logo}
        alt={siteTitle}
        width={80}
        style={{
          display: `block`,
          marginBottom: '6rem',
          lineHeight: 1.3
        }}
      />
      <FooterEmail className="email email__footer" href={`mailto: ${email}`}>{email}</FooterEmail>
      <Row>
        <Column className="half">
          <Title
            as="h6"
            className="address address__footer outline"
          >{address}</Title>
        </Column>
        <Column className="half ">
          <SocialLinks>
            <li>
              <a
                className="social-link"
                target="_blank" href="http://linkedin.com/company/evoytic"
                rel="nofollow">{`LinkedIn`}</a>
            </li>
            <li>
              <a
                className="social-link"
                target="_blank" href="https://www.twitter.com/evoytic"
                rel="nofollow">{`Twitter`}</a>
            </li>
            <li>
              <a
                className="social-link"
                target="_blank" href="https://www.facebook.com/evoytic"
                rel="nofollow">{`Facebook`}</a>
            </li>
          </SocialLinks>
        </Column>

      </Row>
      <FooterLinks>
        <span className="copyright">
          © {new Date().getFullYear()} {siteTitle}
        </span>
        <FooterLink to="/privacy-policy">{`Privacy`}</FooterLink>
        <FooterLink to="/terms-of-services">{`Terms`}</FooterLink>
      </FooterLinks>
    </Container>
  </SiteFooter>
)

Footer.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
}

export default Footer
