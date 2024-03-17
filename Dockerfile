# ベースイメージとして公式のNodeイメージを使用
FROM node:14

# アプリケーションのソースコードを含むディレクトリを指定
WORKDIR /usr/src/app

# アプリケーションの依存関係ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションの起動コマンド
CMD [ "node", "app.js" ]
