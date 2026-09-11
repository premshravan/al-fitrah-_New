# Al-Fitrah Islamic Preschool — Website Strategy & SEO Plan

## 1. Sitemap

| Page | URL |
|---|---|
| Home | `/` |
| About | `/about` |
| Our Approach | `/our-approach` |
| Programs | `/programs` |
| Curriculum | `/curriculum` |
| Quranic Education | `/quranic-education` |
| Nour Al Bayan | `/nour-al-bayan` |
| Character & Values | `/character-and-values` |
| Activities | `/activities` |
| Gallery | `/gallery` |
| Admissions | `/admissions` |
| FAQ | `/faq` |
| Contact / Find Us | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms | `/terms` |
| Blog / Parent Resources | `/blog` *(not built yet — see §6)* |

## 2. SEO Keyword Map

| Page | Primary Keyword | Secondary Keywords | Title | H1 |
|---|---|---|---|---|
| Home | Islamic Preschool in Thalassery | Al Fitrah Preschool Thalassery, Islamic Kindergarten Thalassery | Al-Fitrah Islamic Preschool in Thalassery \| Quran & Values | Al-Fitrah Islamic Preschool in Thalassery |
| About | About Al-Fitrah Islamic Preschool | Anjuman Ta'aleemul Qur'an, Islamic preschool Thalassery | About Al-Fitrah Islamic Preschool \| Thalassery | Our Children's Instincts — Let's Help Them Bloom |
| Our Approach | child-centred Islamic preschool education | learning through play Thalassery | Our Educational Approach \| Al-Fitrah | Learning through love, discovery & guidance |
| Programs | preschool programs Thalassery | Islamic preschool age groups | Programs \| Al-Fitrah Islamic Preschool Thalassery | A gentle progression, age by age |
| Curriculum | Islamic preschool curriculum | Quran English Maths EVS preschool | Curriculum \| Al-Fitrah Islamic Preschool Thalassery | Strong foundations for lifelong learning |
| Quranic Education | Quranic Preschool in Thalassery | Quran classes for kids Thalassery, Tajweed for kids | Quranic Education for Kids in Thalassery \| Al-Fitrah | A beautiful beginning with the Quran |
| Nour Al Bayan | Nour Al Bayan | Fathurabbani, Tahajji method | Nour Al Bayan Method \| Al-Fitrah Islamic Preschool | Building a strong foundation in Quran reading |
| Character & Values | Islamic character building | Islamic values for children | Character & Values \| Al-Fitrah Islamic Preschool | Growing good hearts alongside curious minds |
| Admissions | preschool admission Thalassery | Al Fitrah admission enquiry | Admissions \| Al-Fitrah Islamic Preschool Thalassery | Give your child a beautiful beginning |
| FAQ | Islamic preschool FAQ Thalassery | Al Fitrah preschool questions | FAQ \| Al-Fitrah Islamic Preschool Thalassery | Questions parents ask us most |
| Contact | Al Fitrah Preschool Thalassery contact | Islamic preschool near me Thalassery | Contact & Location \| Al-Fitrah Islamic Preschool | Come see where your child will learn |

All pages carry unique meta descriptions (see each page's `PageMeta` component in the code) and a single `<h1>`.

## 3. Local SEO Strategy

- Primary location signal: **Thalassery, Kannur, Kerala** — used in title tags, H1s, and body copy naturally (no keyword stuffing).
- `EducationalOrganization` schema is embedded in `index.html`; upgrade to include real `LocalBusiness` fields (address, geo, phone) once confirmed.
- Google Business Profile: claim/verify listing with name, address, phone, hours, photos, and services matching the site; link it from the Contact page once available.
- Avoid doorway pages for every nearby locality — Thalassery is the single strong local anchor; mention nearby areas only if the school genuinely draws from them.

## 4. Conversion Funnel

1. **Awareness** — Home page hero + Why Al-Fitrah communicates differentiation within seconds.
2. **Consideration** — Our Approach, Curriculum, Quranic Education, Nour Al Bayan pages answer "how is this different / how does it work."
3. **Trust** — Safety & Well-being section, Why Parents Choose (to be replaced with real testimonials), FAQ.
4. **Conversion** — Admissions page with 4-step process + short enquiry form; sticky mobile CTA bar (Call / WhatsApp / Enquire) on every page.
5. **Secondary conversions** — phone call, WhatsApp, Gallery browsing, Contact/directions.

## 5. Information Required From School

Everything below is marked `[CONFIRM]` in the codebase — search for that string. **Nothing has been fabricated;** these are the blockers to launch:

- Exact registered school name (as it should appear legally) and logo file
- Official branch address in Thalassery + Google Maps link/embed
- Phone number and WhatsApp number
- Email address
- School timings
- Admission opening date and academic year
- Age eligibility cut-off dates per level
- Official class/level names (Programs page currently uses placeholder names: Early Years, Preschool, Level 1–3)
- Fees and payment structure
- Admission process details and required documents
- Teacher details, qualifications, teacher-student ratio
- Facilities actually available (smart classrooms, library, prayer/Quran area, etc.)
- Transport availability
- Safety/security facilities (CCTV, medical facilities) — **do not publish claims here without confirmation**
- Meals/snacks policy, uniform requirements
- Languages taught beyond Arabic/English (e.g. Malayalam)
- Parent communication system in use
- Real testimonials and Google rating
- Instagram/Facebook URLs
- Additional school photos and video

## 6. Content Gaps / Not Yet Built

- **Blog / Parent Resources** — the 20 suggested article topics from the brief are not yet written. Recommend building this as a second phase once the core site is live, using the same design system.
- **Real testimonials section** — currently a placeholder "Why Parents Choose Al-Fitrah" list; swap in verified parent quotes once available.
- **Facilities page/section** — omitted until the school confirms which facilities actually exist, per the brief's instruction not to claim unconfirmed facilities.
- **Individual location pages** — only build these if Al-Fitrah has more than one genuine branch to promote.

## 7. Design Tokens Reference

- **Color**: Deep Islamic Green `#1B4B3A`, Leaf Green `#6FA84B`, Golden Yellow `#F0B23A`, Soft Orange `#F2884B`, Warm Red `#C4483C` (sparing use), Ivory `#FBF6EC`, Charcoal `#232A24`.
- **Type**: Fraunces (headings, warm serif for a premium feel) + Plus Jakarta Sans (body/UI).
- **Motif**: organic "bloom" blob shapes for imagery, leaf-icon dividers above section eyebrows, numbered steps only where content is a genuine sequence (process flows, admissions steps).

## 8. Technical/Performance Notes

- No image optimisation pipeline is wired up yet (brochure photos are used as-is, straight from your uploads). Before launch, convert to WebP/AVIF, compress, and add real responsive `srcset` sizes.
- All interactive elements have visible focus states and `prefers-reduced-motion` is respected globally.
- Mobile sticky CTA bar and hamburger nav are implemented and tested down to 320px width in code (not yet visually verified in a browser — this environment has no network to run a dev server preview).
