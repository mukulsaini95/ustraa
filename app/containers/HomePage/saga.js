/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import * as CONSTANTs from "./constants";
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
const getHeader = () => {
  return {
    "Content-Type": "application/json; charset=utf-8"
  }
}
const baseUrl = "https://backend.ustraa.com/rest/V1/api/";
export function* getLoadCategory() {
  const requestURL = `${baseUrl}homemenucategories/v1.0.1?device_type=mob`;
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, getHeader());
    yield put({ type: CONSTANTs.LOAD_CATEGORY_SUCCESS, response });
  } catch (error) {
    yield put({ type: CONSTANTs.LOAD_CATEGORY_FAILURE, error });
  }
}

export function* getLoadCategoryDetails(action) {
  const requestURL = `${baseUrl}catalog/v1.0.1?category_id=${action.id}`;
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, getHeader());
    yield put({ type: CONSTANTs.LOAD_CATEGORY_DETAILS_SUCCESS, response });
  } catch (error) {
    yield put({ type: CONSTANTs.LOAD_CATEGORY_DETAILS_FAILURE, error });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(CONSTANTs.LOAD_CATEGORY, getLoadCategory);
  yield takeLatest(CONSTANTs.LOAD_CATEGORY_DETAILS, getLoadCategoryDetails);
}
