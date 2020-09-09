/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductList from "../../components/ProductList"
import CategoryList from "../../components/CategoryList"
import { loadCategory, viewAllItemChangeHandler, getLoadCategoryDetails } from './actions';
import { getCategoryList, getIsViewAllItem, activeCategory,getIsFetching } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Loader from "../../components/LoadingIndicator"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const key = 'home';

const useStyles = makeStyles((theme) => ({
  viewMoreContainer: { flexDirection: "column", marginBottom: 20 },
  viewMore: { fontWeight: 500, width: 150 },
}));

export function HomePage({
  loadCategory,
  categoryList,
  isViewAllItems,
  viewAllItemChangeHandler,
  getLoadCategoryDetails,
  activeCategory,
  isFetching
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    loadCategory()
  }, []);

  const classes = useStyles();
  if (isFetching)
    return <Loader />
  else
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <CategoryList data={categoryList.category_list} getLoadCategoryDetails={getLoadCategoryDetails} activeCategory={activeCategory} />
        <ProductList products={categoryList.product_list.products} isViewAllItems={isViewAllItems} />
        <Box container="true"
          display="flex"
          direction="column"
          alignItems="center"
          className={classes.viewMoreContainer}>
          {isViewAllItems ?
            <Button variant="outlined" startIcon={<i className="fa fa-minus" />} color="secondary" className={classes.viewMore} onClick={viewAllItemChangeHandler}>View Less</Button>
            :
            <Button variant="outlined" className={classes.viewMore} color="primary" startIcon={<i className="fa fa-plus" />} onClick={viewAllItemChangeHandler}>  View More</Button>
          }
        </Box>
        <Footer />
      </React.Fragment >
    );
}

HomePage.propTypes = {
  isFetching: PropTypes.bool,
  loadCategory: PropTypes.func,
  username: PropTypes.string,
  isViewAllItems: PropTypes.bool,
  viewAllItemChangeHandler: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  categoryList: getCategoryList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  isViewAllItems: getIsViewAllItem(),
  activeCategory: activeCategory(),
  isFetching:getIsFetching()
});

export function mapDispatchToProps(dispatch) {
  return {
    loadCategory: () => dispatch(loadCategory()),
    viewAllItemChangeHandler: () => dispatch(viewAllItemChangeHandler()),
    getLoadCategoryDetails: (id) => dispatch(getLoadCategoryDetails(id))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
