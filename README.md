# GinaG Speaks Website

Simple React + Vite website for GinaG Speaks.

## Scripts

- `npm run dev` - start the local Vite dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## App Structure

The app uses React Router in `src/App.tsx`.

- `/` -> `src/pages/HomePage.tsx`
- `/about` -> `src/pages/AboutPage.tsx`
- `/keynote-topics` -> `src/pages/KeynotePage.tsx`

## Where Things Live

### Pages

- `src/pages/HomePage.tsx` - homepage sections assembled together
- `src/pages/AboutPage.tsx` - about page content and story sections
- `src/pages/KeynotePage.tsx` - keynote topics page

### Shared Components

All shared UI components are in `src/components/`.

- `Navigation.tsx` - top navigation and mobile menu
- `Footer.tsx` - site footer
- `Button.tsx` - reusable button styles
- `HeroSection.tsx` - homepage hero
- `WhyChooseSection.tsx` - homepage value section
- `InsightsSection.tsx` - homepage insights section
- `KeynotesSection.tsx` - homepage keynote overview
- `SignatureSection.tsx` - homepage signature section
- `FounderSection.tsx` - founder section on the homepage
- `CTASection.tsx` - homepage call-to-action
- `ContactNew.tsx` - contact block used on multiple pages
- `NewKeynote.tsx` - keynote-related section used on the keynote page
- `SectionHeading.tsx` - shared heading component
- `BorderCircleLight.tsx` - decorative graphic component

### Hooks and Utilities

- `src/hooks/useInView.ts` - intersection observer hook for reveal animations
- `src/lib/animations.ts` - shared animation classes
- `src/api/contact.ts` - contact form or contact-related API helper
- `lib/utils.ts` - helper utilities used across the app

### Assets

- `public/` - static images, icons, and site assets
- `public/about/` - about page images
- `public/icons/` - icon assets used throughout the site
- `public/keynotes/` - keynote page images
- `public/trust/` - trust or testimonial-related assets

## Notes

- The site uses the font setup defined in `index.html` and `src/globals.css`.
- Route-level layout is handled in `App.tsx` with shared `Navigation` and `Footer` components.
