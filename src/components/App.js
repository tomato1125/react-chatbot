import React, { useState } from 'react';

import SignIn from './SignIn';


export default () => {
  //useStateを使う。初期値を空文字「('')」とする。状態の名前を「name」とする。
  const [name, setName] = useState('');
  console.log({name});
  //変えたい場所（SignInコンポーネント）にニックネームに文字が入力されたらsetNameを利用して、nameの状態を変える。
  return <SignIn setName={setName} />;
};
