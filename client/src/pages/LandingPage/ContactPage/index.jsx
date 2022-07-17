
import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const StyleWrapper = styled.div`

    span {
        color: #463418;
        text-decoration: underline;
    }

`

const ContactPage = () => {

    return (
        <StyleWrapper>
            <h2>Contact</h2>
            <Col xl={10} lg={10} className="centerText">
                <p>
                    Contact info coming soon
                </p>
            </Col>
        </StyleWrapper>
    );
}

export default ContactPage;