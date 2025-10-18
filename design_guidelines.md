# Personal Portfolio & Resume Website - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern portfolio platforms (Dribbble, Behance) and product company career pages (Linear, Stripe), emphasizing visual storytelling with clean, professional aesthetics. This portfolio will showcase personality while maintaining credibility.

## Core Design Elements

### Color Palette
**Light Mode:**
- Primary: 240 5% 10% (Deep charcoal for text/headers)
- Secondary: 240 4% 45% (Mid-gray for body text)
- Accent: 200 95% 45% (Vibrant cyan for CTAs and highlights)
- Background: 0 0% 98% (Off-white)
- Surface: 0 0% 100% (Pure white for cards)

**Dark Mode:**
- Primary: 0 0% 95% (Off-white for text)
- Secondary: 240 5% 65% (Light gray for body)
- Accent: 200 90% 55% (Bright cyan)
- Background: 240 6% 8% (Deep charcoal)
- Surface: 240 5% 12% (Elevated card surface)

### Typography
- **Display Font**: Inter (700-800 weight) for name and section headers
- **Body Font**: Inter (400-500 weight) for content
- **Sizes**: Hero name (text-5xl to text-7xl), Section headers (text-3xl to text-4xl), Body (text-base to text-lg), Captions (text-sm)

### Layout System
**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for predictable rhythm (p-4, gap-8, mt-12, etc.)

**Grid Structure**: 
- Max width container: max-w-6xl centered
- Multi-column sections: 2-column (md:grid-cols-2) for experience/education, 3-column (lg:grid-cols-3) for skills/projects
- Single column: Hero, About, Contact maintain focused center alignment

### Component Library

**Hero Section:**
- Full viewport height with centered content
- Large professional headshot (rounded-full, w-32 to w-40)
- Animated typewriter effect or fade-in for tagline
- Dual CTA buttons (primary: "View Projects", secondary outline: "Download Resume")
- Scroll indicator at bottom

**Navigation:**
- Fixed header with blur backdrop on scroll
- Smooth-scroll anchor links to sections
- Mobile: Hamburger menu with slide-in drawer
- Desktop: Horizontal links with underline hover effect

**About Section:**
- Two-column layout: Text left, skills grid right
- Skills displayed as rounded badges with icons
- Professional bio (2-3 paragraphs, max-w-prose)
- Subtle border separators

**Work Experience:**
- Vertical timeline with connector line
- Cards with company logo placeholder, role, dates, bullet points
- Hover: Subtle elevation and accent border-l highlight
- Responsive: Stack on mobile, side-by-side on desktop

**Projects Showcase:**
- 2-3 column grid of project cards
- Each card: Featured image, title, description, tech stack tags, GitHub/Live link icons
- Hover: Scale transform (scale-105) and shadow enhancement
- Featured project: Spans 2 columns with larger image

**Education:**
- Simple card layout with institution, degree, dates
- Icons for certifications or achievements

**Contact Section:**
- Centered content with social icons (LinkedIn, GitHub, Email, Twitter)
- Large clickable icon buttons with hover lift effect
- Optional: Simple contact form (Name, Email, Message fields)
- Background: Subtle gradient or pattern

### Images
**Large Hero Image**: No - Use professional headshot (circular, medium size) instead of full-width hero background

**Project Images**: Yes - Each project card requires a featured screenshot/mockup (16:9 aspect ratio, rounded corners, object-cover)

**Image Placements:**
- Hero: Circular headshot portrait (center-top of hero)
- Projects: Rectangular screenshots (top of each project card)
- About: Optional secondary candid photo or workspace image

### Animations
**Minimal & Purposeful:**
- Fade-in on scroll for section reveals (intersection observer)
- Smooth scroll behavior for navigation
- Button/card hover: transform and shadow transitions (duration-300)
- Avoid: Complex scroll-triggered animations, parallax, continuous motion

### Accessibility & Polish
- Focus states on all interactive elements (ring-2 ring-accent)
- Consistent dark mode throughout (no white input boxes in dark mode)
- Semantic HTML structure (nav, section, article tags)
- Alt text placeholders for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support

### Visual Hierarchy
- Bold, large typography for hero name creates immediate impact
- Generous whitespace between sections (py-20 to py-32)
- Accent color used sparingly for CTAs and active states
- Consistent card elevation pattern (shadow-lg for interactive, shadow-md for static)

This design balances professional credibility with creative personality, ensuring the portfolio stands out while remaining highly functional and accessible.