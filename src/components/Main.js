import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

//material-ui stylesのdocを参考
const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

// nameをMainで受け取るようにする
const Main = ({ name }) => {
  const classes = useStyles();

  return (
    // InputFieldはニックネームを持つ必要があるので、MessageInputFieldにnameを渡しておく
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={name} /> 
    </div>
  );
};

export default Main;