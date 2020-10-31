import React, { useState } from 'react';
// material-uiのTextFieldコンポーネントを使用するための記述。
import { TextField } from '@material-ui/core';

import { pushMessage } from '../firebase';

// MessageFieldにはname,setText,textが渡ってくる。inputElも渡す
const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField 
      autoFocus
      fullWidth={true} 
      //material-uiのtext-field APIのドキュメントを確認し、refを渡す場合はinputRefを使う必要があることがわかるので、次のように記載する。
      inputRef={inputEl}
      // 状態を管理する記述。
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        // isComposedがtrueだった場合は、以下記述している処理を行わないようにする処理。
        if (isComposed) return;
        // e.target.valueを一旦textに代入
        const text = e.target.value;
        // textが空文字であれば、この記述以降の処理は行わない、という記述。
        if (text === '') return;
        //oreventDefaultで画面全体がリロードしなくなる。
        if( e.key === 'Enter') {
          // firebase登録のためnameとtextを渡す処理。
          pushMessage({ name: 'はむさん', text });
          // textを送信後、text欄を空にする処理
          setText('');
          e.preventDefault();
        }
      }}
      //日本語変換(composition)についての処理
      //日本語入力が始まったとわかった場合はsetIsComposedにtrueを設定する処理
      onCompositionStart={() => setIsComposed(true)}
      //日本語入力が終わったらsetIsComposedで初期状態（false)に設定する処理
      onCompositionEnd={() =>setIsComposed(false)}
      // textFieldコンポーネントのvalueをtextに設定する。こうすることでtext送信後、textの中身が空となり、その状態がブラウザ上に反映される。
      value={text}
    />
  );
};

export default MessageField;
