import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/tomato1125"
      target="_blank"
      rel="noopener"
      >
        tomato
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//setName（親コンポーネントからもらっているname状態を書き換える関数）を使って、名前を保存する
export default function SignIn({ setName }) {
  const classes = useStyles();
  //初期状態で「はじめる」のボタンが押せないようにする。disabledな状態に対してtrueを設定。disabledを変えるための関数をsetDisabledと設定する。
  const [disabled, setDisabled] = useState(true);
  //ニックネームの文字列の状態をコンポーネントで管理して、その文字列があれば（空じゃなければ）有効、無ければ無効にする。
  const [string, setString] = useState('');
  console.log({disabled, string});

  useEffect(() => {
    //stringが空かどうか？をdisabledという変数に代入
    const disabled = string === ''
    //54行目のdisabledを引数として渡す。
    setDisabled(disabled)
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            //TextField内に文字が入力されたら発火するイベントを記述
            //イベントが引数として渡って（e)、そのイベントに対してe.target.value(このフィールドの中の文字列)を取得することができる。
            onChange={(e) => setString(e.target.value)}
            //キーボードの入力を検知する処理
            onKeyDown={(e) => {
              //oreventDefaultで画面全体がリロードしなくなる。
              if( e.key === 'Enter') {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //disabledという状態をボタンコンポーネントに付与する。
            disabled={disabled}
            //onClickで関数がクリックされるたびに実行される。
            onClick={() => {
              //setNameに現時点の文字列「string」を渡す。
              setName(string);
            }}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}