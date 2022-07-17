
import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const StyledPageContainer = styled.div`
    h2 {
        text-align: center;
        font-family: 'Edu VIC WA NT Beginner', cursive;
        font-size: 2.1rem;
        color: #a5d0ac;
        margin-bottom: 2rem;
    }

    .centerText {
        margin-left: auto;
        margin-right: auto;
    }

    .centerText > * {
        margin-bottom: 25px;
    }

    .centerText p {
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
        text-align: center;
    }
`

const ContactPage = () => {

    return (
        <StyledPageContainer>
            <h2>Contact</h2>
            <Col xl={8} lg={8} className="centerText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore quos, alias assumenda et, animi minima praesentium pariatur obcaecati amet ducimus officia delectus perferendis eligendi hic veritatis dolorem illum sed necessitatibus a, totam quia earum repellendus sit! Blanditiis excepturi qui laudantium cumque dolorum dolores reiciendis voluptatem corrupti. Fuga, dolore fugiat.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci, voluptates error eligendi quibusdam, velit tempore soluta ducimus sit temporibus vitae repudiandae laudantium, praesentium eveniet optio. Voluptatibus, quae quaerat dignissimos voluptates possimus commodi laudantium expedita, ipsam laboriosam, provident est adipisci consequatur quisquam totam explicabo. Ipsa?</p>
            </Col>
        </StyledPageContainer>
    );
}

export default ContactPage;