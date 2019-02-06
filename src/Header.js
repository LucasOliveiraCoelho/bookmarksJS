import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Header.css';
import Logo from './static/images/LogoBeblue.png'

class Header extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <div className="Header">
                        <img src={Logo} alt='Logo' />
                        <h1>Front-End Test</h1>
                    </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }
  
  export default Header;