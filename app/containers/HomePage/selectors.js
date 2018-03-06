/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';


const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username'));

const makeSelectCounter = () => createSelector(
  selectHome,
  (homeState) => homeState.get('counter'));

const makeArticles = () => createSelector(
  selectHome,
  // (homeState) => homeState.get('articlesStore'));
 (homeState) => homeState.get('articlesStore').toJS());
 // --------------- its for articlesStore: normalizedArticles--------------------------------------//
const makeDateRange = () => createSelector(
  selectHome,
  (homeState) => homeState.get('dateRange'));

const makeArticlesSelector = () => createSelector(
  selectHome,
  (homeState) => homeState.get('selected'));


const makeArticlesStore5 = () => createSelector(
  selectHome,
  (homeState) => homeState.get('articlesStore5'));

// -------------------- make Comments by Articls id (normalize data)-----------------------------------//
const getCommentsId = (state, props) => props.id;
const makeComments = () => createSelector(
  selectHome, getCommentsId,
  (homeState, id) =>
  // console.log('-----', 'привет')
    // return homeState.get('commentStore').find((comment) => comment.id === id);
     homeState.get('commentStore').toJS().find((comment) => comment.id === id)
    // -------- its for articlesStore: normalizedArticles------------------------//
  );
// ------------------------  Logic for ArticleList Filters  ----------------------------------------- //


const makeFiltratedArticles = () => createSelector(selectHome,
  (articlesStates) => articlesStates.get('articlesStore').toJS().filter((article) => {
  // return articlesStates.get('articlesStore').filter((article)-- its for API
    const published = Date.parse(article.date);

    return (!articlesStates.get('selected').length || articlesStates.get('selected').includes(article.id))
   && (!articlesStates.get('dateRange').from || !articlesStates.get('dateRange').to
    || (published > articlesStates.get('dateRange').from && published < articlesStates.get('dateRange').to));
  }));

export {
  selectHome,
  makeSelectCounter,
  makeDateRange,
  makeArticlesSelector,
  makeArticles,
  makeSelectUsername,
  makeComments,
  makeFiltratedArticles,
  makeArticlesStore5,

};
