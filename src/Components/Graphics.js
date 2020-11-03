import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gaugelist from './GaugeList'
import openSocket from 'socket.io-client'

const socket = openSocket("http://localhost:3000/")

class Graphics extends Component {

    state ={
        info: []
    }

    componentDidMount(){
        socket.on('getInfo', (info) => {
            
            this.setState({info})
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container>

                    <Row>
                        <Gaugelist
                            info={this.state.info}
                        />
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