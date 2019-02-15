import React, {Component} from 'react'
import { Row, Col, Container } from 'reactstrap'
import Menu from './Menu'
import List from './List'
import './static/css/ContentBody.css'

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
            bookmarksArgFilter:[]
        })
    }
    handleRemoveBookmarks = e => {
        let newArr = this.state.bookmarksArg.splice(e,1)
        this.setState({
            bookmarks: newArr,
        })
    }
    handleRemoveTag = e => {
        let tagPosition = e.split(' ')
        let valueTag = this.state.bookmarksArg[tagPosition[0]].tags[tagPosition[1]]

        let myArray = this.state.bookmarksArg[tagPosition[0]].tags
        let index = myArray.indexOf(valueTag)
        if (index !== -1) myArray.splice(index, 1)

        // console.log(this.state.bookmarksArg[tagPosition[0]])

        /* TEST CREATE NEW ARRAY
        let arrayRemoveItem = this.state.bookmarksArg.splice(tagPosition[0],1)
        let fullArray = arrayRemoveItem + myArray
        console.log(myArray)
        */

        // TODO 
        // Create second Array and setState in bookmarks array
        this.setState({
        })
    }
    handleChangeFilter = e => {
        const textInputField = {
            tags: [e]
        };
        let aux = this.state.bookmarksArg.filter(
            bookmarks => bookmarks.tags.find(
                tags => tags.includes(textInputField.tags)
            )
        );
        if(aux.length === 0){
            aux = [{title:'', link:'', tags:[]}]
        }
        this.setState({
            bookmarksArgFilter: aux
        })
    }
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <div className='body-app'>
                        <Menu filterBookmarks={this.handleChangeFilter} addBookmarks={this.handleAddBookmarks} initialValue={1} />
                        <List removeBookmarks={this.handleRemoveBookmarks} removeTag={this.handleRemoveTag} 
                            bookmarks={this.state.bookmarksArgFilter.length === 0 ? this.state.bookmarksArg : this.state.bookmarksArgFilter} />
                    </div>
                </Col>
            </Row>
        </Container>
      );
    }
}

export default ContentBody;