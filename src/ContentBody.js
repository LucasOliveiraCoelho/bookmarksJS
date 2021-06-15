import React, { Component } from "react";
import _ from "lodash";
import { Row, Col, Container } from "reactstrap";
import Menu from "./Menu";
import List from "./List";
import "./static/css/ContentBody.css";

export const FORMS = {
  ADD: 1,
  FILTER: 0,
};

class ContentBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: FORMS.ADD,
      bookmarksArg: [],
      bookmarksArgFilter: [],
    };
    this.handleChangeFilterDebounce = _.debounce(this.handleChangeFilter, 300);
  }

  handleAddBookmarks = (e) => {
    this.setState({
      bookmarksArg: [...this.state.bookmarksArg, e],
    });
  };
  handleRemoveBookmarks = (e) => {
    let newArr = this.state.bookmarksArg.filter((bookmarks, i) => i !== e);

    this.setState({
      bookmarksArg: newArr,
    });
  };
  handleRemoveTag = (indexBookmarks, indexTag) => {
    let newArray = this.state.bookmarksArg.map((val, index) =>
      index === indexBookmarks
        ? { ...val, tags: val.tags.filter((tag, i) => i !== indexTag) }
        : val
    );

    this.setState({
      bookmarksArg: newArray,
    });
  };
  handleChangeFilter = (e) => {
    const textInputField = {
      tags: [e],
    };

    this.setState((state) => {
      let bookmarksFilter = state.bookmarksArg.filter((bookmarks) =>
        bookmarks.tags.find((tags) => tags.includes(textInputField.tags))
      );

      if (bookmarksFilter.length === 0) {
        bookmarksFilter = [];
      }

      return {
        bookmarksArgFilter: bookmarksFilter,
      };
    });
  };
  handleAlterMenu = (selectedMenu) => {
    this.setState({
      selectedMenu: selectedMenu,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedMenu === FORMS.ADD &&
      this.state.selectedMenu === FORMS.FILTER
    ) {
      this.setState((state) => ({
        bookmarksArgFilter: state.bookmarksArg,
      }));
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="body-app">
              <Menu
                filterBookmarks={this.handleChangeFilterDebounce}
                addBookmarks={this.handleAddBookmarks}
                alterMenu={this.handleAlterMenu}
                selectedMenu={this.state.selectedMenu}
              />
              <List
                removeBookmarks={this.handleRemoveBookmarks}
                removeTag={this.handleRemoveTag}
                bookmarks={
                  this.state.selectedMenu === FORMS.ADD
                    ? this.state.bookmarksArg
                    : this.state.bookmarksArgFilter
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContentBody;
