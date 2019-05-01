import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Button, Row, Col, Container } from 'reactstrap';

import Gist from 'react-gist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Wow! it works"
    };

    axios.get(`https://shadowfalls.github.io/data.json`)
      .then((res) => {
        debugger;
      })
      .catch(err => {
        debugger;
      });
  }
  render() {
    return (
        <Container>
          <Row>
            <Col>
             <Gist id='4661db971dd4c7e7f7860f044654bd16' />
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
    );
  }
}
export default App;