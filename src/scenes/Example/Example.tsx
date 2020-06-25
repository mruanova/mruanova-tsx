import React from 'react';
import { useStyles } from './useStyles';
import { TableSortLabel } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import Project from '../../interfaces/Project';
import ProjectsService from '../../services/ProjectsService';
import classNames from 'classnames';

import Row from '../Row/Row';

const Example = () => {
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
  const columns = ['ProjectId', 'Position', 'Website', 'Address', 'Coordinates'];
  const orderBy = 'ProjectId';
  const order = 'asc';
  const createSortHandler = (property: any) => (event: any) => {
    console.log(property);
  };
  const indents = (
    <>
      {columns.map((column) => {
        return (<TableSortLabel
          active={column ? orderBy === column : false}
          className={classNames(classes.column, classes[column])}
          direction={order}
          data-order={order}
          id={`sortheader-${column}`}
          key={column}
          onClick={createSortHandler(column)}
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

export default Example;
