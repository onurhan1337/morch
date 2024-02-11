<p align="center">
🌌
</p>

# morch

emoji generator with AI. built with Next.js, Tailwind, TypeScript and Replicate.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI**: [Replicate](https://replicate.com/)

## Overview

- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction)
- `pages/` - Contains all the page components. Each file corresponds to a route based on its name.
- `components/` - Contains all project components with reusable React components.
- `public/` - Contains static files like images, which can be accessed directly via URL.
- `styles/` - Contains global styles. The application primarily uses Tailwind CSS for styling.
- `lib/` - Contains utility functions, custom hooks and libraries that are used across the project.

## Demo

[https://morch.vercel.app](https://morch.vercel.app)

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/onurhan1337/zen.git
cd zen
pnpm install
pnpm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/onurhan1337/zen/blob/master/.env.example). You need to fill them out for the site to work.

## Cloning / Forking

Please review the [license](https://github.com/onurhan1337/my-website/blob/master/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.).
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
