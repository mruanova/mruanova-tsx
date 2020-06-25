import React from 'react';
// import Header from './scenes/Header/Header';
import { useStyles } from './useStyles';
import { ListChildComponentProps } from 'react-window';
import Project from '../../interfaces/Project';

interface Props extends ListChildComponentProps {
  index: number;
  style: React.CSSProperties;
  data: Project[];
}

const Row = (props: Props) => {
  const classes = useStyles();
  const { index, style, data } = props;
  const indents: any[] = [];
  data.forEach((element, i) => {
    indents.push(
      <div key={i} className={classes.row}>
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

export default Row;
