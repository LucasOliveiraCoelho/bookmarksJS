import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Menu from './Menu'
import List from './List'
import './ContentBody.css'

class ContentBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookmarksArg: [],
            bookmarksArgFilter: []
        }
    }

    handleAddBookmarks = e => {
        this.setState({
            bookmarksArg:[...this.state.bookmarksArg, e],
        })
    }
    handleRemoveBookmarks = id => {
        let newArr = this.state.bookmarksArg.splice(id,1)
        this.setState({
            bookmarks: newArr,
        })
    }
    handleRemoveTag = id => {
        let tagPosition = id.split(' ')
        let valueTag = this.state.bookmarksArg[tagPosition[0]].tags[tagPosition[1]]

        let myArray = this.state.bookmarksArg[tagPosition[0]].tags
        let index = myArray.indexOf(valueTag);

        if (index !== -1) myArray.splice(index, 1)

        // TODO 
        // Create second Array and setState in bookmarks array
        this.setState({
        })
    }
    handleChangeFilter = e => {
        const textInputField = {
            tags: [e]
        };
        const auxBookmarks = this.state.bookmarksArg.filter(bookmarks => bookmarks.tags.find(bookmarks => textInputField.tags.includes(bookmarks)));
        this.setState({
            bookmarksArgFilter: auxBookmarks
        })
        
    }
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <div className="body-app">
                        <Menu filterBookmarks={this.handleChangeFilter} addBookmarks={this.handleAddBookmarks} initialValue={1} />
                        <List removeBookmarks={this.handleRemoveBookmarks} removeTag={this.handleRemoveTag} bookmarks={this.state.bookmarksArgFilter.length !== 0 ? this.state.bookmarksArgFilter : this.state.bookmarksArg} />
                    </div>
                </Col>
            </Row>
        </Container>
      );
    }
  }

  export default ContentBody;