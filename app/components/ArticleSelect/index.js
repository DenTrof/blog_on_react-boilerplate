import React, { PropTypes }from 'react';
//import {normalizedArticles} from 'containers/HomePage/fixtures';
import Select from 'react-select';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeArticlesSelector } from 'containers/HomePage/selectors';
import { makeArticles } from 'containers/HomePage/selectors';
import { changeArticlesSelector } from 'containers/HomePage/actions';
import 'react-select/dist/react-select.css';



class ArticleSelect extends React.Component {
    // static propTypes = {
    //     articles: PropTypes.array.isRequired,
    //    }

   
    render() {
        const { selected, articles } = this.props
       
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange.bind(this)}
        />
    }

     handleChange = (selected) => {
        this.props.changeArticlesSelector(selected.map(option => option.value))
    }

}
const mapStateToProps = createStructuredSelector({
         selected: makeArticlesSelector(),
         articles: makeArticles(),
})

export default connect(mapStateToProps, {changeArticlesSelector})(ArticleSelect);
