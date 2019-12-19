# API

> https://api.zli.now.sh

コンテンツを管理、取得するための API です。

## 構成

- DB
  - FaunaDB
- FrameWork
  - Micro

## ファイル構成

```
src
├── Repository
│   ├── account.ts
│   ├── event.ts
│   ├── index.ts
│   └── member.ts
├── authorizer.ts
├── handler.ts
├── main.ts
├── middleware.ts
├── model.ts
└── utils.ts
```

### Repository

永続化の処理。DB との接続等をしている。

### authorizer.ts

認証系のロジックをやるクラス

### handler.ts

ハンドラーをまとめてる

### middleware.ts

middleware

### model.ts

データの型定義

### utils.ts

複数モジュールをまたいで使うような物はここ

## EndPoint

| Method |   EndPoint    |           機能           | 認証 |
| :----: | :-----------: | :----------------------: | :--: |
|  GET   |       /       |      ヘルスチェック      |      |
|  GET   |   /members    |     メンバー一覧取得     |      |
|  GET   | /member/s/:id | 学籍番号でメンバーを取得 |      |
|  GET   |  /member/:id  |   id のメンバーを取得    |      |
|  POST  |    /member    |      メンバーの登録      |  ○   |
| PATCH  |  /member/:id  |      メンバーの更新      |  ○   |
| DELETE |  /member/:id  |      メンバーの削除      |  ○   |
|  GET   |    /events    |     イベント一覧取得     |      |
|  GET   |  /event/:id   |   id のイベントを取得    |      |
|  POST  |    /event     |      イベントの登録      |  ○   |
|  POST  |   /account    |      アカウント作成      |  ○   |
|  POST  |    /signin    |        サインイン        |      |

## Body

### POST /member, PATCH /member/:id

```ts
{
  studentID: string;
  imageUrl: string;
  name: string;
  description: string;
  links: {
    hp?: string;
    twitter?: string;
    github?: string;
  };
}
```

### POST /event

```ts
{
  image: string;
  title: string;
  organizer: string;
  date: number;
  time: {
    from: number;
    to: number;
  };
  genre: string;
  tags: string[];
  comment: string;
}
```

### POST /account

```ts
{
  id: string;
  password: string;
}
```

## Response

基本的に `src/model.ts` の中の型の JSON が返ってくる

### POST /signin

```ts
{
  token: string;
}
```
