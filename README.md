# Lucas Corte - Modern Landing Page

A stunning, responsive, and elegant landing page built with React, Vite, HTML, CSS, and JavaScript. Features beautiful animations, smooth scrolling, and a modern design aesthetic.

## ✨ Features

- **Modern Design**: Contemporary aesthetics with gradient overlays and smooth transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Delightful micro-interactions and floating elements
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Beautiful Components**: 
  - Navigation with scroll detection
  - Hero section with parallax effects
  - Features showcase with hover animations
  - Services section with interactive cards
  - Testimonials carousel
  - Call-to-action section
  - Comprehensive footer

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (or yarn)

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   cd LucasCorteSite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

The application will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── styles/             # CSS stylesheets
│   ├── global.css
│   ├── Navigation.css
│   ├── Hero.css
│   ├── Features.css
│   ├── Services.css
│   ├── Testimonials.css
│   ├── CTA.css
│   └── Footer.css
├── App.jsx            # Main App component
└── main.jsx          # Entry point

index.html            # HTML template
vite.config.js       # Vite configuration
package.json         # Project dependencies
```

## 🎨 Color Palette

- **Primary Accent**: Cyan/Blue gradient (`#00d4ff` to `#0099ff`)
- **Background**: Dark navy/purple (`#0f0f1e`, `#1a1a2e`)
- **Text Primary**: White (`#ffffff`)
- **Text Secondary**: Light gray (`#a0a0a0`, `#b0b0b0`)

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally

## 🔧 Customization

### Colors
Edit the gradient colors in `src/styles/global.css` and component-specific CSS files:
```css
background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
```

### Content
Update text and information in each component file (`src/components/*.jsx`)

### Fonts
The project uses Google Fonts (Poppins and Space Mono). Modify the font links in `index.html`

### Sections
Each section is a separate component for easy modification:
- Edit component content in `src/components/`
- Modify styling in corresponding `src/styles/` files

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- `1024px` - Tablets
- `768px` - Small tablets and large phones
- `480px` - Mobile devices

All components adapt gracefully to different screen sizes.

## ✨ Key Features Explained

### Parallax Effects
The Hero section includes parallax scrolling with animated blobs that move as you scroll.

### Smooth Navigation
The navigation bar transforms as you scroll, with a frosted glass effect.

### Interactive Components
Cards and buttons have hover effects, animations, and smooth transitions for enhanced interactivity.

### Carousel
The testimonials section features a smooth carousel with dot navigation.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

## 🌐 Deployment

The build can be deployed to various platforms:
- **Vercel**: Push to GitHub and connect to Vercel
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3 + CloudFront**: Upload and configure
- **GitHub Pages**: Use `gh-pages` package

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and customize this landing page for your needs.

---

**Built with elegance and innovation** ✨
