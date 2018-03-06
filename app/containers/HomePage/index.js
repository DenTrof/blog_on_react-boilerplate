/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
// import { loadRepos } from '../App/actions';
import CenteredSection from './CenteredSection';
import ArticleList from 'components/ArticleList';
// import {articles} from './fixtures';
import Counter from 'components/Counter';
// import { loadRepos } from 'containers/App/actions';
import ArticleSelect from 'components/ArticleSelect';
import DateRange from 'components/DateRange';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {

  }

  render() {
    return (

      <CenteredSection>
        <Counter />
        <ArticleSelect />
        <DateRange />
        <ArticleList />
      </CenteredSection>
    );
  }


}


// Wrap the component to inject dispatch and state into it
export default HomePage;
