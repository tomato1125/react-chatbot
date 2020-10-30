import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';


export default () => {
  //useStateを使う。初期値を空文字「('')」とする。状態の名前を「name」とする。
  const [name, setName] = useState('');
  //nameが空だった場合はSignInを返す+config.signInEnabledがtrueだったら・・・
  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    //nameが空じゃない場合はMainコンポーネントのnameを返す。
    return <Main name={name} />;
  }
  //変えたい場所（SignInコンポーネント）にニックネームに文字が入力されたらsetNameを利用して、nameの状態を変える。
  //setNameが更新されると、８行目のnameが更新される。すると、９行目のconsole.logでnameの内容がブラウザに表示される。
  return <SignIn setName={setName} />;
};
