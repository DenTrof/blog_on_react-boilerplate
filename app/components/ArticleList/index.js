import React from 'react';
import Article from 'components/Article';
import LI from 'components/LI';
import PropTypes from 'prop-types';
import ArticleListWrap from 'components/ArticleListWrap';
import UL from 'components/UL';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { makeArticles} from 'containers/HomePage/selectors';
import { makeFiltratedArticles } from 'containers/HomePage/selectors';

// import accordion from 'decorators/accordion'


class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array,
        // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func,
  }

  state = {
    openItemId: null,
  }

  render() {
    const { articlesStore } = this.props;
        // console.log(articlesStore);

        // articlesStore.map( article => console.log(article))

    const articleElements = articlesStore.map((article) => <LI key={article.id}>

      <ArticleListWrap>
        <Article
          article={article}
          isOpen={article.id === this.state.openItemId}
          toggleOpen={this.toggleOpenItem.bind(this, article.id)}
        />
      </ArticleListWrap>
    </LI>);

    return (
      <UL>
        { articleElements }
      </UL>
    );
  }

  toggleOpenItem(openItemId) {
        // console.log(openItemId);
    this.setState({ openItemId: openItemId === this.state.openItemId ? null : openItemId });
  }
}

const mapStateToProps = createStructuredSelector({
  articlesStore: makeFiltratedArticles(),

});

// const mapStateToProps = createStructuredSelector({
//  articlesStore: makeArticles(),

// })

export default connect(mapStateToProps)(ArticleList);

