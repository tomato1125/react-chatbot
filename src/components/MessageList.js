import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

// 配列処理が無限ループになるのを防ぐためにuseEffectを使って以下のように記述する。
// 公式docのhooks-effectの説明の中に「If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. 」という記述がある。改行→
// これは「useEffectの第一引数を1回だけ実行したい場合は、第二引数に空っぽの配列を渡してください」という意味。
const MessageList = () => {
  //newMessagesをコンポーネント内で管理したいので、以下のようにuseStateを使って、配列を管理する。
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    //メッセージを表示したいので、firebase realtime database retieve dataの公式docを参考に、記述する。
    messagesRef
    // orderByKey()と記述することで時系列に表示できるように設定。公式docデータのクエリを参照。
    .orderByKey()
    // LimitToLast()と記述することで、直近のデータの取得数を指定できる。今回は直近の３件を取得する設定をしている。
    .limitToLast(3)
    .on('value', (snapshot) => {
    // messagesという変数にsnapshot.val();というオブジェクトを代入する。
    const messages = snapshot.val();
    // メッセージが１件もない時に"null"が取得され「TypeError: Cannot convert undefined or null to object」のエラーが出るので、以下のように条件分岐して「メッセージがnullの場合は何もしない」という記述をする。
    if (messages === null) return
    // Objecet.entries(messages)をentriesに格納する。entriesは配列になっている。
    const entries = Object.entries(messages);
    // 配列を生成するためにmapメソッドを使用。
    const newMessages = entries.map(entry => {
      // Key: -MJ04W6U1IcY_YF4lws1, value:{name: "はむさん", text: "こんにちは！"}という形を {Key: -MJ04W6U1IcY_YF4lws1, name: "はむさん", text: "こんにちは！"}という形に生成する処理。
      // entry[0]というのは、「-MJ04W6U1IcY_YF4lws1」の部分。entry[1]は「name: "はむさん", text: "こんにちは！"」の部分。
      // 後々の可読性を上げるために、entry[0]をkeyに代入。entry[1]をnameAndTextに代入する。もっとスマートに記述するなら、「const [key, nameAndText] = entry;」と１つにまとめて記述する方がベター。
      const key = entry[0];
      const nameAndText = entry[1];
      // 「...」は「展開する」という意味
      return { key, ...nameAndText };
    });
    // setMessagesで(newMessages)を渡すことで、messagesを更新することができる。
    setMessages(newMessages);
    });
  }, []);

  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;