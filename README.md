
# Chan Gon Kim's Blog

A personal blog template built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Next.js 16 App Router**
- **MDX Support**
- **Tailwind CSS v4**

## Getting Started

This project is open source. You can use this repository to build your own blog.

### 1. Clone the repository

```bash
git clone https://github.com/chan-gon/changon-blog.git
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

## Project Structure

The project follows the standard Next.js App Router structure:

- **`app/`**: Contains the application routes, layouts, and pages.
    - `page.tsx`: The homepage.
    - `layout.tsx`: The root layout including the navbar and global styles.
    - `blog/`: Blog listing and post details routes.
- **`components/`**: Reusable React components such as the `Navbar`.
- **`content/blog/`**: MDX files are stored here. Each file represents a blog post with frontmatter (title, date, etc.).
- **`lib/`**: Utility functions, including MDX processing logic (`blog.ts`) to read and parse content.
- **`public/`**: Static assets like images and fonts.

---

# Chan Gon Kim's Blog

Next.js 16 (App Router), TypeScript, Tailwind CSS로 구축된 개인 블로그 템플릿입니다. 

## 주요 기능

- **Next.js 16 App Router**
- **MDX Support**
- **Tailwind CSS v4**

## 시작하기

이 프로젝트는 오픈 소스입니다. 이 저장소를 참고하여 자신만의 블로그를 만들 수 있습니다.

### 1. 저장소 클론 (Clone)

```bash
git clone https://github.com/chan-gon/changon-blog.git
cd changon-blog
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 프로젝트 구조

이 프로젝트는 Next.js App Router의 표준 구조를 따릅니다.

- **`app/`**: 애플리케이션 라우트, 레이아웃 및 페이지를 포함합니다.
    - `page.tsx`: 홈페이지.
    - `layout.tsx`: 네비게이션 바와 전역 스타일을 포함하는 루트 레이아웃.
    - `blog/`: 블로그 목록 및 상세 페이지 라우트.
- **`components/`**: `Navbar`와 같은 재사용 가능한 React 컴포넌트입니다.
- **`content/blog/`**: MDX 파일이 저장되는 곳입니다. 각 파일은 프론트매터(제목, 날짜 등)를 포함한 블로그 포스트입니다.
- **`lib/`**: 콘텐츠를 읽고 파싱하는 MDX 처리 로직(`blog.ts`)을 포함한 유틸리티 함수입니다.
- **`public/`**: 이미지, 폰트 등 정적 자산입니다.
