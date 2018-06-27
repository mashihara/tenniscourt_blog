# 全体概要
## テニスコート紹介ブログ
テニスベアスタッフが、テニスコート情報を登録する。
エンドユーザーがそれを参照する。

## システム
1. テニスコート情報登録システム
2. テニスコート情報参照システム

# 1. テニスコート情報登録システム
## 要件
1. テニスコートの基本情報（面数、金額など）を登録する
- 特に金額は細かい設定(曜日、時間ごとに異なる)が必要
2. テニスコートの画像をアップロードする
3. テニスコートの場所を地図で登録する

## アーキテクチャ検討
- googleスプレッドシートを使う or wordpressを使う or vueでスクラッチ
- googleスプレッドシートだと画像ファイルのアップロードができない
- vueでさくっと作ってみる？
- 結論：wordpressを使ってみる

## 画面
1. 登録画面 のみ

# 2. テニスコート情報参照システム
## 要件
1. [テニスコート情報登録システム]で登録した情報を全て参照する
2. 別機能でDB登録済みのコートの空き情報を参照する

## 画面
1. コート情報画面 のみ

# テーブル定義書
別紙