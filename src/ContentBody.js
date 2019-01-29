import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Menu from './Menu'
import List from './List'
import './ContentBody.css'
  
  const bookmarksArg = [
    {id: 1,title: 'Teste 1', link: 'http://www.teste.com.br', tags: 'teste'},
    {id: 2,title: 'Teste 2', link: 'http://www.teste.com.br', tags: 'teste2'},
    {id: 3,title: 'Teste 3', link: 'http://www.teste.com.br', tags: 'teste3'}
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