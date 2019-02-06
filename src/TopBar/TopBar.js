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
import { createMuiTheme, MuiThemeProvider, withStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TopMenu from './TopMenu.js';
import { connect } from "react-redux";
import {ChevronDown, ChevronUp, VolumeHigh, Facebook} from 'mdi-material-ui';
// import Slider from '@material-ui/lab/Slider';
import Popper from '@material-ui/core/Popper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import theme from '../modules/theme';


// import muiThemeable from 'material-ui/styles/muiThemeable';

// window.SetVolume = function(val)
// {
//     var player = document.getElementById('audioplayer');
//     console.log('Before: ' + player.volume);
//     player.volume = val / 100;
//     console.log('After: ' + player.volume);
// }
const topColor = '#757575';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 0.9,
      
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    playinfo: {
        width: '50%',
    },
    highlight: {
        background: 'yellow',
    },
    bigBar: {
        background: '#424242',
    },
  };

const mapStateToProps = state => {
    return{
        active: state.active,
        pages: state.pages,
        current: state.current,
    };
};

class ConTopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //     active: 'Home',
            open: false,
            audio:'pause',
            chev: false,
            audiovalue: 100,
            openpopper: false,
        };
        this.drawerOnClick = this.drawerOnClick.bind(this);
        this.drawerOffClick = this.drawerOffClick.bind(this);
        // this.handleNavClick = this.handleNavClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.chevClick = this.chevClick.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.popperClick = this.popperClick.bind(this);
        this.clickAway = this.clickAway.bind(this);

    }

    drawerOnClick() {
        this.setState({open: true})
    }

    drawerOffClick() {
        this.setState({open: false})
    }

    chevClick() {
        this.setState({chev: !this.state.chev});
    }

    toggle() {
        if(this.state.audio=='pause') {
        document.getElementById('audioplayer').play();
        this.setState({audio:'play'})
        }
        else {
            document.getElementById('audioplayer').pause();
            this.setState({audio:'pause'})

        }
    }

    handleVolumeChange(value) {
        this.setState({audiovalue: value})
    }

    popperClick(){
            this.setState({
                openpopper: !this.state.openpopper,
            })
        
        console.log(this.state.openpopper)

    }

    clickAway() {
        this.setState({
            openpopper: !this.state.openpopper,
        })
        console.log(this.state.openpopper)
    }
    // handleNavClick(page) {
        // this.props.handleNav(page);
        // this.setState({active: page});
    // }

    render() {
        const { classes } = this.props;

        var playcontrol
        var chevcontrol
        var extrainfo

        if(this.state.audio=='pause') {
         playcontrol = <PlayArrowIcon onClick={this.toggle} className={classes.audio} style={{color: this.props.theme.palette.primary.contrastText}} />
        }
        else {
          playcontrol = <PauseIcon onClick={this.toggle} className={classes.audio} style={{color: this.props.theme.palette.primary.contrastText}} />
        }
        if(this.state.chev==true) {
            chevcontrol = <ChevronUp onClick={this.chevClick} />;
            extrainfo = (
                <div>
                    <Typography align='right' color='inherit' variant='body2'>
                        WET inc. is a proud supporter of college radio. Click the play button to listen to our favorite, 91.5 FM WUML, Lowell.
                    </Typography>
                </div>
            )
           }
           else {
             chevcontrol = <ChevronDown onClick={this.chevClick} />;
             extrainfo = null
           }

           var small = (
            <div className={classes.root}>
            <AppBar position="fixed" className={classes.bigBar}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.drawerOnClick}>
                  <MenuIcon />
                </IconButton>
                <ClickAwayListener onClickAway={this.drawerOffClick}>
                    <div>
                    <Drawer open={this.state.open} >
                        <TopMenu pages={this.props.pages} drawerOffClick={this.drawerOffClick} /*handleNavClick={this.handleNavClick}*/ />
                    </Drawer>
                    </div>
                </ClickAwayListener>
                <Typography className={classes.grow} variant="h5" color="inherit" align='center'>
                  Worstead Engineering Technologies  
                </Typography>
                {/* <div className={classes.controls}>
                    <audio loop id={'audioplayer'} >
                    <source src='http://96.127.183.154/proxy/thotiger?mp=/;' type='audio/mpeg' />
                    </audio>
                    <Grid container spacing={0} alignItems='center' >
                        <Grid item>
                            <IconButton aria-label="Previous"  >
                              {playcontrol}
                             </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton color='inherit'>
                            {chevcontrol}
                            </IconButton>
                        </Grid>
                    </Grid>
                </div> */}

              </Toolbar>
            </AppBar>
          </div>
        )

        var smallBlock = (
            <div className={classes.root}>
            <AppBar position="static" color='primary'>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.drawerOnClick}>
                  <MenuIcon />
                </IconButton>
                <ClickAwayListener onClickAway={this.drawerOffClick}>
                    <div>
                    <Drawer open={this.state.open} >
                        <TopMenu pages={this.props.pages} drawerOffClick={this.drawerOffClick} /*handleNavClick={this.handleNavClick}*/ />
                    </Drawer>
                    </div>
                </ClickAwayListener>
                <Typography className={classes.grow} variant="h5" color="inherit" >
                  91.5FM WUML
                </Typography>
                <div className={classes.controls}>
                    <audio loop id={'audioplayer'} >
                    <source src='http://96.127.183.154/proxy/thotiger?mp=/;' type='audio/mpeg' />
                    </audio>
                    <Grid container spacing={0} alignItems='center' >
                        <Grid item>
                            <IconButton aria-label="Previous"  >
                              {playcontrol}
                             </IconButton>
                        </Grid>
                        {/* <Grid item className={classes.highlight}>
                            <IconButton color='inherit' onClick={this.popperClick}>
                            <VolumeHigh id='PopperAnchor' />
                            <Popper open={this.state.openpopper} anchorEl={document.getElementById('PopperAnchor')}>
                                <Card elevation={1}>
                                <CardContent>
                                <ClickAwayListener onClickAway={this.clickAway}>
                                <Slider value={10000} min={0} onChange={this.handleVolumeChange} max={22026.5} vertical/>
                                </ClickAwayListener>
                                </CardContent>
                                </Card>
                            </Popper>
                            </IconButton>
                            <input id="vol-control" type="range" min="0" max="100" step="1" oninput="SetVolume(this.value)" onchange="SetVolume(this.value)">
                            </input>
                            
                        </Grid> */}

                        <Grid item>
                            <IconButton color='inherit'>
                            {chevcontrol}
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>

              </Toolbar>
            </AppBar>
          </div>
        )

        var smallAppBar = [
            smallBlock,
            small
        ]

        return(
            smallAppBar
        )
    }
}

ConTopBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const TopBar = connect(mapStateToProps)(ConTopBar);

export default withTheme()(withStyles(styles)(TopBar));