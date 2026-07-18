# Joyful Home - Project Structure & Workflow

This document provides a clear summary of how your local workspace is organized to avoid confusion between the live Landing Page and the Full Website under review.

## 📂 Root Directory Overview

- **`src/`**: Contains the Next.js application (all your code, components, and pages).
- **`public/`**: Contains static assets like fonts, logos, and images. It also contains the `CNAME` file that ensures `joyfulhome.ug` points to this repository.
- **`_archive/`**: A cleanup folder containing old HTML exports (`JoyfulHome.dc.html`), zip files, and Python utility scripts that are no longer actively used. They are kept here safely out of the way.
- **`next.config.ts`**, **`package.json`**, etc.: Standard Next.js configuration files.

---

## 🛠️ The Next.js App (`src/app/`)

This is the most critical part of the setup. To easily switch between the "Coming Soon" landing page and the "Full Website", the project uses a file-swapping strategy inside `src/app/`:

* **`page.tsx` (The Active Page)**
  This file dictates what the world currently sees. Right now, it contains the "Something Joyful is Coming" landing page code. Since this is the active `page.tsx`, any pushes to GitHub will deploy this Landing Page to `joyfulhome.ug`.

* **`page_original.tsx` (The Full Website Code)**
  This file contains the complete, fully-designed website (including your latest Hero section updates, About, Services, etc.). It sits safely alongside `page.tsx` without interfering with the live landing page.

---

## 🚀 How to Go Live with the Full Website

Once the client finishes reviewing the full website (currently hosted separately on the `test-joyfulhome` repository) and gives you the green light to launch on `joyfulhome.ug`, follow these 3 simple steps:

1. **Rename the Landing Page**
   Rename `src/app/page.tsx` to `src/app/page_coming_soon.tsx` (to save it just in case).

2. **Activate the Full Site**
   Rename `src/app/page_original.tsx` to `src/app/page.tsx`.

3. **Deploy**
   Commit your changes and push to GitHub:
   ```bash
   git add .
   git commit -m "Launch full website"
   git push
   ```

Because your `public/CNAME` file is perfectly intact, GitHub Pages will automatically build the new `page.tsx` and the full website will instantly go live on `joyfulhome.ug`!
