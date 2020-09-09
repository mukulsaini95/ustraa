/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const getCategoryList = () =>
  createSelector(
    selectHome,
    homeState => homeState.categoryList,
  );

  const getIsViewAllItem = () =>
  createSelector(
    selectHome,
    homeState => homeState.isViewAllItem,
  );


  const activeCategory = () =>
  createSelector(
    selectHome,
    homeState => homeState.activeCategory,
  );


  const getIsFetching = () =>
  createSelector(
    selectHome,
    homeState => homeState.getIsFetching,
  );

  

export { selectHome, getCategoryList,getIsViewAllItem,getIsFetching ,activeCategory};

