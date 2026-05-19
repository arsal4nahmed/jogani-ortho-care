## Blog page organized by body region

Add a `/blog` route to the site with educational content grouped by anatomical category, matching the existing navy/gold design system.

### Structure

Single index route `src/routes/blog.tsx` with:

1. **Hero band** — same gradient-hero pattern used on other pages, eyebrow "Patient Education", H1 "Orthopedic Insights & Articles", short intro line.

2. **Sticky category nav** — horizontal chip bar (scrollable on mobile) with anchor links to each region section: Neck, Shoulder, Elbow, Wrist, Hip, Knee, Spine, Foot & Ankle. Uses gold accents, sticks under the header on scroll.

3. **One section per region** (`<section id="...">`), each containing:
   - SectionHeading with region name + 1-line description
   - 3 article cards per region (title, 1-sentence excerpt, read-time, "Read more" link — links are `#` placeholders for now since posts aren't individually routed)
   - Card design reuses existing `Card` component + `shadow-soft` + gold hover accent

4. **CTA footer band** — "Have a specific concern? Book a consultation" → links to `/contact`.

### Content seed (3 articles per region, 24 total)

Sample titles per region — all written in a patient-friendly, trustworthy tone matching the site voice:

- **Neck**: Understanding Cervical Spondylosis · When Neck Pain Needs a Specialist · Posture & Tech Neck
- **Shoulder**: Rotator Cuff Tears Explained · Frozen Shoulder Recovery · Shoulder Dislocation First Aid
- **Elbow**: Tennis vs Golfer's Elbow · Cubital Tunnel Syndrome · Elbow Fracture Recovery
- **Wrist**: Carpal Tunnel Syndrome · Wrist Sprain vs Fracture · De Quervain's Tenosynovitis
- **Hip**: Hip Replacement: What to Expect · Avascular Necrosis · Hip Bursitis Management
- **Knee**: ACL Tear Recovery Timeline · Knee Replacement Demystified · Meniscus Tears
- **Spine**: Lumbar Disc Herniation · Sciatica Causes & Treatment · Spinal Stenosis
- **Foot & Ankle**: Plantar Fasciitis · Ankle Sprain Grading · Achilles Tendon Injuries

Content stored as a typed array in the same file (no CMS, no DB).

### Navigation & SEO

- Add "Blog" link to `nav` array in `src/components/site/Header.tsx` (between Research and Contact).
- Add "Blog" to footer links if a links list exists.
- Add `head()` meta to the route: title "Orthopedic Blog — Dr. Abhinav Jogani", description, og tags.
- Add `/blog` to `src/routes/api/sitemap.ts`.

### Out of scope

- Individual article detail pages (`/blog/$slug`) — current request is one blog index page with grouped content. Can add later.
- CMS / markdown loading.
- Search/filter UI.

### Files touched

- create `src/routes/blog.tsx`
- edit `src/components/site/Header.tsx` (add nav item)
- edit `src/routes/api/sitemap.ts` (add `/blog`)
- edit `src/components/site/Footer.tsx` if it contains a nav list
