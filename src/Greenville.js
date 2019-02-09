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
import GreenvilleTitle from './GreenvilleTitle.js';

class Greenville extends React.Component {
    render() {
      return (
      <React.Fragment>
      <GreenvilleTitle />
      <GreenvilleValues />
      <SiteExpose />
      <AppFooter />
      </React.Fragment>
      );
    }
  }
  
  export default withRoot(Greenville);
  