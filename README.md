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
- Docker ( https://www.docker.com/ )
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
### 3. Docker Composeを起動
```bash
docker compose up -d --build
```

### 4. ブラウザで以下にアクセスしてください。
http://localhost:8080 