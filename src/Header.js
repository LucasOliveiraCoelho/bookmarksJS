import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <div className="Header">
                        <img src={require('./static/images/LogoBeblue.png')} alt='Logo' />
                        <h1>Front-End Test</h1>
                    </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }
  
  export default Header;