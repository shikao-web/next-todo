# NextTodo
## 概要

こちらは、TypeScript, React, Next.jsの学習のために開発したアプリです。
開発を通して、gitの操作に慣れ、AI開発に触れることができました。そして、TypeScript, React, Next.jsの概要を掴むことができました。

## 使用した技術
- TypeScript ( https://www.typescriptlang.org/ )
- React ( https://react.dev/ )
- Next.js ( https://nextjs.org/ )
- prisma ( https://www.prisma.io/ )
- Neon ( https://neon.com/ )
- Cursor ( https://cursor.com/ )
- Vercel ( https://vercel.com/ )

## 使い方
### 1. リポジトリをクローン

```bash
git clone https://github.com/shikao-web/next-todo.git
cd next-todo
```

### 2. 環境変数の設定
.env.example をコピーして .env を作成し、設定を変更してください。

```bash
cp .env.example .env
```
### 3. WSL で開発サーバーを起動
```bash
# WSL ターミナルで実行
npm install
npm run dev
```

### 4. ブラウザで以下にアクセスしてください。
http://localhost:3000

Basic 認証は Next.js の `proxy` で行います。`.env` の `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` を設定すると有効になり、空のままなら認証は掛かりません。