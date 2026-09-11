# Al-Fitrah Islamic Preschool — Website (React)

A React (Vite) website for Al-Fitrah Islamic Preschool, Thalassery, Kannur.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

The production-ready static files will be in `dist/` — deployable to any static
host (Vercel, Netlify, cPanel, etc.).

## What's inside

- **React 18 + React Router 6**, no UI framework dependency — plain CSS with
  design tokens in `src/index.css` for full control over the brand.
- **Pages**: Home, About, Our Approach, Programs, Curriculum, Quranic
  Education, Nour Al Bayan, Character & Values, Activities, Gallery,
  Admissions (with enquiry form), FAQ, Contact, Privacy Policy, Terms.
- **`src/data/schoolInfo.js`** — single source of truth for phone, address,
  email, WhatsApp number, timings and map link. Update this file first.
- **`src/data/faqs.js`** — all FAQ content in one place.
- Brochure photos you supplied are used directly in `public/images/`.

## Before launch — see INFORMATION-REQUIRED.md

Several fields are marked `[CONFIRM]` throughout the codebase (search for that
string) — phone number, exact address, timings, fees, admission documents,
Google Maps embed link, and social media URLs. Nothing has been invented;
these must be filled in with real information from the school.

## Suggested next steps

1. Replace placeholder contact details in `src/data/schoolInfo.js`.
2. Swap in additional real school photography as it becomes available
   (the Gallery page and several sections currently reuse the four brochure
   photos supplied).
3. Wire the Admissions form (`src/pages/Admissions.jsx`) to a real backend —
   e.g. an email service, Google Sheet, or CRM — it currently only shows a
   success message locally.
4. Add real parent testimonials to replace the "Why Parents Choose Al-Fitrah"
   section once available.
5. Set up Google Business Profile and link it from the Contact page.
6. Add `robots.txt` / `sitemap.xml` generation once the site has a real
   production domain (a starter `public/robots.txt` is included).
