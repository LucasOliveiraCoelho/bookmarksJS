import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./static/css/Header.css";
import Logo from "./static/images/LogoBeblue.png";

function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="Header">
            <img src={Logo} alt="Logo" />
            <h1>Front-End Test</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
