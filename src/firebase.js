import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVv-8TSjgDbnq3C1Oso6mOWjFB0eF8-cw",
  authDomain: "react-chatbot-2e80c.firebaseapp.com",
  databaseURL: "https://react-chatbot-2e80c.firebaseio.com",
  projectId: "react-chatbot-2e80c",
  storageBucket: "react-chatbot-2e80c.appspot.com",
  messagingSenderId: "999819616337",
  appId: "1:999819616337:web:d9121bff04bef9e4f11870"
};

// 公式docより参照（イニシャライズを行う）
firebase.initializeApp(firebaseConfig);
// データベースが必要なので、databaseを作成する。（このデータベースはリアルタイムデータベースをまるっと参照している）
const database = firebase.database();
// データベースの中のある特定の名前空間に対するリファレンスを作る処理(messagesという名前でrefarenceを作る処理)
const messageRef= database.ref('messages');
//messageRefを使って、pushメソッドを使ってデータを送ることができるようにする処理。今回nameとtextを管理したいので引数としてname,textを受け取る。
// このpushMessageはこのfirebase.jsの中で使用せず、exportしてtextfieldのENTERキーを押した時などにpushメッセージを使ってもらうように設定する。
export const pushMessage = ({name, text}) => {
  // name, textを管理したいので、この２つをpushする処理。
  messageRef.push({name, text});
};