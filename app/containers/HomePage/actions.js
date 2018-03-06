/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME, ADD_COUNTER, RES_COUNTER, DEL_ARTCLES, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, ADD_COMMENT_RANDOM_ID,
  TAKE_ALL_ARTICLES, TAKE_ALL_COMMENTS } from './constants';


export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function addCounter(value) {
  return {
    type: ADD_COUNTER,
    value,
  };
}

export function resCounter(value) {
  return {
    type: RES_COUNTER,
    payload: { value },
  };
}

// ----------------------- Actions for API -------------------------------//
export function onAsync(value) {
  return {
    type: TAKE_ALL_ARTICLES,
    payload: value,
  };
}
// export function takeComment(value) {
//   return {
//     type: TAKE_ALL_COMMENTS,
//     payload: value,
//   };
// }
// ---------------------------------------------------------------------//
export function delArticles(id) {
  return {
    type: DEL_ARTCLES,
    payload: { id },
  };
}
export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange },
  };
}

export function changeArticlesSelector(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected },
  };
}

export function addComment(comment) {
  // console.log(comment);
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}

export function addCommentIdArticle(randomCommentId, articleId) {
  return {
    type: ADD_COMMENT_RANDOM_ID,
    payload: {
      randomCommentId,
      articleId,
    },
        // generateId: true
  };
}

