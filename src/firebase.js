import firebase from 'firebase';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

// 公式docより参照（イニシャライズを行う）
firebase.initializeApp(firebaseConfig);
// データベースが必要なので、databaseを作成する。（このデータベースはリアルタイムデータベースをまるっと参照している）
const database = firebase.database();
// データベースの中のある特定の名前空間に対するリファレンスを作る処理(messagesという名前でrefarenceを作る処理)
// メッセージ取得をするためにexportすることで、他のライブラリからrefが利用できるようになる。
export const messagesRef= database.ref('messages');
//messageRefを使って、pushメソッドを使ってデータを送ることができるようにする処理。今回nameとtextを管理したいので引数としてname,textを受け取る。
// このpushMessageはこのfirebase.jsの中で使用せず、exportしてtextfieldのENTERキーを押した時などにpushメッセージを使ってもらうように設定する。
export const pushMessage = ({name, text}) => {
  // name, textを管理したいので、この２つをpushする処理。
  messagesRef.push({name, text});
};