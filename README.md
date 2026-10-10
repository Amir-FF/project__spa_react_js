# SPA React JS

A small single-page application built with React, Vite, React Router and React Bootstrap.
Data comes from [JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # run ESLint
```

## Project structure

```
src/
├── main.jsx              # entry point
├── App.jsx               # router + route table
├── constants/            # API endpoints, route paths
├── services/             # http.js (request helper), postService.js (create/update/delete)
├── hooks/                # useFetch (GET), useToasts (toast list state)
├── utils/                # small helpers (validators)
├── layouts/              # MainLayout, Header
├── components/
│   ├── common/           # LoadingSpinner, ErrorMessage, PageTitle, ToastList
│   ├── users/            # UserCard
│   └── posts/            # PostCard, PostForm
├── pages/                # one component per route (*Page.jsx)
│   ├── users/
│   └── posts/
└── styles/main.scss      # Bootstrap + custom styles
```

## Routes

| Path               | Page             |
| ------------------ | ---------------- |
| `/`                | `HomePage`       |
| `/users`           | `UsersPage`      |
| `/users/:id`       | `UserDetailPage` |
| `/posts`           | `PostsPage`      |
| `/posts/:id`       | `PostDetailPage` |
| `/posts/create`    | `CreatePostPage` |
| `/posts/edit/:id`  | `EditPostPage`   |
| `*`                | `NotFoundPage`   |

## 🚀 Live Demo
You can view the live version of this project here: [**View Live Site**](https://project-spa-react-js.amir-computer-04-ir.workers.dev/)]
