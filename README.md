# My Portfolio (Learning Journey)

This README documents what each part of the project does, why it works, and the key functions/hooks used. It is meant as a learning guide for this portfolio.

## Overview

This is a React + TypeScript + Vite portfolio with a purple-themed design, a hamburger sidebar navigation, and separate pages for Home, Education, Services, Pricing, Projects, Skills, Journal, and Contact.

## Tech Stack

- React + TypeScript (UI + logic)
- Vite (build + dev server)
- Tailwind CSS (styling)
- shadcn-ui components (buttons, etc.)
- React Router (page routing)
- pdfjs-dist (PDF rendering for certificates)

## How It Runs

The app starts at `src/main.tsx`, renders `src/App.tsx`, and React Router swaps pages based on the URL path.

Key files:

- `src/App.tsx` defines routes and page components.
- `src/components/Navigation.tsx` renders the top bar + hamburger sidebar.
- `src/index.css` defines theme tokens (colors, shadows, fonts).
- `src/pages/*` contains each page.

## Routing (Why pages switch correctly)

File: `src/App.tsx`

React Router uses:

- `BrowserRouter` to listen to URL changes.
- `Routes` and `Route` to map paths to components.

When the URL changes (e.g., `/education`), React Router renders that page component inside the app. This is why clicking links changes the view without a full reload.

## Navigation (Hamburger Sidebar)

File: `src/components/Navigation.tsx`

Why it works:

- `useState` stores `isMobileMenuOpen` to show/hide the sidebar.
- The overlay + sidebar is conditionally rendered when `isMobileMenuOpen` is true.
- Clicking a link calls `setIsMobileMenuOpen(false)` to close the menu.

Key functions/hooks:

- `useState` (React hook)
- `useLocation` (from React Router) to highlight active links

## Theme and Styling

File: `src/index.css`

Why it works:

- CSS variables under `:root` and `.dark` define light/dark color tokens.
- Tailwind uses these CSS variables (e.g., `bg-background`) to style components.
- The theme toggle in Navigation adds/removes the `dark` class on `<html>`.

Key functions/hooks:

- `useEffect` to load saved theme from `localStorage`.
- `document.documentElement.classList` to toggle `dark`.

## Home Page (About + Intro)

File: `src/pages/Landing.tsx`

Why it works:

- The page is a layout section with a hero (text + image).
- Only your about/introduction appears here by design.
- Padding is increased with responsive classes (`px-6 sm:px-8 lg:px-12`) to avoid text touching the edge.

Key components:

- `Button` from shadcn-ui
- `Link` from React Router

## Education Page (Schools + Certificates)

File: `src/pages/Education.tsx`

### Education Timeline

Why it works:

- An array named `education` stores each school.
- The array is mapped into cards.

### Certificates Rendering (PDF/Image Viewer)

Why it works:

- `certificates` array stores file metadata.
- For images (`.png`, `.jpg`), an `<img>` preview is shown.
- For PDFs, `pdfjs-dist` renders pages into `<canvas>` using `PdfCanvas`.

Key functions/hooks:

- `useState` to store `activeCertificate` (controls modal).
- `useRef` and `useEffect` inside `PdfCanvas` to render PDF pages.
- `pdfjsLib.getDocument(fileUrl).promise` to load a PDF.
- `page.getViewport({ scale })` to size the render.
- `page.render({ canvasContext, viewport })` to draw PDF page to canvas.

Where to add new certificates:

- Add the file to `public/certificates/`.
- Add an entry to the `certificates` array in `src/pages/Education.tsx`.
- Use `fileName` that matches exactly (including spaces/case).

Example:

```ts
{
  title: "My Certificate",
  issuer: "Organization",
  year: "2026",
  fileName: "my_certificate.pdf",
}
```

## Services Page

File: `src/pages/Services.tsx`

Why it works:

- Services are stored in a `services` array.
- The array maps into cards with icons and descriptions.

## Pricing Page (Service Tabs)

File: `src/pages/Pricing.tsx`

Why it works:

- `servicePackages` stores packages per service.
- `activeService` state tracks which service is selected.
- Buttons update `activeService` on click.
- The page shows only packages for the active service.

Key functions/hooks:

- `useState` for active service selection.

## Assets

- Images and certificates go under `public/`.
- Use `/gronz.jpg` for the profile image.
- Certificates live in `public/certificates/`.

## Unused Viewer Page (Optional)

File: `public/pdf-viewer.html`

This was an older PDF preview approach using an iframe. The current project uses `pdfjs-dist` directly in React, so this file is optional and not used.

## Scripts

```sh
npm i
npm run dev
```

## Learning Notes (Key Functions Used)

- `useState` (React hook for state)
- `useEffect` (React hook for side effects)
- `useRef` (React hook for DOM refs)
- `BrowserRouter`, `Routes`, `Route` (React Router)
- `Link` (React Router)
- `pdfjsLib.getDocument` (pdfjs-dist)
- `page.render` (pdfjs-dist page rendering)

If you want to add more documentation, update this file as you change the project.
