

/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import { ADD_COUNTER, RES_COUNTER, DEL_ARTCLES, CHANGE_DATE_RANGE, CHANGE_SELECTION,
         CHANGE_USERNAME, ADD_COMMENT, ADD_COMMENT_RANDOM_ID, TAKE_ALL_ARTICLES, TAKE_ALL_COMMENTS } from './constants';

// ------------------ This Data from File, not fro API (working)----------------------------------------//
import { normalizedArticles, normalizedComments } from './fixtures';


// The initial state of the App
const initialState = fromJS({ counter: 0,
  articlesStore5: {}, articlesStore: normalizedArticles,
  commentStore: normalizedComments,
  /* Data to ArticlSelect*/ dateRange: { from: null, to: null }, selected: [],
  username: '',

});


function homeReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.name.replace(/@/gi, ''));

    case ADD_COUNTER:
      return state.set('counter', state.get('counter') + action.value);

    case RES_COUNTER:
      return state.set('counter', state.get('counter') * payload.value);

// ------------------------------------- Data from API--------------------------------------------//
    case TAKE_ALL_ARTICLES:
      return state.set('articlesStore5', payload);
        // console.log(state.get('articlesStore5'))
    // case TAKE_ALL_COMMENTS:
        // return state.set('commentStore', payload);
// ---------------------------------------------------------------------------------------------//
    case DEL_ARTCLES:
      return state.set('articlesStore',
          // state.get('articlesStore').filter( article => article.id !== payload.id ));

          state.get('articlesStore').filter((article) => article.get('id') !== payload.id));
    case CHANGE_DATE_RANGE:
      return state.set('dateRange', payload.dateRange);

// ---------------- ------ Selection all articles in HomePage --------------------------------/
    case CHANGE_SELECTION:
      return state.set('selected', payload.selected);

    case ADD_COMMENT:
      return state.set('commentStore', state.get('commentStore').concat(payload));

    case ADD_COMMENT_RANDOM_ID:
      const articleIndex = state.get('articlesStore').findIndex((article) =>
        // return article.id === payload.articleId.articleId;
         article.get('id') === payload.articleId.articleId);

      return state.setIn(['articlesStore', articleIndex, 'comments'],
      state.getIn(['articlesStore', articleIndex, 'comments']).concat(payload.randomCommentId));


// -------------------------------OLD Code -----------------------------------------//
// const itemDen = state.get('articlesStore').find(item => item.id === payload.articleId.articleId);
// const itemDen5 = itemDen.comments.concat(payload.randomCommentId);

// const den = fromJS(state.get('articlesStore'))
// console.log(den)


// console.log(state.get('articlesStore').filter( article => article.id === payload.articleId.articleId )[0].comments.concat(payload.randomCommentId))
// return state.set('articlesStore', state.get('articlesStore')
  // .filter( article => article.id === payload.articleId.articleId ).concat(payload.randomCommentId));


    default:
      return state;
  }
}

export default homeReducer;

