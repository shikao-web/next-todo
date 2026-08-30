# NextTodo
## 概要

こちらは、TypeScript, React, Next.jsの学習のために開発したアプリです。
開発を通して、gitの操作に慣れ、AI開発に触れることができました。そして、TypeScript, React, Next.jsの概要を掴むことができました。

## 使用した技術
- TypeScript ( https://www.typescriptlang.org/ )
- React ( https://react.dev/ )
- Next.js ( https://nextjs.org/ )
- prisma ( https://www.prisma.io/ )
- Supabase ( https://supabase.com/ ) - Database & Supabase Auth
- Cursor ( https://cursor.com/ )
- Vercel ( https://vercel.com/ )

## 機能
- **ユーザー認証（Supabase Auth）**: メールアドレスとパスワードによるアカウント作成・ログイン・ログアウト
- **ユーザー別タスク管理**: ログイン中のユーザー専用の Todo タスクの作成・一覧表示・削除

## 使い方

### 1. アカウントの作成・ログイン
- アプリにアクセスするとログイン画面が表示されます。
- 「新規登録へ」からメールアドレスとパスワードを入力してアカウントを作成します。
- ログイン後、ヘッダーにログイン中のメールアドレスが表示されます。

### 2. タスクの管理
- 入力フォームからタスクを入力して「ADD」を押すとタスクが追加されます。
- タスク左側のチェックボックスにチェックを入れるとタスクが削除されます。
- ヘッダーの「ログアウト」ボタンからログアウトできます。