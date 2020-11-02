import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Header from './Components/Header'

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Header />
          <Container>
            <Row>
              <p>Molding Machines</p>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}

export default App;
