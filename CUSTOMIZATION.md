# Customization Guide

This guide will help you personalize the Antigravity template for your own use.

## 1. Updating Personal Data

All your personal information lives in `src/config/portfolio.ts`. You don't need to touch the UI code for common changes.

```typescript
// src/config/portfolio.ts
export const portfolioConfig = {
  name: "Your Name",
  role: "Your Role",
  bio: "A short bio about you...",
  // ... add your links and projects here
};
```

## 2. Changing the Design System

You can update colors, fonts, and spacing in `src/styles/tokens.css`.

- **Colors**: Update `--accent-primary` to change the main theme color.
- **Fonts**: The template uses `Inter` for body and `DM Serif Display` for headings. You can change these in `src/app/layout.tsx`.

## 3. Adding Projects

1. Place your project images in `public/projects/`.
2. Add a new object to the `projects` array in `src/config/portfolio.ts`.

## 4. Contact Form (No Backend)

By default, the form is a UI-only component. To make it work without a backend, you can use:

### Option A: EmailJS (Recommended)
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Update the `onSubmit` handler in `src/components/sections/Contact.tsx`.
3. Use environment variables for your Service ID and Template ID.

### Option B: Formspree
1. Go to [Formspree](https://formspree.io/).
2. Change the `<form>` action attribute to your Formspree endpoint.

## 💡 Common Pitfalls
- **Image Sizes**: Try to keep project images around 800x600px for best performance.
- **Resume Link**: Place your resume PDF in `public/` and update `resumeUrl` in the config.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/):
1. Push your code to GitHub.
2. Import the repository to Vercel.
3. It will automatically detect Next.js and deploy!
