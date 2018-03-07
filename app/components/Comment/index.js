import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { makeComments } from 'containers/HomePage/selectors';


function Comment({ comment }) {
  return (
    <div>
      <p>{ comment.text } <b>by { comment.user }</b></p>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
	// from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = () => {
  const commentSelector = makeComments();

  return (state, PropsId) => ({
    comment: commentSelector(state, PropsId),
  });
};


export default connect(mapStateToProps)(Comment);
