 /**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel,
  takeLatest, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants';
// import { TAKE_ALL_ARTICLES } from 'containers/HomePage/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { delay } from 'redux-saga';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import Api from 'simple-api/api/mock';
import axios from 'axios';

import { onAsync, takeComment } from 'containers/HomePage/actions';


/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS, getRepos);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
//  Counter asinc fanction -----------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\
export function* asincRES() {
  // while (true) {
    // yield take(TAKE_ALL_ARTICLES);
                     // yield delay(3000);
  const dataArticles = yield axios.get('http://localhost:3000/api/article/');
                    // console.log(dataArticles)

  // ---------------------------  prinn all Articles -----------------------------------/
  const allArticles = dataArticles.data.map((articleA) => articleA);
                      // yield put(onAsync(dataArticles.data))
  yield put(onAsync(allArticles[0].title));
                      // console.log(dataArticles)


     // }
}

export function* allCommentsAsinc() {

                      // const dataComments = yield axios.get('http://localhost:3000/api/comment/')
                      // //console.log(dataComments.data.records);
                      // const allComments =  dataComments.data.records.map(function(commentsA) {
                      //   return commentsA;
                      // });
                      // yield put(takeComment(allComments))

}

//  It's  working code-----------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\

// export function* asincRESSS () {
//   yield takeLatest(RES_ASYNC, asincRES);
// }


//  It's  working code-----------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\

// export function* asincRESSS () {
//   yield delay(5000);
//   yield put({ type: 'boilerplate/Home/RES_ASYNC' })
//   yield takeLatest(RES_ASYNC);
// }


// Bootstrap sagas
export default [
  githubData,
  asincRES,
  allCommentsAsinc,
];
