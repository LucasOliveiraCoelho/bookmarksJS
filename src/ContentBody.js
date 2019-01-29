import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Menu from './Menu'
import List from './List'
import './ContentBody.css'
  
  const bookmarksArg = [
    {title: 'Teste 1', link: 'www.teste.com.br', tags: 'teste,teste2,teste3'},
    {title: 'Teste 2', link: 'www.teste.com.br', tags: 'teste,teste2,teste3'},
    {title: 'Teste 3', link: 'www.teste.com.br', tags: 'teste,teste2,teste3'}
  ];

class ContentBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.initialValue
        }
    }

    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <div className="body-app">
                        <Menu initialValue={1} />
                        <List bookmarks={bookmarksArg} />
                    </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

  export default ContentBody;