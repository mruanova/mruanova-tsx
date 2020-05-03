import React from 'react';
import logo from './giphy.gif';
import aws from './aws-certified-logo_color-horz_270x45.png';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import d3 from 'd3';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'gray'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
    return (
      <div className="App">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>Portfolio</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Mauricio Ruanova</h1>
          <h2>Software Engineer</h2>
          <img src={aws} className="Aws-logo" alt="aws" />
        </header>
      </div>
    );
  }

  export default App;