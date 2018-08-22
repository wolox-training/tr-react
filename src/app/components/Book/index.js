import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators as bookActions } from '../../../redux/books/actions';

class Book extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return <p>{JSON.stringify(this.props.books)}</p>;
  }
}

Book.propTypes = {
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  )
};

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => {
    dispatch(bookActions.getBooks());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
