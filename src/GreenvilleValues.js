import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from './modules/components/LayoutBody';
import Typography from './modules/components/Typography';
import suitcase from './modules/views/productValues1.svg';
import graph from './modules/views/productValues2.svg';
import clock from './modules/views/productValues3.svg';
import { Airplane, Flash, ChemicalWeapon, Domain, ImageFilterHdr } from 'mdi-material-ui';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#e1f5fe',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 20,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  tacks: {
      backgroundColor: '#e1f5fe',
      borderTopWidth: theme.spacing.unit *8,
      borderBottomWidth: theme.spacing.unit * 1,
      borderColor: '#e1f5fe',
      borderStyle: 'solid',
  },
});

function GreenvilleValues(props) {
  const { classes } = props;

  return (
<div >
    <Typography variant='h3' align='center' className={classes.tacks} >
        Greenville Site Features
    </Typography>
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Airplane style={{ fontSize: 70 }} />
              <Typography variant="h6" className={classes.title}>
                Low Transportation Cost
              </Typography>
              <Typography variant="h5">
                North Carolina sits in a sweet spot which minimizes distance and cost
                from raw material suppliers and end customers. NC also allows
                access to secondary international suppliers and customers.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Flash style={{ fontSize: 70 }} />
              <Typography variant="h6" className={classes.title}>
                Accessible Utilities
              </Typography>
              <Typography variant="h5">
                The Greenville site has nearby CSX rail as well as the
                infrastructure necessary to install water, sewage, and 
                other necessary utilities.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={clock}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Business Costs
              </Typography>
              <Typography variant="h5">
                North Carolina ranks as one of the best for 
                corporate businesses. It has a low corporate tax
                rate compared to other states.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ChemicalWeapon style={{ fontSize: 70 }} />
              <Typography variant="h6" className={classes.title}>
                Public Safety
              </Typography>
              <Typography variant="h5">
                Due to release concerns, especially regarding 
                chlorine gas, the site in Greenville is located
                in a non-dense population area. The surrounding
                area mainly consists of industrial buisnesses.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Domain style={{ fontSize: 70 }} />
              <Typography variant="h6" className={classes.title}>
                Greenville Greenfield
              </Typography>
              <Typography variant="h5">
                The Greenville site is also a greenfield site.
                This means the oportunity to customize the 
                infrastructure from the ground up, allowing
                for entirely modern, state of the art, construction.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ImageFilterHdr style={{ fontSize: 70 }} />
              <Typography variant="h6" className={classes.title}>
                Sensible Layout
              </Typography>
              <Typography variant="h5">
                75 Acres of prime North Carolina land allows for 
                sensible plant layout. This promotes safety and
                productivity through hazard mitigation by distance.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
</div>
  );
}

GreenvilleValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GreenvilleValues);
