import React from 'react';
import Comment from 'components/Comment';
import toggleOpen from 'decorators/toggleOpen';
import HeaderLink1 from 'components/Header/HeaderLink1';
import { CSSTransitionGroup } from 'react-transition-group';
import CommentForm from 'components/CommentForm';
import { connect } from 'react-redux';
import { makeSelectLoading } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';

class CommentList extends React.Component {
    // static defaultProps = {
    //     comments: []
    // }

  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />);
    }


    const { article, isOpen, toggleOpen } = this.props;
    const text = isOpen ? 'hide comments' : 'show comments';
    return (
      <div>
        <HeaderLink1 onClick={toggleOpen}>{text}</HeaderLink1>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1800}
        >
          {this.getBody()}
        </CSSTransitionGroup>

      </div>
    );
  }

  getBody() {
    const { article: { comments = [], id }, isOpen } = this.props;

        // comments.map(id => console.log(id));
    const commentsElements = comments.map((id) => <li key={id}><Comment id={id} /></li>);
    if (!isOpen) return null;
    if (!comments.length) {
      return (<div> <p>No comments yet</p>
        <p><CommentForm articleId={id} /></p></div>);
    }

    return (
      <div>
        <ul>
          {commentsElements}
        </ul>
        <p><CommentForm articleId={id} /></p>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});


export default connect(mapStateToProps)(toggleOpen(CommentList));
