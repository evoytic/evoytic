import * as React from "react"
import PropTypes from "prop-types"
import { Section, Container, Title, TitleSub, ProductLists } from '../styles';
import InvoicingApp from '../images/invoicing-app.svg'
import ChatApp from '../images/chat-app.svg'

const productData = [
    {
        id: 1,
        title: 'Invoicing App',
        description: 'Allows you to connect dots between your Project Management and Invoicing.',
        screenshot: InvoicingApp,
        stacks: ['React.js', 'Sails.js']
    },
    {
        id: 2,
        title: 'Chat Plugin',
        description: 'Allows you to connect dots between your Project Management and Invoicing.',
        screenshot: ChatApp,
        stacks: ['Wordpress', 'PHP']
    }
]
const ProductSection = () => (
    <Section className="section-product">
        <Container>
            <TitleSub color='#000'>{`Our work: around the web`}</TitleSub>
            <Title
                className="underline stroke"
                as='h3'
                option={{
                    size: '10rem',
                    color: 'white',
                }}
            >
                {`Making Beautiful things`}
            </Title>
            
        </Container>
        <ProductLists>
            {productData && productData.map(({ id, title, description, screenshot }) => {
                return (
                    <div className="product-item" key={id}>
                        <div className="product-media">
                            <img className="product-media__img" src={screenshot} alt={title}></img>
                        </div>
                        <div className="product-details">
                            <Title className="product-title" as="h4" option={{ size: '6rem' }}>{title}</Title>
                            <p className="product-desc">{description}</p>
                        </div>
                    </div>
                )
            })}
        </ProductLists>
    </Section>
)

ProductSection.propTypes = {
}

export default ProductSection
