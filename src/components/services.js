import * as React from "react"
import PropTypes from "prop-types"
import { Container, Title, TitleSub, Section, UnOrderingList } from '../styles';

const servicesList = [
    {
        id: 1,
        background: '#f9d423',
        title: 'Digital Marketing'
    },
    {
        id: 2,
        background: '#2575fc',
        title: 'Web/Mobile App'
    },
    {
        id: 3,
        background: '#ff9099',
        title: 'Web Design'
    },
    {
        id: 4,
        background: '#ccd031',
        title: 'E-Commerce'
    }
]

const ServicesSection = ({ title, email, address, siteTitle  }) => (
    <Section className="section-services">
        <Container>
            <TitleSub
                color='white'
            >{`What we do?`}</TitleSub>
            <Title
                className="underline"
                as='h3'
                option={{
                    size: '10rem',
                    color: 'white',
                    weight: '300'
                }}
            >
                {`Let's Grow Business Together.`}
            </Title>
            <UnOrderingList>
                {
                    servicesList && servicesList.map(({ id, background, title }) => {
                        return (
                            <li key={id} style={{background}}>
                                {title}
                            </li>
                        )
                    })
                }
            </UnOrderingList>
        </Container>
    </Section>
)

ServicesSection.propTypes = {
}

export default ServicesSection
