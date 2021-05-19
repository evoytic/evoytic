/**
 * 
 * 
 */


import styled from "styled-components"
import { Link } from "gatsby"
import FooterBg from './images/superman.svg'


// MEASURE (Height, Width, Padding, Margin)
const CONTAINER_WIDTH = '1200px';
const BANNER_HEIGHT = '90vh';
const HEIGHT_100 = '100%';
const WIDTH_100 = '100%';
const WIDTH_50 = '50%';
const SECTION_MIN_HEIGHT = '80vh';

const LG = CONTAINER_WIDTH;
const XS = '767px';
const XS_UP = '768px';
const XXS = '480px';

// COLORS
const WHITE = '#ffffff';
const BLACK = '#000000';

const FOOTER_BG = '#3744ea'

// FONT SIZES
const FONTS = {
  BASE    : '1.4rem',
  HERO    : '4rem',
  BIG     : '5.5rem',
  LARGE   : '3rem',
  NORMAL  : '0.875rem',
  SMALL   : '0.875rem',
  TINY    :'0.625rem',
}

const LIGHT = '300';
const BOLD = '700';
const REGULAR = '400';

const SINGLE_PAGE_COTENT_WIDTH = '66rem';

// UTILITY CONSTANTS
const DISPLAY_FLEX = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'Wrap'
}

const DISPLAY_FLEX_COL = {
    display: 'flex',
    flexDirection: 'column',
}

const V_CENTER = {
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const GRADIENT = (direction, cf, cs, pf, ps) => ({
  backgroundColor: `${cf}`,
  backgroundImage: `linear-gradient(${direction}, ${cf} ${pf ? pf : 0}%, ${cs} ${ps ? ps : 50}%)`,
})

// GLOGAL CONTAINER
export const Container = styled.div`
  ${props => (props.flex ? DISPLAY_FLEX : null)};
  margin: 0 auto;
  max-width: ${CONTAINER_WIDTH};
  padding: ${props => props.paddingTop || 0 } 15px ${props => props.paddingBottom || 0 };
`;

// GLOBAL ROW
export const Row = styled.div`
  ${DISPLAY_FLEX_COL}
  margin: 0 -15px;
  @media only screen and (min-width: ${XS_UP}) {
    flex-direction: row;
  }
`;

// GLOBAL ROW - HALF
export const Column = styled.div`
  box-sizing: border-box;
  flex: 0 0 ${WIDTH_100};
  max-width: ${WIDTH_100};
  padding: 0 15px;

  @media only screen and (min-width: ${XS_UP}) {
    &.half {
      max-width: ${WIDTH_50};
      flex: 0 0 ${WIDTH_50};
    }
  }
`;


// PAGE CONENT - FOR LEAGLE
export const ContentPage = styled.div`
  padding: 0 0 10rem;

  p {
    color: rgba(0, 0, 0, .6);
    font-size: 1.5rem;
    line-height: 2;
  }

  .content {
    &-page--heading {
      margin-bottom: 4rem;
      ${GRADIENT('120deg', 'white', '#dfe9f3', 0, 100)};
      padding: 20rem 15px 10rem;
      text-align: center;
      color: #ff4e50;

      @media only screen and (max-width: ${XS}) {
        padding-top: 15rem;
        padding-bottom: 5rem;
        font-size: 3rem;
      }
    }

    &-wrap {
      padding: 0 15px;
      margin: 0 auto;
      max-width: ${SINGLE_PAGE_COTENT_WIDTH};
      width: ${WIDTH_100};
    }

    &-title {
      line-height: 1.4;
      margin-block-start: 3rem;
      @media only screen and (max-width: ${XS}) {
        font-size: 2rem;
      }
    }

    &-unlist {
      margin: 0;
      padding: 0;

      &--item {
        align-items: center;
        color: rgba(0, 0, 0, .6);
        display: flex;
        font-size: 1.5rem;
        line-height: 2;
        list-style: none;

        &:before {
          background-color: rgba(0, 0, 0, .6);
          border-radius: 50%;
          content: '';
          display: block;
          flex: 0 0 .6rem;
          height: .6rem;
          margin-right: 2rem;
          width: .6rem;
        }
      }
    }
  }
`;

export const SiteHeader = styled.header`
  left: 0;
  position: fixed;
  top: 0;
  width: ${WIDTH_100};
  padding: 4rem 0;
  z-index: 9999;

  .header {
    align-items: center;
  }

  &.scrolled {
    background-color: ${WHITE}
    padding: 2rem 0;
    box-shadow: rgb(0 0 0 / 20%) 0 0 1rem;
  }

  @media only screen and (max-width: ${XS}) {
    padding: 1.5rem 0;
  }


`;

// HEADER LET'S TALK BUTTON
export const LetsTalkButton = styled.a`
  ${GRADIENT('230deg', '#ff9472', '#e4336f', 0, 100)};
  border-radius: 0.4rem;
  color: ${WHITE};
  display: inline-block;
  font-size: 1.6rem;
  font-weight: ${BOLD};
  height: 5rem;
  letter-spacing: 0.1rem;
  line-height: 5rem;
  margin-left: auto;
  padding: 0 3rem;
  text-decoration: none;
`;

// HOME PAGE BANNER
export const Banner = styled.div`
  height: ${BANNER_HEIGHT};
  margin: 0 auto;
  position: relative;
  ${GRADIENT('120deg', '#3744ea', '#3392e4', 0, 100)};
  
  .banner-media {
    height: ${HEIGHT_100};
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 10;
  }
`;

// HOME PAGE BANNER VIDEO
export const BannerMedia = styled.video`
  width: ${WIDTH_100};
  height: ${HEIGHT_100};
  position: absolute;
  object-fit: cover;
  z-index: 9;
`;

// BANNER DESCRIPTION
export const BannerContent = styled.p`
  color: ${WHITE};
  display: block;
  font-size: 1.6rem;
  line-height: 1.8;
  max-width: 60%;
  opacity: 0.7;
  padding-top: 1rem;
  
  @media only screen and (max-width: ${XS}) {
    max-width: ${WIDTH_100};
    text-align: center;
  }
`;

// TITLE 
export const Title = styled.div`
  font-size: ${ props => props.option?.size || '4rem'};
  color: ${ props => props.option?.color || BLACK};
  line-height: ${ props => props.option?.lineHeight };
  font-weight: ${ props => props.option?.weight || '700'};

  &.underline {
    &::after {
      content: '';
      background-color: ${WHITE};
      display: block;
      height: 2px;
      width: 5rem;
      margin: 4rem auto;
    }
  }

  &.outline,
  &.stroke {
    -webkit-background-clip: text;

  }

  &.outline {
    -webkit-text-fill-color: transparent;

    &,
    &::after {
      ${GRADIENT('135deg', '#2af598', '#009efd')};
    }
  }

  &.stroke {
    -webkit-text-stroke: .3rem transparent;
    letter-spacing: .3rem;

    &,
    &::after {
      ${GRADIENT('230deg', '#f4d03f', '#16a085', 50, 50)};
    }
  }

  &.banner-title {
    margin-top: 5%;
    max-width: 90%;
  }
  
  @media only screen and (max-width: ${XS}) {
    font-size: 6rem;

    &.banner-title {
      text-align: center;
      font-size: 4.5rem;
      max-width: ${WIDTH_100};
    }
  }
`;

// GLOBAL - SUB TITLE
export const TitleSub = styled.span`
  color: ${props => props.color || BLACK };
  font-size: ${FONTS.BASE};
  font-weight: ${BOLD};
  letter-spacing: 0.2rem;
  display: block;
  margin-bottom: 2rem;
`;

// GLOBAL SECTION
export const Section = styled.section`
  ${DISPLAY_FLEX_COL};
  ${V_CENTER}
  box-sizing: border-box;
  min-height: ${SECTION_MIN_HEIGHT};
  padding: 15rem 0;

  .section-intro {
    width: 90%;
    margin: 2rem auto 0;
 
    @media only screen and (min-width: ${XS_UP}) {
      max-width: 80rem;
    } 
  }

  &.section {
    &-services {
      ${GRADIENT('to right', '#ff9472', '#e4336f')};

      .section-intro {
        color: ${WHITE}
      }
    }

    &-about {
      .section-intro {
        color: ${BLACK};
        opacity: 0.5;
      }
    }

    &-product {
      height: auto;
    }
  }
`;


// SITE FOOTER
export const SiteFooter = styled.footer`
  padding: 12rem 0 0;
  background-color: ${FOOTER_BG};
  position: relative;
  overflow: hidden;

  > div {
    position: relative;
    z-index: 10;
  }

  &::after {
    content: '';
    background-image: url(${FooterBg});
    background-repeat: no-repeat;
    background-size: 60rem;
    background-position: 70% 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .outline {
    ${GRADIENT('-255deg', '#ffffff', '#737cf1')};
  }

  @media only screen and (max-width: ${XS}) {
    background-position: 75% 50%;
    padding-top: 7rem;
    text-align: center;

    &::after {
      display: none;
      background-size: 50rem;
      top: 5rem;
      opacity: 0.2;
    }

    .logo-footer {
      margin: 0 auto 3rem !important;
    }

    .outline {
      font-size: 3rem;
      line-height: 1.4;
    }
  }
`;

// FOOTR LINKS GROUP
export const FooterLinks = styled.div`
  color: ${WHITE};
  font-size: 1.2rem;
  padding: 7rem 0 5rem;
  display: flex;

  .copyright {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.4;
    margin-right: auto;
    opacity: 0.6;
  }

  @media only screen and (max-width: ${XS}) {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 0;
  }

`;

// FOOTER LINK ITEMS (INTERNAL PAGES)
export const FooterLink = styled(Link)`
  color: ${WHITE};
  display: inline-block;
  margin: 0 0 0 2rem;
  padding: .2rem 0;
  text-decoration: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

// FOOTER EMAIL ADDRESS
export const FooterEmail = styled.a`
  background-color: #0c1ac1;
  color: ${WHITE};
  font-size: 2.5rem;
  font-weight: ${LIGHT};
  display: inline-block;
  letter-spacing: 0.4rem;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: ${XS}) {
    font-size: 1.8rem;
    text-align :center;
  }
`;


export const UnOrderingList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 0 auto;
  width: ${WIDTH_100};

  li {
    background-color: ${WHITE};
    color: ${WHITE};
    padding: 2rem 3rem;
    margin: .5rem;
    font-size: 3rem;
    line-height: 1;
    font-weight: ${BOLD};
    white-space: nowrap;
    box-shadow: rgb(234 60 119) 0 .2rem .5rem;
  }
`;

// FOOTER SOCIAL LINKS
export const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;

  .social-link {
    color: ${WHITE};
    display: inline-flex;
    font-size: ${FONTS.BASE};
    letter-spacing: 0.2rem;
    list-style: none;
    opacity: 0.6;
    padding: 0.2rem 0;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${XS}) {
    display: flex;
    justify-content: center;
    padding: 2rem 0 5rem;
    margin-top: 3rem;
    
    .social-link {
      padding: 0.5rem 1rem;
      margin: 0 .5rem;
      border: 1px solid;
    }
  }
`;


// PRODUCT LISTS
export const ProductLists = styled.div`
  max-width: 900px;
  width: ${WIDTH_100};
  margin-top: 2rem;
  
  @media only screen and (min-width: ${XS_UP}) {
    flex-direction: row;    
  }
  
  .product {
    &-item {
      ${DISPLAY_FLEX_COL}
      align-items: center;
    }

    &-item,
    &-details,
    &-media {
      width: ${WIDTH_100};
    }
    
    &-details {
      text-align: center;
      box-sizing: border-box;
      padding: 3rem;
      strong {
        font-size: 1.4rem;
        font-weight: 400;
        background-color: #3744ea;
        color: ${WHITE};
        padding: 0.5rem 1rem;
        display: inline-block;
        margin-right: 0.4rem;
        border-radius: 0.3rem;
      }
    }

    &-media {
      position: relative;
      height: 60vh;
      box-sizing: border-box;

      &__img {
        object-fit: contain;
        width: ${WIDTH_100};
        height: ${HEIGHT_100};
      }
    }
    
    &-title,
    &-desc {
      margin: 0 0 2rem;
    }

    &-title {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }

    &-desc {
      color: ${BLACK};
      opacity: 0.5;
      width: ${WIDTH_100};
    }
    @media only screen and (min-width: ${XS_UP}) {
      &-item {
        flex-direction: row;    

        &:nth-child(even) {
          flex-direction: row-reverse;
          margin-top: 10rem;
        }
      }

      &-details {
        width: ${WIDTH_50};
        text-align: left;
      }

      &-media {
        padding: 0;
        width: 70%;
      }
  
    }

  }
`;
