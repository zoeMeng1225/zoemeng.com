zoemeng.com
Personal portfolio site for Zoe Meng — a frontend engineer specializing in React, TypeScript, and AI-integrated web applications.

**Live Site**: [zoemeng.com](https://zoemeng.com)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-animations-FF0055?logo=framer&logoColor=white)

## About

A custom-built portfolio showcasing my frontend engineering work, including Shopify embedded apps, AI-powered tools, and e-commerce platforms. Designed with a warm cream and purple aesthetic, featuring smooth animations and responsive layouts across all devices.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (scroll-triggered fade-ins, page transitions)
- **Deployment**: Vercel

## Features

- Responsive design optimized for desktop, tablet, and mobile
- Custom lightbox component for project screenshots
- Flexible media grid with mixed image/video support
- Scroll-triggered fade-in animations
- Scroll-to-top navigation
- Four detailed project case study pages

## Featured Projects

| Project                     | Description                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **B2B Quote Automation**    | Shopify embedded app for wholesale quoting: React, Remix, Redux Toolkit, GraphQL, Drizzle ORM      |
| **TagWise AI**              | AI-powered product tagging platform with human-in-the-loop workflow and proprietary scoring engine |
| **MTI E-commerce**          | Full-stack e-commerce rebuild with performance optimization                                        |
| **AI Component Playground** | Interactive AI coding tool built with Vercel AI SDK and Sandpack                                   |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zoeMeng1225/zoemeng.com.git

# Navigate to the project
cd zoemeng.com

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Environment Variables

Create a `.env.local` file in the root directory. See `.env.example` for required variables.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page
│   └── projects/     # Individual project pages
├── components/       # Reusable UI components
│   ├── MediaGrid.tsx
│   ├── FadeIn.tsx
│   ├── ScrollToTop.tsx
│   ├── BackToHome.tsx
│   ├── LightboxImage.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectImage.tsx
│   ├── ProjectVideo.tsx
│   ├── SectionHeading.tsx
│   ├── B2BArchitechtureDiagram.tsx

├── lib/              # Utilities and helpers
└── globals.css       # Global styles
```

## License

This project is open source under the [MIT License](LICENSE).

## Contact

- **Portfolio**: [zoemeng.com](https://zoemeng.com)
- **GitHub**: [@zoeMeng1225](https://github.com/zoeMeng1225)
- **LinkedIn**: [Zoe Meng](https://www.linkedin.com/in/zoe-meng)
