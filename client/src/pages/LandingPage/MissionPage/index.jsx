


import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const StyleWrapper = styled.div`

    span {
        color: #483922;
        text-decoration: underline;
        font-family: inherit;
        font-size: inherit;
    }

`

const MissionPage = () => {

    return (
        <StyleWrapper>
            <h2>Our Mission</h2>
            <Col xl={10} lg={10} className="centerText">
                <p>
                    Progress starts from the ground up, and that means everything that happens in your local neighborhood <span>matters</span>. 
                    However, we recognize that it's not always easy finding ways to help out and contribute
                    to your community.
                </p>
                <p>
                    Our mission is to make this opportunity accessible to everyone by providing the free and valuable resources
                    needed to organize any successful project.
                </p>
            </Col>
        </StyleWrapper>
    );
}

export default MissionPage;
