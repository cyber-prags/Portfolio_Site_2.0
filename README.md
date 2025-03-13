
# Portfolio_Site_2.0

Check out the website at : https://pragyan-dutta.netlify.app/

![image](https://github.com/user-attachments/assets/1b2062d9-1af7-4d0a-bf93-54008abc2fcb)



A modern, minimal, and highly customizable portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Accertainty UI** components.

---

## 🚀 Overview

This repository contains the source code for a **personal portfolio website** designed to showcase projects, publications, certifications, and a dynamic resume/CV. The site highlights **advanced UI animations**, a **floating navigation bar**, **interactive cards**, and a **custom-styled sidebar**. The design is centered around **clean aesthetics**, **smooth animations**, and **easy scalability**.

## ✨ Features

### ✅ Next.js 13+ (App Router)
- Utilizes the latest Next.js features for improved performance and streamlined file structure.
- Includes `app/` directory with page-based routing (e.g., `/cv`, `/publications`, `/certifications`).

### ✅ Tailwind CSS for Styling
- Utility-first CSS framework for rapid UI development.
- Custom theming for **modern and minimal** styling.
- Responsive layouts for desktop and mobile.

### ✅ Framer Motion for Smooth Animations
- Floating navbar that auto-hides on scroll.
- Expandable **publications and certifications** cards with motion effects.
- Interactive UI elements for a rich experience.

### ✅ Accertainty UI Components
- Prebuilt UI components for efficient development.
- Used for **grids, modals, buttons, animations, and UI effects**.

### ✅ Hero Section & Dynamic Text
- **TextGenerateEffect** and **FlipWords** hooks for rotating job titles.
- Podcast player embedded in a stylish card (audio resume feature).

### ✅ Resume/CV Page
- Sections for **Work Experience, Education, Skills, Publications, Certifications**.
- Expandable cards with **motion modals** for detailed content.
- **Floating Navbar & Sidebar** for smooth navigation.

### ✅ Advanced Image & Media Management
- **next/image** for optimized images.
- Example **interests section** with **travel, powerlifting, music, football** photos.

### ✅ Netlify Deployment
- Configured for Netlify with build command `npm run build`.
- Includes Next.js runtime plugin & Lighthouse plugin for performance checks.

### ✅ ESLint & TypeScript
- Strict linting rules for **code quality**.
- Type-safe components for **better maintainability**.

---

## 📁 Folder Structure

```bash
.
├── app/
│   ├── cv/
│   │   └── page.tsx        # Main CV page with floating nav
│   ├── layout.tsx          # Root layout with global providers
│   ├── page.tsx            # Homepage (Hero, Projects, Blog, etc.)
│   ├── provider.ts         # ThemeProvider & global config
│   └── api/sentry-example-api/
├── components/
│   ├── Hero.tsx            # Hero section with dynamic text & flipping words
│   ├── FloatingNavbar2.tsx # Floating navigation bar
│   ├── ExpandableProjects.tsx
│   ├── Experience.tsx
│   ├── Clients.tsx
│   ├── Footer.tsx
│   ├── MagicButton.tsx     # Animated button component
│   ├── ui/
│   │   ├── TextGenerateEffect.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── CanvasRevealEffect.tsx
│   │   ├── HoverBorder.tsx
│   │   ├── InfiniteCards.tsx
│   │   └── ...
├── public/
│   ├── Profile.jpeg
│   ├── AWS_AI_Prac.png
│   ├── ...
├── .eslintrc.json
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── ...
```

---

## 🛠 Installation & Setup

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/Portfolio_Site_2.0.git
cd Portfolio_Site_2.0
```

### 🔹 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 🔹 3. Run in Development
```bash
npm run dev
# or
yarn dev
```
Now, open `http://localhost:3000` in your browser.

### 🔹 4. Build for Production
```bash
npm run build
# or
yarn build
```

### 🔹 5. Deploy
- **Netlify**: Directly connect the repository and set `npm run build` as the build command.
- **Vercel**: Use `vercel` CLI or Vercel dashboard.
- **Custom Hosting**: Supports Docker, AWS Amplify, etc.

---

## 👨‍💻 Contributing

1. **Fork** this repository.
2. Create a **feature branch** (`git checkout -b feature/newFeature`).
3. **Commit** your changes (`git commit -m "Add new feature"`).
4. **Push** to your fork (`git push origin feature/newFeature`).
5. Open a **Pull Request** in this repo.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to modify and reuse it.

---

## 📸 Screenshots

<details>
<summary>Click to Expand</summary>

1. **Homepage / Hero**  
   Displays **dynamic text generation, flipping job titles, quick navigation**.

2. **CV Page**  
   Features advanced expansions for **Work Experience, Education, Publications, Certifications**.

3. **Floating Navbar & Return Button**  
   Provides a **minimal, auto-hiding top nav** and a **back-arrow tooltip button**.

4. **Sidebar**  
   Profile picture, social links, **podcast player**, **glowing CV download button**.

5. **Interests Section**  
   Displays images of **traveling, powerlifting, music, football**, etc. in a responsive grid.

</details>

---

## 📬 Contact

- **Author**: [Pragyan Dutta](https://www.linkedin.com/in/pragyan-jyoti-dutta/)  
- **Website**: [https://pragyan-dutta.netlify.app/](https://pragyan-dutta.netlify.app/)  
- **GitHub**: [@cyber-prags](https://github.com/cyber-prags)  

If you have any questions or suggestions, feel free to reach out or open an issue!

---

**Thank you** for checking out **Portfolio_Site_2.0**! 🚀🎨
