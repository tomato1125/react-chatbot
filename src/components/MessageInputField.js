import React, { useState } from 'react';
import { Avatar,Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';
// import { AddIcCallOutlined } from '@material-ui/icons';
import MessageField from './MessageField';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  },
});

const MessageInputField = ({ name }) => {
  // text欄に入力したものをfirebaseに飛ばす際に、①ENTERキー押 or ②送信ボタンの２種類があるので、この２つが共通するコンポーネントの配下で状態管理する処理
  const [text, setText] = useState('');
  const classes = useStyles();
  // gravatarPath();から得られた文字列をavatarPathに代入する。gravatarPathに文字列を渡す必要があるので、nameを渡しておく。
  const avatarPath = gravatarPath(name);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>
          <MessageField name={name} setText={setText} text={text} />
        </Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;