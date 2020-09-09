/**
 *
 * ProductList
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  imageContainerDesktop: {
    height: 300,
    width: 300,
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "block"
    },
  },
  imageContainerMobile: {
    height: 150,
    width: 220,
    display: "block",
    objectFit: "cover",
    [theme.breakpoints.up('sm')]: {
      display: "none"
    },
  },
  productMobileContainer: {
    width: "100%",
    borderBottom: "solid 2px #f0f0f0;",
    padding: 10,
    height: 190,
  },
  productDesktopContainer: {
    width: "calc(100%-100px)",
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    height: 500,
  },
  priceMobile: {
    color: " #757575",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.4,
    textDecoration: "line-through",
  },
  addToCart: {
    backgroundColor: "#4fcf64",
    color: "white",
    fontWeight: 500,
    marginTop: 10,
    width: 150
  },
  outOfStock: {
    backgroundColor: "#b0b0b0",
    color: "white",
    fontWeight: 500,
    marginTop: 10,
    width: 150
  },
  desktopViewContainer: {
    backgroundColor: "white",
    margin: 0,
    paddingLeft: 180,
    paddingRight: 180
  },
  mobileViewContainer: {
    backgroundColor: "white",
    margin: 0,
    padding: 0,
  },
  productDetail: {
    flexDirection: "column",
  },
  viewMoreContainer: { flexDirection: "column", marginBottom: 20 },
  viewMore: { backgroundColor: "#4fcf64", color: "white", fontWeight: 500, width: 150 },
  productTitle: {
    minHeight: 60,
    wordWrap: "break-word"
  }
}));



function ProductList({ products, isViewAllItems }) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  let items = []
  if (isViewAllItems) {
    items = products
  } else {
    items = products.slice(0, 3)
  }
  if (matches) {


    return <Container maxWidth="xl" container="true"  component="main" className={classes.desktopViewContainer}>
      <Grid xs={12} container={true} item={true}>
        <Grid container={true} justify="center" spacing={5} item={true}>
          {items.map((product) => (
            <Grid key={product.id} container={false} item={true}>
              <Box container="true"
                display="flex"
                direction="column"
                alignItems="center"
                overflow="scroll"
                className={classes.productDesktopContainer}
              >
                <Box container="true"
                  display="flex"
                  direction="column"
                  alignItems="center"
                  overflow="scroll"
                >
                  <CardMedia
                    title="Paella dish"
                    // item key={category.id}
                    className={classes.imageContainerDesktop}

                  >
                    <img src={product.image_urls.x520} height="100%" width="100%" style={{ borderRadius: 8 }} />
                  </CardMedia>


                </Box>
                <Box container="true"
                  display="flex"
                  direction="column"
                  className={classes.productDetail}

                >
                  <Typography variant="h6" className={classes.productTitle} color="textPrimary" gutterBottom>
                    {product.name}
                  </Typography>
                  <Box display="flex"
                    direction="row"
                    alignItems="space-evenly">
                    <Typography variant="h6" color="textPrimary" gutterBottom >
                      ₹ {product.final_price}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" className={classes.priceMobile} gutterBottom>
                      ₹ {product.price}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                      ({product.weight} {product.weight_unit})
                    </Typography>
                  </Box>
                  <Box container="true"
                    display="flex"
                    direction="row"
                    alignItems="flex-start">
                    {[1, 2, 3, 4, 5].map((rating, i) => {
                      if (i < Math.round(product.rating)) {
                        return <i className="fa fa-star checked" key={i}></i>
                      }
                      return <i className="fa fa-star" key={i}></i>
                    })}
                  </Box>
                  {product.is_in_stock ?
                    <Button variant="contained" className={classes.addToCart}>Add to Cart</Button>
                    :
                    <Button variant="contained" className={classes.outOfStock} disabled>Out of Stock</Button>
                  }
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Container>
  } else {
    return <Container maxWidth="xl" component="main" className={classes.mobileViewContainer}>
        {items.map(product => (
          // Enterprise card is full width at sm breakpoint
            <Box container="true" alignItems="flex-end"
              display="flex"
              direction="row"
              alignItems="center"
              overflow="scroll"
              key={product.id}
              className={classes.productMobileContainer}
            >
              <Box container="true"
                display="flex"
                direction="row"
                alignItems="center"
                overflow="scroll"
              >
                <CardMedia
                  title="Paella dish"
                  // item key={category.id}
                  className={classes.imageContainerMobile}

                >
                  <img src={product.image_urls.x520} height="100%" width="100%" style={{ borderRadius: 8 }} />
                </CardMedia>


              </Box>
              <Box container="true"
                display="flex"
                direction="column"
                // alignItems="flex-start"
                style={{ flexDirection: "column" }}

              >

                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Body Wash - Black Magic - 200ml
            </Typography>
                <Box display="flex"
                  direction="row"
                  alignItems="space-evenly">
                  <Typography variant="h6" color="textPrimary" gutterBottom >
                    ₹ {product.final_price}

                  </Typography>
                  <Typography variant="h6" color="textPrimary" className={classes.priceMobile} gutterBottom>
                    ₹ {product.price}
                  </Typography>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    ({product.weight} {product.weight_unit})
              </Typography>
                </Box>
                <Box container="true"
                  display="flex"
                  direction="row"
                  alignItems="flex-start"
                  style={{ flexDirection: "row" }}>
                  {[1, 2, 3, 4, 5].map((rating, i) => {
                    if (i < Math.round(product.rating)) {
                      return <i className="fa fa-star checked" key={i}></i>
                    }
                    return <i className="fa fa-star" key={i}></i>
                  })}
                </Box>

                {product.is_in_stock ?
                  <Button variant="contained" className={classes.addToCart}>Add to Cart</Button>
                  :
                  <Button variant="contained" className={classes.outOfStock} disabled>Out of Stock</Button>
                }
              </Box>
            </Box>
        ))}
    </Container>
  }
}

ProductList.propTypes = {};

export default memo(ProductList);
