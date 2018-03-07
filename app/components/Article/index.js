import React from 'react';
import H4 from 'components/H4';
import H2 from 'components/H2';
import HeaderLink from 'components/Header/HeaderLink';
import PropTypes from 'prop-types';
import CommentList from 'components/CommentList';
import { CSSTransitionGroup } from 'react-transition-group';
import 'react-select/dist/react-select.css';// --- place for  CSSTransitionGroup  CSS  -----////
import { connect } from 'react-redux';
import { delArticles } from 'containers/HomePage/actions';


// import toggleOpen from 'decorators/toggleOpen';

class Article extends React.Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  }


  state = {
    updateIndex: 0,
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div>
        <H2>{article.title}</H2>
        <HeaderLink onClick={toggleOpen}>
          {!isOpen ? 'Open' : 'Close'}
        </HeaderLink>
        <HeaderLink onClick={this.hendelDelete.bind(this)}> Delete </HeaderLink>
        <CSSTransitionGroup
          transitionName="article"
                      // transitionAppear
          transitionEnterTimeout={1900}
          transitionLeaveTimeout={1900}
        >

          {this.getBody()}
        </CSSTransitionGroup>

      </div>
    );
  }

  hendelDelete = () => {
    const { delArticles, article } = this.props;
    delArticles(article.id);
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section >
        <H4>{article.text}</H4>
        <HeaderLink onClick={() => this.setState({ updateIndex: this.state.updateIndex + 1 })}>update key</HeaderLink>
        <CommentList
          article={article}
          ref={this.setCommentsRef} key={this.state.updateIndex}
        />
      </section>
    );
  }

  setCommentsRef = (ref) => {
//        console.log('---', ref)
  }
}

// function mapDispatchToProps( ) {
//   return {
//     addCounter: delArticles(),
//   };
// }


export default connect(null, { delArticles })(Article);

