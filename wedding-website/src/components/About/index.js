import React from 'react';
import engagementPic from '../../assets/images/Dan+IzzEngagement.jpg';
import invite from '../../assets/images/invite2.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}><Image
                        src=
                        {engagementPic}
                        roundedCircle
                        fluid
                    /></Col>
                    <Col lg={3}><Image
                        src=
                        {invite}
                        fluid
                    /></Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
