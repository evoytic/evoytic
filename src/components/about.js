import * as React from "react"
import PropTypes from "prop-types"
import { Section, Container, Title, TitleSub } from '../styles';

const AboutUsSection = () => (
    <Section className="section-about">
        <Container>
            <TitleSub>{`We we are.`}</TitleSub>
            <Title
                className="outline underline"
                as='h3'
                option={{
                    size: '6rem',
                    color: 'white',
                }}
            >
                {`To infinity & beyond`}
            </Title>
            <p className="section-intro">An expert team that helps companies get through customized product/web development, digital marketing, and e-commerce. We look at the best approach and help brands to get to a more profitable position than they are now.</p>
        </Container>
    </Section>
)

AboutUsSection.propTypes = {
}

export default AboutUsSection
