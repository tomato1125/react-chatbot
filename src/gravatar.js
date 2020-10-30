// gravatarPathの中でmd5を参照したいため、nodeの場合、cryptoというモジュールをインポートする必要がある。
import crypto from 'crypto';

// rgravatarPathという関数を定義し、この関数がURLを返すような仕組みをつくる。gravatarPathには引数として「string」が渡ってくる。
export const gravatarPath = (string) =>{
  // 受け取ったstringに対して、トリミングを行う処理。続けてtolowerCaseメソッドでアドレスの小文字化を行っている。処理が終わったら、lowerCaseStringに一旦格納している。
  const lowerCaseString = string.trim().toLowerCase();
  // createHashというものでmd5というハッシュを作る。それをmd５という形で呼び出すための準備をする。
  const md5 = crypto.createHash('md5');
  // メールアドレス(lowerCaseString)とbinaryを渡すようにするように設定し、updateしたものをdigestで’hex(16進数)'で出力するように設定。出力したものをdigestに代入する。
  const digest = md5.update(lowerCaseString, 'binary').digest('hex');
  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};
