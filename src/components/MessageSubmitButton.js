import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';
//name, setText, textを受けとる。
const MessageSubmitButton = ({ inputEl, name, setText, text }) => {
  return (
    // textの状態が空だったらtrueになる。disabledにtrueを設定すれば、「disabledできない」という状態になる。
    //クリックをした時にfirebaseに登録を行いたいので、onClickメソッドを使う必要がある。（onClickにはコールバック関数が使える）
    <IconButton 
      disabled={text === ''} 
      onClick={() => {
      // firebaseへの登録はpushMessage関数で行うことができるので、name, textを渡す。
      pushMessage({ name: 'はむさん', text });
      // textの初期化（空文字を渡す）処理。
      setText('');
      // 以下を実行することでfirebase登録後、自動でinput欄にフォーカスが当たるようになる。
      inputEl.current.focus();
    }}>
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;