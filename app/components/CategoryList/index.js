/**
 *
 * CategoryList
 *
 */

import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  categoryContent: {
    padding: 10,
    marginTop: theme.spacing(13),
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 12px 0px",
    left: 0,
    right: 0,
    zIndex: 999,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8),
    },
  },
  filterLeftIcon: {
    fontWeight: 500,
    marginRight: 20
  },
  filterRightIcon: {
    fontWeight: 500,
    marginLeft: 20
  },
  cardMediaCategory: {
    position: "relative",
    paddingLeft: 8,
    paddingRight: 8
  },
  cardMediaCategoryImg: {
    borderRadius: 8
  },
  activeCategory: {
    width: "92%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "rgba(0,0,0,.6)",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontWeight: 900,
    borderRadius: 8,
  },
  category: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "rgba(255,255,255,.5)",
    color: "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontWeight: 900,
    borderRadius: 8,
    '&:hover': {
      cursor: "pointer",
    },
  }
}));


function CategoryList({ data, getLoadCategoryDetails, activeCategory }) {
  const classes = useStyles();
  const [isViewAllItemDropDown, setIsViewAllItemDropDown] = useState(false)
  return (
    <Box container="true" className={classes.categoryContent} >
      <Typography variant="h5" color="textPrimary" style={{ marginLeft: 20 }} gutterBottom>
        Our Prodouct
          </Typography>
      <Box
        container="true"
        display="flex"
        direction="row"
        alignItems="center"
        overflow="scroll"
        style={{ width: "100%", padding: 10 }} >
        <Button
          aria-controls="simple-menu" aria-haspopup="true"
          className={classes.filterLeftIcon}
          onClick={() => setIsViewAllItemDropDown(true)}>
          <span>
            <i className="fa fa-filter" aria-hidden="true"></i>
          </span>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={isViewAllItemDropDown}
          open={Boolean(isViewAllItemDropDown)}
          onClose={() => setIsViewAllItemDropDown(false)}
        >
          {data.map(category => <MenuItem item="true" key={category.category_id} onClick={() =>{
            setIsViewAllItemDropDown(false)
            getLoadCategoryDetails(category.category_id)
            }}>{category.category_name}</MenuItem>)}
        </Menu>

        {data.map((category) => (
          <CardMedia
            title={category.category_name}
            className={classes.cardMediaCategory}
            item="true" key={category.category_id}
            onClick={() => getLoadCategoryDetails(category.category_id)}
          >
            <img src={category.category_image} height="70" width="200" className={classes.cardMediaCategoryImg} />
            <div className={activeCategory === category.category_id ? classes.activeCategory : classes.category}>{category.category_name}</div>
          </CardMedia>
        ))}
        <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.filterRightIcon} onClick={() => setIsViewAllItemDropDown(true)}>
          <span>
            <i className="fa fa-filter" aria-hidden="true"></i>
          </span>
        </Button>
      </Box>
    </Box >
  );
}

CategoryList.propTypes = {};

export default memo(CategoryList);
