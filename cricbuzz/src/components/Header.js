import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreatePlayer from './CreatePlayer'
import AllPlayer from './AllPlayer'
import Detail from './Details';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  button: {
    margin: theme.spacing(1),
    
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Home', 'View Players'].map((text, index) => (
          <ListItem button key={text}>
            {index % 2 === 0 ? <HomeIcon /> : <AssessmentOutlinedIcon /> }
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  
  return (
      <Router>
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Cricbuzz
            </Typography>
            <div style={{marginLeft:"780px"}}>
              <Button variant="outlined" className={classes.button} ><Link to="/create" style={{color:"white" ,border:"white"}}>Create</Link></Button>
              <Button variant="outlined" className={classes.button}><Link to="/show" style={{color:"white"}}>Show</Link></Button>
            </div>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                  classes={{
                  paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
              >
                  {drawer}
              </Drawer>
            </Hidden>
            
        </nav>
        </div>
        
        <Route path="/create" exact component={CreatePlayer}/>
        <Route path="/show" exact component={AllPlayer}/>
        <Route path="/show/:id" render ={props=><Detail {...props} />}></Route>
                
    </Router>
  );
}

export default ResponsiveDrawer;
