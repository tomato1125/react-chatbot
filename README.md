# アプリ名

## reactChatBot

# アプリについて

教材を基に React + firebase(Realtime Database)を使って、ログイン機能付きの簡単なチャットアプリを作成しました。

# 本番環境

## URL: https://react-chatbot-2e80c.web.app/

- ログイン名を入力いただくと、チャットに参加できます。

## 主な機能

- Material-UI を使用して、ビューを整えております。
- ログイン画面はログイン名を入力するまではチャット画面に遷移できないような仕様。
  ![reactChat1](https://user-images.githubusercontent.com/66346042/98224042-52d24700-1f96-11eb-9cad-61f56adde527.gif)

- アイコンは gravatar を使って、自動的にアバターを割り振ることができます。
- チャット画面では文章を入力するまでは送信ができないような仕様になっております。
- メッセージを送信すると、そのメッセージに自動スクロールします。
  ![reactChat2](https://user-images.githubusercontent.com/66346042/98224109-6b426180-1f96-11eb-9e41-0ff348f1ae5d.gif)

- firebase の Realtime database を使って、メッセージの即時保存ができます。
  ![reactChat3](https://user-images.githubusercontent.com/66346042/98224166-7f865e80-1f96-11eb-886e-38d0d0de58a4.gif)
