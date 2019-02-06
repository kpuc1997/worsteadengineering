import React, { Component } from 'react';
import Home from './Home';
import Greenville from './Greenville'
import TopBar from './TopBar/TopBar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const mapStateToProps = state => {
  return{
      active: state.active,
      pages: state.pages,
  };
};

class App extends Component {
  render() {
    var page = this.props.active;
    if (this.props.active == 'Home') {
      page = <Home />
    };
    if (this.props.active == 'Greenville') {
      page = <Greenville />
    };
    return (
    <Router>
      <div className="App">
        <TopBar />

        {page}
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Greenville" component={Greenville} />

      </div>
    </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
