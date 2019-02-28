import React, {Component} from 'react'
import _ from 'lodash'
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
        this.handleChangeFilterDebounce = _.debounce(this.handleChangeFilter, 300)
    }

    handleAddBookmarks = e => {
        this.setState({
            bookmarksArg:[...this.state.bookmarksArg, e],
            bookmarksArgFilter:[]
        })
    }
    handleRemoveBookmarks = e => {
        let newArr = this.state.bookmarksArg.filter((bookmarks,i) =>
            i !== e
        )
        
        this.setState({
            bookmarksArg: newArr,
        })
    }
    handleRemoveTag = (indexBookmarks,indexTag) => {
        
        let newArray = this.state.bookmarksArg.map((val, index) =>
            index === indexBookmarks ? {...val, tags: val.tags.filter((tag,i) =>
                i !== indexTag
            )} : val
        )

        this.setState({
            bookmarksArg: newArray
        })
    }
    handleChangeFilter = e => {
        const textInputField = {
            tags: [e]
        };
        let bookmarksFilter = this.state.bookmarksArg.filter(
            bookmarks => bookmarks.tags.find(
                tags => tags.includes(textInputField.tags)
            )
        );

        if(bookmarksFilter.length === 0){
            bookmarksFilter = []
        }
        this.setState({
            bookmarksArgFilter: bookmarksFilter
        })
    }
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <div className='body-app'>
                        <Menu 
                            filterBookmarks={this.handleChangeFilterDebounce} 
                            addBookmarks={this.handleAddBookmarks}
                            />
                        <List 
                            removeBookmarks={this.handleRemoveBookmarks}
                            removeTag={this.handleRemoveTag} 
                            bookmarks={this.state.bookmarksArgFilter.length === 0 ? this.state.bookmarksArg : this.state.bookmarksArgFilter}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
      );
    }
}

export default ContentBody;