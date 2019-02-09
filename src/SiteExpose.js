import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from './modules/components/Typography';
import TextField from './modules/components/TextField';
import Snackbar from './modules/components/Snackbar';
import LayoutBody from './modules/components/LayoutBody';
import Button from './modules/components/Button';
import image from './GreenvilleRiver.jpg';
import { NaturePeople } from 'mdi-material-ui';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#aed581',
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`,
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
  },
  },
  bodywords: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
  },
  },

});

class SiteExpose extends React.Component {
  state = {
    open: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <LayoutBody className={classes.root} component="section" width="large">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={this.handleSubmit} className={classes.cardContent}>
                <Typography variant="h2" component="h2" gutterBottom className={classes.title}>
                  Environmentally Conscious
                </Typography>
                <Typography variant="h5" className={classes.bodywords}>
                  The Greenville site was specifically chosen with environmental concerns in mind. Chlorothalonil is 
                  harmful to aquatic life, which is why the site is located at least 3 miles from the closest body of water and 
                  is significantly farther from the closest major body of water.
                </Typography>
                <Typography align='center' >
                <NaturePeople style={{ fontSize: 60 }} />
                </Typography>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown>
              <div className={classes.imageDots} />
              <img
                src={image}
                alt="call to action"
                className={classes.image}
              />
            </Hidden>
          </Grid>
        </Grid>

      </LayoutBody>
    );
  }
}

SiteExpose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SiteExpose);