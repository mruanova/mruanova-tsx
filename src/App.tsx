import React, { CSSProperties } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Header from './scenes/Header/Header';
import { useStyles } from './useStyles';
import './App.css';
import { TableSortLabel } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import { ListChildComponentProps } from 'react-window';
import Project from './interfaces/Project';
import ProjectsService from './services/ProjectsService';
import classNames from 'classnames';

interface Props extends ListChildComponentProps {
  index: number;
  style: CSSProperties;
  data: Project[];
}

const Row = (props: Props) => {
  const { index, style, data } = props;
  const indents: any[] = [];
  data.forEach((element, i) => {
    indents.push(
      <div key={i} className="row">
        <span>{element.ProjectId}</span>
        <span>{element.Position}</span>
        <span>{element.Website}</span>
        <span>{element.Address}</span>
        <span>{element.Coordinates}</span>
      </div>
    );
  });
  return (<div key={index} style={style}>{indents}</div>);
};

const Example = () => {
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
  const columns = ['ProjectId', 'Position', 'Website', 'Address', 'Coordinates'];
  const orderBy = 'ProjectId';
  const order = 'asc';
  const createSortHandler = (e: any) => {
    console.log(e);
  };
  const indents = (
    <>
      {columns.map((column) => {
        return (<TableSortLabel
          active={column ? orderBy === column : false}
          // className={classNames(classes.column, classes[column])}
          direction={order}
          data-order={order}
          id={`sortheader-${column}`}
          key={column}
          // onClick={createSortHandler(column)}
        >
          {column}
        </TableSortLabel>);
      })}
      <List
        // className={classes.list}
        height={150}
        // itemCount={1000}
        itemCount={projects.length}
        // itemSize={35}
        itemSize={150}
        // width={300}
        width={'100%'}
        itemData={projects}
      >
        {Row}
      </List>
    </>
  );
  return indents;
};

const App: React.FC = () => {
  const classes = useStyles();
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
      <Example></Example>
    </div>
  );
};
// <Header></Header>
export default App;