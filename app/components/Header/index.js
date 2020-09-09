/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {  makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black"
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    borderRadius: 2,
    paddingTop:5,
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "block",
      marginLeft: theme.spacing(15.75),
    },
    width: 550,
    height:50
  },
  searchMobile: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(8.75),
      borderRadius: 2,
    },
    display: "block",
    [theme.breakpoints.up('sm')]: {
      display: "none"
    },
    width: 320,    
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: "black",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadiusRight: 5,
    zIndex: 999,
  },
  inputRoot: {
    color: 'inherit',
    width: "100%",
    height:"90%",
    padding:theme.spacing(1,1,1,1,)
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    position: "relative",
    paddingRight: 40,
    border: "none",
    outline: "none",
    height:"100%",
    backgroundColor: "#efefef",
    color: `rgba(0, 0, 0, 0.87)`,
    opacity: 1,
    marginRight: 0,
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(4),
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    borderBottom: 0,
    backgroundColor:"white",  
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(15.5),
      paddingRight: theme.spacing(15.5),
    },
  },
  helpButton: {
    borderRadius: 50,
    height: 40,
    backgroundColor: "#f85a01",
    color: "white",
    margin: 7,
    marginLeft: 30,
    width: 100,
    display: "none",
    [theme.breakpoints.up('lg')]: {
      display: "block",
    },
  },
  themeColor: {
    color: "rgb(21, 126, 188)"
  },
  messageIcon:{
    color: "rgb(21, 126, 188)",
    display: "block",
    [theme.breakpoints.up('sm')]: {
      display: "none",
    },
  },
   paddingFive:{
     padding:5
   },
   mainLogo:{
     paddingTop:10
   },
   sectionDesktop: {
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed"  className={classes.appBar}>
      <Grid container={true} xs={12} item={true} className={classes.paddingFive}>
        <IconButton
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <a className={classes.mainLogo}>
          <span className="icon-ustraa-logo OnlyLogo-iairob logo" />
        </a>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search for the product"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 17 new notifications"  >
            <Badge badgeContent={4} className={classes.themeColor} anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            className={classes.themeColor}
          >
            <AccountCircle />
          </IconButton>
          <Button variant="contained" className={classes.helpButton} >
            Help?
        </Button>
        </div>
        <Box container="true"
          display="flex"
          direction="row"
          alignItems="center"
          overflow="scroll" >

          <div className={classes.searchMobile}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for the product"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <MessageIcon className={classes.messageIcon} />
          </IconButton>
        </Box >
      </Grid>
    </AppBar>
  );
}

Header.propTypes = {};

export default memo(Header);
