# SkillARC — Achieving Real Change

SkillARC is a responsive, modern web application for the SkillARC NGO, built on **Next.js 14 (App Router)**, **Tailwind CSS v4**, and **Framer Motion**. It features a design system utilizing a soft pastel-colored palette, clean layout margins, uniform `rounded-full` CTA buttons, and interactive transitions.

---

## 🚀 Features

* **Scroll Animations**: Page sections trigger smooth entrance fades (`fade-up`, `fade-left`, `fade-right`, `scale-in`) on scroll via a prefers-reduced-motion-compliant `<AnimatedSection>` wrapper.
* **Page Transitions**: route-change animations using Framer Motion's `<AnimatePresence>` and pathname tracking.
* **SVG Path-Drawn Loader**: A vector drawing animation of the SkillARC "S" logo, configured to display only on the first visit of a session using `sessionStorage`.
* **Scroll-to-Top Button**: A pastel-blue button appearing after scrolling `300px`, providing smooth scroll-to-top interaction.
* **Production Configurations**: Includes robots.txt, dynamic XML sitemaps, manifest.json for PWA installs, and secure server headers.

---

## 🛠️ Getting Started

### Prerequisites

* Node.js (v18.x or higher)
* npm (v9.x or higher)

### Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
   Open `.env.local` and customize the values:
   * `NEXT_PUBLIC_SITE_URL`: The production canonical URL of the site.
   * `NEXT_PUBLIC_CONTACT_EMAIL`: The default email address receiving general inquiries.

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

4. **Verify Production Compile**:
   Check for TypeScript and bundling compilation:
   ```bash
   npm run build
   ```

---

## 🖼️ How to Add Real Photos

All media pages and section placeholders currently render abstract, styled CSS gradients with camera icons to keep the UI clean. To swap these out for actual photographs:

1. Place your target images (JPEG/PNG/WebP format) into the `public/` directory (e.g., `/public/workshops/session-1.jpg`).
2. Open the desired section file, for example, the photo gallery component:
   * [GallerySection.tsx](file:///Users/ritesh/Documents/SkillArc/skillarc/components/sections/media/GallerySection.tsx)
3. Locate the placeholder `div` element inside the mapping loop:
   ```tsx
   <div className="w-full aspect-square rounded-3xl bg-gradient-to-tr ... flex items-center justify-center">
     <Camera className="w-6 h-6 text-charcoal/30" />
   </div>
   ```
4. Replace the placeholder container with Next.js's optimized `<Image>` component:
   ```tsx
   import Image from "next/image";
   // ...
   <div className="w-full aspect-square rounded-3xl overflow-hidden relative shadow-sm">
     <Image
       src="/workshops/session-1.jpg"
       alt="Workshop - March 2024"
       fill
       className="object-cover hover:scale-105 transition-transform duration-500"
       sizes="(max-w-768px) 100vw, 33vw"
     />
   </div>
   ```

---

## 🔢 How to Update Stats and Constants

All of the website's copy, statistics, milestones, FAQ entries, resource cards, and internship descriptions are organized in a single configuration file.

* To update numbers (such as increasing `5,000+ Students` or adding new milestones), open:
  * [constants.ts](file:///Users/ritesh/Documents/SkillArc/skillarc/lib/constants.ts)
* Edit the arrays (`IMPACT_STATS`, `PROGRAMS`, `MILESTONES`, `ROLES`, etc.) to immediately populate updates across all page rendering loops.

---

## 🌐 Deployment to Vercel

The SkillARC codebase is fully optimized for **Vercel** out-of-the-box:

1. **Deploy using Vercel CLI**:
   Ensure you have the Vercel CLI installed globally or run it via npx:
   ```bash
   npx vercel
   ```
   Follow the prompts to link the project, select the defaults, and perform a preview build.

2. **Promote to Production**:
   ```bash
   npx vercel --prod
   ```

3. **GitHub Integration**:
   For automatic builds on commits, import your repository directly into the Vercel Dashboard, add your environment variables (`NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`) under the project settings, and click deploy.
