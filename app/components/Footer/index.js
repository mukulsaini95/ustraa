/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const footers = [
  {
    title: 'Company',
    description: ['About Us', 'History', 'Brand Protection', 'Privacy Policy', 'Terms Of use', 'Sulphates and Parabens', 'Ustraa - Grooming Tips', 'Intern With Us', 'We Are Hiring'],
  },
  {
    title: 'General Info',
    description: ['Subscription Plans', 'Subscription Cancellation Policy', 'Contact Us', 'Warranty', 'Replacement & Refund', 'FAQs', 'Next Day Delivery', 'Shipping and Handling'],
  },
  {
    title: 'Order Related Enquiries:',
    description: ['Email: help@ustraa.com', 'Call: 1800 103 6121 | 1800 419 8407'],
  },
  {
    title: 'Trade Related Enquiries:',
    description: ['saurabh@happilyunmarried.com'],
  },
];

const Copyright = () => {
  return (
    <Box container="true"
      display="flex"
      direction="row"
      alignItems="center"
      overflow="scroll"
      style={{ width: "100%", padding: "10px 80px 10px 200px" }} >
      <Container maxWidth="md" style={{ padding: 0 }}>
        <Typography variant="body2" color="textSecondary" >
          Happily Unmarried is India's coolest youth lifestyle brand. We are irreverent, desi, fun and forever young.

      </Typography>

        <Typography variant="body2" color="textSecondary" >
          © 2020 Happily Unmarried. All Rights Reserved CIN/LLPIN: --------------------------------------

      </Typography>


      </Container>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          Do checkout our women’s range
        <a >
            <span className="icon-hu-logo OnlyLogo-iairob logo" />
          </a>
        </Typography>
      </Container>
    </Box>
  );
}

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
  footer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  ustraaMainContent: { paddingBottom: 20, paddingLeft: 0 },
  copyRight: {
    backgroundColor: "white",
    height: 80,
    display: "none",
    [theme.breakpoints.up('sm')]: {
      display: "block"
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Container className={classes.ustraaMainContent}>
          <a >
            <span className="icon-ustraa-logo OnlyLogo-iairob logo" />
          </a>
          Ustraa is a range of grooming products, for men. Helping our Bros look their best since 2015.
        </Container>
        <Grid container spacing={4} justify="space-evenly" >
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="xl" className={classes.copyRight}>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

Footer.propTypes = {};

export default memo(Footer);
