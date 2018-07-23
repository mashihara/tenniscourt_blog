# tenniscourt_blog

> A Vue.js project

## Overview
### 主な起動ルート
1. index.html -> src/main.js (webpack のbuildで)
2. src/main.js -> src/App.vue
3. src/App.vue -> router-view = src/router/index.js (vue-routerが呼ばれる)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# コミットメッセージ
## フォーマット
```
type(scope):commit messagee
```
### 例：
```
chore(webserver): npm install superagent
```

## type
- add: Add new feature
- fix: A bug fix
- docs: Documentation only changes
- style: 空白、書式の変更（コードの意味に変更を与えない）
- refactor:バグfixやコードの修正ではない変更
- perf: 性能改善のための変更
- test: テストの追加
- chore: ライブラリの変更、ドキュメントの追加（※choreはチョアーと読む。雑用という意味）

# install memo
```
masuharookpuro2:tenniscourt_blog mashihara$ vue init webpack .

? Generate project in current directory? Yes
? Project name tenniscourt_blog
? Project description A Vue.js project
? Author mashihara <mashiharahiroyuki@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm
```
