import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ContentPage, Title } from "../styles"

const TermsOfServices = () => (
  <Layout>
    <Seo title="Terms of Services" />
    <ContentPage>

      <Title as="h2">{`Terms of Services`}</Title>
      <p></p>
      <p>These terms and conditions outline the rules and regulations for the use of Evoytic's Website, located at <Link to='/'>https://evoytic.com/</Link>.</p>
      <p>By accessing this, website we assume you accept these terms and conditions. Do not continue to use Evoytic if you do not agree to take all of the terms and conditions stated on this page.</p>
      <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your &quot; refers to you, the person log on this website and compliant to the Company’s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

      <Title as="h3" option={{ color: 'rgba(0, 0, 0, 1)', size: '2rem', weight: '400'}}>{`Cookies`}</Title>
      <p>We employ the use of cookies. By accessing Evoytic, you agreed to use cookies in agreement with the Evoytic's Privacy Policy.</p>
      <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

      <Title as="h3" option={{ color: 'rgba(0, 0, 0, 1)', size: '2rem', weight: '400'}}>{`License`}</Title>
      <p>Unless otherwise stated, Evoytic and/or its licensors own the intellectual property rights for all material on Evoytic. All intellectual property rights are reserved. You may access this from Evoytic for your own personal use subjected to restrictions set in these terms and conditions. <br/>You must not:</p>
      <ul>
        <li>Republish material from Evoytic</li>
        <li>Sell, rent or sub-license material from Evoytic</li>
        <li>Reproduce, duplicate or copy material from Evoytic</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Redistribute content from Evoytic</li>
      </ul>

      <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Privacy Policy Generator.</p>
      <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Evoytic does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Evoytic, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Evoytic shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

      <Title as="h3" option={{ color: 'rgba(0, 0, 0, 1)', size: '2rem', weight: '400'}}>Cookies and Web Beacons</Title>
      <p>Like any other website, Evoytic uses <strong>cookies</strong>. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information. </p>
      <p>For more general information on cookies, please read <Link to="https://www.privacypolicyonline.com/what-are-cookies/">&quot;What Are Cookies&quot;</Link> from Cookie Consent.</p>
          </ContentPage>
  </Layout>
)

export default TermsOfServices
