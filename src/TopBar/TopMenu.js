import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { changePage } from '../actions/action-constructors';
import theme from '../modules/theme';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const styles = {
    activepage: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    item: {
        textDecoration: 'none',
        
    },
  };

const mapStateToProps = state => {
    return{
        active: state.active,
        pages: state.pages,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        changePage: page => dispatch(changePage(page))
        };
    };

class ConTopMenu extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {active: 'Home'};
    }

    navClick(page) {
        // this.setState({active: page});
        this.props.drawerOffClick();
        // this.props.handleNavClick(page); onClick={this.props.changePage.bind(this, newpage)} className={classes.activepage}
        // onClick={this.props.changePage.bind(this, newpage)}

    }

    render() {
        var list=[];
        var extension;
        const { classes } = this.props;
        for (var i=0; i < this.props.pages.length; i++) {
            extension = '/' + this.props.pages[i];
            list.push(
                <NavLink to={extension} className={classes.item} activeStyle={{backgroundColor: theme.palette.primary.main ,textDecoration: 'none'}}>
                <MenuItem key={this.props.pages[i]} >
                <Typography variant='subtitle1'>
                {this.props.pages[i]}
                </Typography>
                </MenuItem>
                </NavLink>
                );
            // if (this.props.active == 'Home') {
            //     extension = ''
            // }
            // else {
            //     extension = this.props.active
            // }
            // extension = '/' + this.props.active;
            // if (this.props.active == this.props.pages[i]) {
            //     var newpage = this.props.pages[i];
            //     list.push(<MenuItem key={this.props.pages[i]}  ><NavLink to={extension} activeClassName='activepage'>{this.props.pages[i]}</NavLink></MenuItem>)
            // }
            // else {
            //     var newpage = this.props.pages[i];
            //     list.push(<MenuItem key={this.props.pages[i]} ><NavLink to={extension} activeClassName='activepage'>{this.props.pages[i]}</NavLink></MenuItem>)
            // }
        }
        return(
            list
        )
    }

}

ConTopMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const TopMenu = connect(mapStateToProps, mapDispatchToProps)(ConTopMenu);

export default withStyles(styles)(TopMenu);