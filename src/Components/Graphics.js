import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import openSocket from 'socket.io-client'

//const socket = openSocket("http://localhost:3000/")

class Graphics extends Component {

    state ={
        data: []
    }

    render() {
        return (
            <React.Fragment>
                <Container>

                    <Row>
                        <Col>ssssssssssssssssssssssssssssssssssssssssssssss</Col>
                        <Col>ssssssssssssssssssssssssssssssssssssssssssssss</Col>
                        <Col>ssssssssssssssssssssssssssssssssssssssssssssss</Col>
                    </Row>
                    <Row>
                        <Col xs="3">.col-3</Col>
                        <Col xs="auto">.col-auto - variable width content</Col>
                        <Col xs="3">.col-3</Col>
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default Graphics;