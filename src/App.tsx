import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Header from './scenes/Header/Header';
import { useStyles } from './useStyles';
import './App.css';
import Example from './scenes/Example/Example';
import Project from './interfaces/Project';
import ProjectsService from './services/ProjectsService';

const App: FC = () => {
  const classes = useStyles();
  // const defaultProject = new Project();
  const [projects, setProjects] = React.useState([]);
  /** get inventory items from database */
  ProjectsService.getProjects()
    .then((response: any) => {
      const temp = response.data.body.Items.sort((a: Project, b: Project) => {
        return a.ProjectId - b.ProjectId;
      });
      setProjects(temp);
    })
    .catch((error: any) => {
      console.error(error);
    });
  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Portfolio</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Example projects={projects}></Example>
    </div>
  );
};
// <Header></Header>
export default App;