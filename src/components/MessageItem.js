import React, { useEffect, useRef } from 'react'
import { 
  Avatar, 
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ isLastItem, name, text }) => {
  const ref = useRef(null);
  const classes = useStyles();
  // gravatarPathにnameを渡して、avatarPath(これはURLに当たる)を生成する。
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    // isLastItemの条件分岐
    if (isLastItem) {
      //isLastItemがtrueだったらここでscrollする
      //behavior: "smooth"という記述はスクロールの動きを滑らかにするもの。
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;