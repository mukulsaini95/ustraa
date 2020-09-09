/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import * as CONSTANTs from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  categoryList: {
    category_list: [],
    product_list: {
      count: 0,
      products: [],
    },
  },
  activeCategory: null,
  isViewAllItem: false,
  getIsFetching:true
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONSTANTs.LOAD_CATEGORY_SUCCESS:
        draft.categoryList = action.response;
        draft.activeCategory = action.response.category_list[0].category_id
        draft.getIsFetching = false
        break;
      case CONSTANTs.IS_VIEW_ALL_ITEMS:
        draft.isViewAllItem = !draft.isViewAllItem
        break;
      case CONSTANTs.LOAD_CATEGORY_DETAILS:
        draft.activeCategory = action.id;
        draft.isViewAllItem = false
        break;
      case CONSTANTs.LOAD_CATEGORY_DETAILS_SUCCESS:
        draft.categoryList.product_list = action.response;
        break;
    }
  });

export default homeReducer;
