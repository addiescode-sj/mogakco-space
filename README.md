This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

로컬 서버 띄워서 작업 확인하는 법

```bash
npm run dev
# or
yarn dev
```

### Before Start

첫 진입 페이지는 src> pages > index.tsx 에서 확인 & 수정할 수 있고, localhost:3000 포트에 띄워지게됩니다.
page route들은 src > pages 아래에 폴더 구조 그대로 라우트들이 생깁니다.

### Page Route

```

pages > main > index.tsx : localhost:3000/main

pages > main > feeds.tsx : localhost:3000/main/feeds


추가적으로, Computed property를 사용해 page route를 구성할 수도 있습니다.

pages > cart > cartDetails > [cartItem].tsx : localhost:3000/cart/cartDetails/cup


```

### API routes

pages > api 폴더는 기존 pages폴더의 page route와 다르게 api endpoint를 나타내게됩니다.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
