# Tirumala Earthing Website Clone

A modern, responsive website clone of tirumalaearthing.com built with React, TypeScript, Ant Design, Tailwind CSS, and Framer Motion animations.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Component Library**: Built with Ant Design for consistent UI components
- **TypeScript**: Full type safety for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📦 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with links and contact info
│   ├── Hero.tsx        # Hero section with CTA
│   ├── About.tsx       # About us section
│   ├── Products.tsx    # Products showcase
│   ├── Services.tsx    # Services section
│   └── Contact.tsx     # Contact form and info
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Key Features

### Sections

1. **Hero Section**: Eye-catching landing area with call-to-action buttons
2. **About Section**: Company information and statistics
3. **Products Section**: Showcase of earthing and lightning protection products
4. **Services Section**: Installation, maintenance, and consultation services
5. **Contact Section**: Contact form and company information

### Animations

- Smooth scroll animations on section entry
- Hover effects on interactive elements
- Staggered animations for lists and grids
- Scroll-to-top button with fade in/out
- Mobile menu with slide animations

## 🎯 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',
      secondary: '#3b82f6',
    },
  },
}
```

### Content

Update the content in each component file to match your requirements.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions for deployment

## 📄 License

This project is open source and available for use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
