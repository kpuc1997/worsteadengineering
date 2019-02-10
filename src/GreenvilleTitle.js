import withRoot from './modules/withRoot';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import SiteExpose from './SiteExpose.js';
import GreenvilleValues from './GreenvilleValues.js';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import plot from './plot.jpg';
import logo from './WET.png';
import Grid from '@material-ui/core/Grid';
import presentation from './sitepresentation.pptx';



const backgroundImage = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjovOvJvq3gAhUOPN8KHdsPCqcQjRx6BAgBEAU&url=https%3A%2F%2Feverything-pr.com%2Fgreenville-north-carolina-seeking-marketing-partner%2F&psig=AOvVaw0P7So6zOTgricHpMY4HHFZ&ust=1549761749938621'


const styles = (theme) => ({
    root: {
        backgroundColor:  theme.palette.primary.light,
        padding: theme.spacing.unit *2,
        alignContent: 'center',
    },
    card: {
        margin: 'auto',
        width: theme.spacing.unit*45,
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing.unit*40,
        },
    },
    title: {
        padding: theme.spacing.unit*5,
        color: 'white',
        backgroundColor: '#424242',
        align: 'center',
        width: theme.spacing.unit*125,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            width: theme.spacing.unit*40,
            padding: theme.spacing.unit*1,
        },
        borderRadius: theme.spacing.unit*1,
    },
    spacer: {
        borderWidth: theme.spacing.unit*2,
    },

    logo: {
        width: theme.spacing.unit*70,
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing.unit*40,
        },
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    topback: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing.unit*4,
    },
  });



class GreenvilleTitle extends React.Component {
    render() {
       const { classes } = this.props;
      return (
      <React.Fragment  >
    <div className={classes.topback} >
              <div className={classes.spacer} >
              </div>

    <Typography variant='h3' align='center' className={classes.title} >
        Greenville Chlorothalonil Plant
    </Typography>
    <div className={classes.spacer} />
    </div>
    <div className={classes.root} >
        
    
      <Card className={classes.card} >
      <CardMedia 
      component='img'
        image={plot}
        title="Get that land baby"
      />
          <CardContent>
      <Typography variant='subtitle2' align='center' >
        1906 Old Creek Road,<br />Greenville,<br/>North Carolina<br/>
        </Typography>
        <Typography variant='subtitle2' align='center' >
        The site of WET inc.'s<br/>newest commercial venture
      </Typography>
      </CardContent>
      
      </Card>
    </div>
    <div className={classes.spacer}>
            <img src={logo} className={classes.logo} />
            <Typography variant='subtitle1' align='center' >
                Find the presentation here!<br />
                <a href={presentation} download style={{ textDecoration:'none', fontWeight: 'bold' }} >
                    Greenville Chlorothalonil Plant Location
                </a>
            </Typography>
          </div>
      </React.Fragment>
      );
    }
  }

  GreenvilleTitle.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(withRoot(GreenvilleTitle));
