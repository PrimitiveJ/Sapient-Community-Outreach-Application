
import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const AboutUsPage = () => {

    return (
        <div>
            <h2>About Us</h2>
            <Col xl={10} lg={10} className="centerText">
               <p>
                    Hey there! We're a team of five studious software developers studying web development at UNC Chapel Hill. 
               </p>
            </Col>
        </div>
    );
}

export default AboutUsPage;