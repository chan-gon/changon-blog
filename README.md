# Chan Gon Kim's Blog

A personal blog built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.
Posts and projects are MDX files in this repository, so there is no database or CMS.

## Features

- **Next.js 16 App Router**
- **MDX Support**
- **Tailwind CSS v4**
- **Post search, pagination, and tags**
- **Projects section**

## Getting Started

This is for personal use, but you can use this source code to build your own blog.

### 1. Clone the repository

```bash
git clone https://github.com/chan-gon/changon-blog.git
```

```bash
cd changon-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

This follows the standard Next.js App Router structure:

- **`app/`**: Contains the application routes, layouts, and pages.
    - `page.tsx`: Redirects `/` to `/about`.
    - `layout.tsx`: The root layout including the navbar and global styles.
    - `not-found.tsx`: The 404 page.
    - `posts/`: Post list, post details, and tag routes.
    - `projects/`: Project list and project details routes.
    - `about/`, `cv/`: Static pages.
- **`components/`**: Reusable React components such as the `Navbar` and `Search`.
- **`content/posts/`**: Post MDX files. Subfolders such as `2026/` are for organizing only and do not appear in the URL.
- **`content/projects/`**: Project MDX files.
- **`lib/mdx.ts`**: Reads and parses the MDX files.
- **`proxy.ts`**: Returns the 404 page for URLs with invalid percent-encoding.

## Writing Content

Add an `.mdx` file to `content/posts/` or `content/projects/`. The file name becomes the URL, so it must be unique:

```mdx
---
title: "Post title"
date: "Nov 6, 2026"
description: "A short summary"
hidden: false
tags: ["tag1", "tag2"]
---

Write the content here.
```

Projects can also set `githubUrl` and `demoUrl`. Set `hidden: true` to remove an item from the site.

The project list is generated at build time, so rebuild after adding a project.
