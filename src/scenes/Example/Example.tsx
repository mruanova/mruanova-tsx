import React from 'react';
import { useStyles } from './useStyles';
import { TableSortLabel } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import classNames from 'classnames';
import Row from '../Row/Row';

const Example = (props: any) => {
  const { projects } = props;
  const classes = useStyles();

  const columns = ['ProjectId', 'Position', 'Website', 'Address', 'Coordinates'];
  const orderBy = 'ProjectId';
  const order = 'asc';
  
  const createSortHandler = (property: any) => (event: any) => {
    console.log(property);
  };
  
  const indents = (
    <div className={classes.container}>
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
        className={classes.list}
        height={150}
        // height={36 * projects.length}
        // itemCount={1000}
        itemCount={projects.length}
        // itemSize={150}
        itemSize={36}
        // width={300}
        width={'100%'}
        itemData={projects}
      >
        {Row}
      </List>
    </div>
  );
  return indents;
};

export default Example;
